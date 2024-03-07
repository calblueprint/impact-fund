import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, Platform } from 'react-native';

import styles from './styles';
import Camera from '../../../../assets/camera.svg';
import CaseCard from '../../../Components/CaseCard/CaseCard';
import { useSession } from '../../../context/AuthContext';
import { CaseContext } from '../../../context/CaseContext';
import supabase from '../../../supabase/createClient';

function CasesScreen() {
  const { allCases, loading } = useContext(CaseContext);
  const { updateUser, session } = useSession();

  // where should we put this function?
  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return '';
      }
      token = await Notifications.getExpoPushTokenAsync({
        // projectId: Constants?.expoConfig?.extra?.eas.projectId, // TODO: figure out why this isnt working
        projectId: 'd1a810ad-7132-4890-888f-0142c444b21d',
      });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    return token?.data ?? '';
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then(async (token: string) => {
      const { error } = await supabase
        .from('users')
        .upsert({ userId: session?.user.id, expo_push_token: token });
      // should we also store this token in the auth table?
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.casesContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            contentContainerStyle={styles.innerScroll}
            ListHeaderComponent={() => (
              <>
                <View style={styles.headerContainer}>
                  <Text style={styles.titleText}>My Cases</Text>
                </View>
                <TouchableOpacity
                  onPress={() => router.push('/AllCases/QRCodeScanner')}
                  style={styles.cameraContainer}
                >
                  <View style={styles.buttonInfoContainer}>
                    <Camera />
                    <Text style={styles.cameraText}>Add Case with QR code</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
            data={allCases}
            renderItem={({ item }) => <CaseCard {...item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text>Scan your first case using the QR code above!</Text>
            }
          />
        )}
      </View>
    </View>
  );
}

export default CasesScreen;
