import { router, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import Envelope from '../../../../assets/envelope.svg';
import GreyRightCarrot from '../../../../assets/grey-right-carrot.svg';
import Location from '../../../../assets/location.svg';
import Pencil from '../../../../assets/pencil.svg';
import Person from '../../../../assets/person.svg';
import RedTrash from '../../../../assets/red-trash.svg';
import Reset from '../../../../assets/reset.svg';
import SignOut from '../../../../assets/sign-out.svg';
import WhiteRightCarrot from '../../../../assets/white-right-carrot.svg';
import CasesHeader from '../../../Components/CasesHeader/CasesHeader';
import {
  getCurrentUserInfo,
  signOutUser,
} from '../../../supabase/queries/auth';
import { User, userInstance } from '../../../types/types';

function ProfileScreen() {
  const [currSession, setCurrSession] = useState<User>(userInstance);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', async () => {
      getCurrentUserInfo().then(result => {
        setCurrSession(result);
      });
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <CasesHeader />
          <View style={styles.headerLine} />
        </View>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.actionsContainer}>
          <View>
            <View style={styles.actionElementTop}>
              <View style={styles.iconTitle}>
                <Envelope style={styles.icon} />
                <Text style={styles.textElements}>Email address</Text>
              </View>
            </View>

            <Text style={styles.userText}>{currSession.email}</Text>
          </View>
          <View style={styles.line} />
          <View>
            <View style={styles.actionElementTop}>
              <View style={styles.iconTitle}>
                <Person style={styles.icon} />
                <Text style={styles.textElements}>Full name</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push('/Profile/EditName')}
              >
                <Pencil style={styles.edit} />
              </TouchableOpacity>
            </View>
            <Text style={styles.userText}>{currSession.fullName}</Text>
          </View>
          <View style={styles.line} />
          <View>
            <View style={styles.actionElementTop}>
              <View style={styles.iconTitle}>
                <Location style={styles.icon} />
                <Text style={styles.textElements}>Street address</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push('/Profile/EditAddress')}
              >
                <Pencil style={styles.edit} />
              </TouchableOpacity>
            </View>
            <Text style={styles.userText}>
              {currSession.streetName +
                '\n' +
                currSession.city +
                ', ' +
                currSession.state +
                ' ' +
                currSession.zip}
            </Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <View>
            <View style={[styles.actionElementTop, styles.resetIcon]}>
              <View style={styles.iconTitle}>
                <Reset style={styles.icon} />
                <Text style={styles.textElements}>Reset password</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  router.push('/Profile/DeleteAccount');
                }}
              >
                <GreyRightCarrot style={styles.edit} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View>
            <TouchableOpacity
              onPress={() => {
                router.push('/Profile/DeleteAccount');
              }}
            >
              <View style={styles.actionElementTop}>
                <View style={styles.iconTitle}>
                  <RedTrash style={styles.icon} />
                  <Text style={[styles.textElements, styles.bottomPush]}>
                    Delete account
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => signOutUser()}
          style={styles.signOutButton}
        >
          <View style={styles.signOutContentContainer}>
            <View style={styles.signOutIcon}>
              <SignOut style={styles.edit} />
            </View>
            <Text style={styles.signOutText}>Log out</Text>
          </View>
          <WhiteRightCarrot style={styles.edit} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileScreen;
