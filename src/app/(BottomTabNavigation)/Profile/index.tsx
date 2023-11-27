import { router } from 'expo-router';
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
import CasesHeader from '../../../Components/CasesHeader/CasesHeader';
import {
  getCurrentUserInfo,
  signOutUser,
} from '../../../supabase/queries/auth';
import { User, userInstance } from '../../../types/types';

function ProfileScreen() {
  const [currSession, setCurrSession] = useState<User>(userInstance);
  useEffect(() => {
    getCurrentUserInfo().then(result => {
      setCurrSession(result);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CasesHeader />
      </View>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.actionsContainer}>
        <View style={styles.actionElement}>
          <View style={styles.actionElementTop}>
            <View style={styles.iconTitle}>
              <Person style={styles.icon} />
              <Text style={styles.textElements}>Full name</Text>
            </View>
            <TouchableOpacity
              style={styles.actionElement}
              onPress={() => router.push('/Profile/EditName')}
            >
              <Pencil style={styles.edit} />
            </TouchableOpacity>
          </View>

          <Text style={styles.userText}>{currSession.fullName}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.actionElement}>
          <View style={styles.actionElementTop}>
            <View style={styles.iconTitle}>
              <Envelope style={styles.icon} />
              <Text style={styles.textElements}>Email address</Text>
            </View>
            <TouchableOpacity
              style={styles.actionElement}
              onPress={() => router.push('/Profile/EditAddress')}
            >
              <Pencil style={styles.edit} />
            </TouchableOpacity>
          </View>

          <Text style={styles.userText}>sarah@email.com</Text>
        </View>
        <View style={styles.line} />
        <View>
          <View style={styles.actionElementTop}>
            <View style={styles.iconTitle}>
              <Location style={styles.icon} />
              <Text style={styles.textElements}>Street address</Text>
            </View>
            <TouchableOpacity
              style={styles.actionElement}
              onPress={() => router.push('/Profile/EditAddress')}
            >
              <Pencil style={styles.edit} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userText}>{currSession.streetName}</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.actionElement}>
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
        <View style={styles.actionElement}>
          <View style={styles.actionElementTop}>
            <View style={styles.iconTitle}>
              <RedTrash style={styles.icon} />
              <Text style={styles.textElements}>Delete account</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                router.push('/Profile/DeleteAccount');
              }}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => signOutUser()}
        style={styles.signOutButton}
      >
        <SignOut />
        <Text style={styles.signOutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;
