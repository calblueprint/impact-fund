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
import WhiteRightCarrot from '../../../../assets/white-right-carrot.svg';
import ShowBottomNav from '../../../Components/ShowBottomNav/ShowBottomNav';
import { useSession } from '../../../context/AuthContext';

function ProfileScreen() {
  const navigation = useNavigation();

  const { session } = useSession();

  useEffect(() => {
    navigation.addListener('focus', async () => {});
  }, [navigation]);
  ShowBottomNav();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.actionsContainer}>
          <View>
            <View style={styles.actionElementTop}>
              <View style={styles.iconTitle}>
                <Envelope />
                <Text style={styles.textElements}>Email address</Text>
              </View>
            </View>

            <Text style={styles.userText}>{session?.user?.email}</Text>
          </View>
          <View style={styles.line} />
          <View>
            <View style={styles.actionElementTop}>
              <View style={styles.iconTitle}>
                <Person />
                <Text style={styles.textElements}>Full name</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push('/Profile/EditName')}
              >
                <Pencil />
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
                <Location />
                <Text style={styles.textElements}>Street address</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push('/Profile/EditAddress')}
              >
                <Pencil />
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
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/Profile/ResetConfirm',
                params: { email: session?.user?.email },
              })
            }
          >
            <View style={[styles.actionElementTop, styles.resetIcon]}>
              <View style={styles.iconTitle}>
                <Reset />
                <Text style={styles.textElements}>Reset password</Text>
              </View>
              <GreyRightCarrot />
            </View>
          </TouchableOpacity>
          <View style={styles.line} />
          <View>
            <TouchableOpacity
              onPress={() => {
                router.push('/Profile/DeleteAccount');
              }}
              style={styles.bottomPush}
            >
              <View style={styles.actionElementTop}>
                <View style={styles.iconTitle}>
                  <RedTrash />
                  <Text style={styles.redTextElements}>Delete account</Text>
                </View>
                <GreyRightCarrot />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push('/Profile/LogOut');
          }}
          style={styles.signOutButton}
        >
          <View style={styles.signOutInstructions}>
            <SignOut />
            <Text style={styles.signOutText}>Log out</Text>
          </View>
          <WhiteRightCarrot />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileScreen;
