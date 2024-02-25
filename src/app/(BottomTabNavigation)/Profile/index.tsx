import { router, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
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
import CasesHeader from '../../../Components/CasesHeader/CasesHeader';
import { useSession } from '../../../context/AuthContext';

function ProfileScreen() {
  const { signOut, session } = useSession();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', async () => {});
  }, [navigation]);
  return (
    <View style={styles.container}>
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

          <Text style={styles.userText}>{session?.user?.email}</Text>
        </View>
        <View style={styles.line} />
        <View>
          <View style={styles.actionElementTop}>
            <View style={styles.iconTitle}>
              <Person style={styles.icon} />
              <Text style={styles.textElements}>Full name</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/Profile/EditName')}>
              <Pencil style={styles.edit} />
            </TouchableOpacity>
          </View>

          <Text style={styles.userText}>
            {session?.user?.user_metadata.fullName}
          </Text>
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
            {session?.user?.user_metadata.streetName +
              '\n' +
              session?.user?.user_metadata.city +
              ', ' +
              session?.user?.user_metadata.state +
              ' ' +
              session?.user?.user_metadata.zip}
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
              <GreyRightCarrot />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <View style={styles.actionElementTop}>
            <View style={styles.iconTitle}>
              <RedTrash style={styles.icon} />
              <Text style={[styles.textElements, styles.bottomPush]}>
                Delete account
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                router.push('/Profile/DeleteAccount');
              }}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => signOut()} style={styles.signOutButton}>
        <SignOut />
        <Text style={styles.signOutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;
