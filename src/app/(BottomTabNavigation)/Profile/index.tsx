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
import { ButtonBlack } from '../../../Components/AuthButton/AuthButton';
import { useSession } from '../../../context/AuthContext';
import { fonts } from '../../../styles/fonts';
import { device, shawdowStyles } from '../../../styles/global';
import { input } from '../../../styles/input';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { session } = useSession();

  useEffect(() => {
    navigation.addListener('focus', async () => {});
  }, [navigation]);

  return (
    <View style={device.safeArea}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={fonts.tabHeading}>Settings</Text>
        </View>

        <View style={[styles.actionsContainer, shawdowStyles.shadowBorder]}>
          <View style={styles.profileDetailsBox}>
            <Envelope />
            <View style={styles.textContainer}>
              <Text style={styles.profileLabelText}>Email address</Text>
              <Text style={styles.userText}>{session?.user?.email}</Text>
            </View>
          </View>

          <View style={styles.line} />

          <TouchableOpacity
            style={styles.profileDetailsBox}
            onPress={() => router.push('/Profile/EditName')}
          >
            <Person />
            <View style={styles.textContainer}>
              <View style={styles.spreadInlineContainer}>
                <Text style={styles.profileLabelText}>Full name</Text>
                <Pencil />
              </View>
              <Text style={styles.userText}>
                {session?.user?.user_metadata.fullName}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity
            style={styles.profileDetailsBox}
            onPress={() => router.push('/Profile/EditAddress')}
          >
            <Location />
            <View style={styles.textContainer}>
              <View style={styles.spreadInlineContainer}>
                <Text style={styles.profileLabelText}>Street address</Text>
                <Pencil />
              </View>
              <Text style={styles.userText}>
                {session?.user?.user_metadata.streetAddress +
                  '\n' +
                  session?.user?.user_metadata.city +
                  ', ' +
                  session?.user?.user_metadata.state +
                  ' ' +
                  session?.user?.user_metadata.zipCode}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.actionsContainer, shawdowStyles.shadowBorder]}>
          <TouchableOpacity
            style={[styles.profileDetailsBox, styles.centerAlign]}
            onPress={() =>
              router.push({
                pathname: '/Profile/ResetConfirm',
                params: { email: session?.user?.email },
              })
            }
          >
            <Reset />
            <View style={styles.spreadInlineContainer}>
              <Text style={styles.profileLabelText}>Reset password</Text>
              <GreyRightCarrot />
            </View>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity
            onPress={() => {
              router.push('/Profile/DeleteAccount');
            }}
            style={[styles.profileDetailsBox, styles.centerAlign]}
          >
            <RedTrash />
            <View style={styles.spreadInlineContainer}>
              <Text style={[styles.profileLabelText, styles.redText]}>
                Delete account
              </Text>
              <GreyRightCarrot />
            </View>
          </TouchableOpacity>
        </View>

        <ButtonBlack
          onPress={() => {
            router.push('/Profile/LogOut');
          }}
        >
          <View style={input.groupButtonContent}>
            <SignOut />
            <Text style={fonts.whiteButton}>Log out</Text>
          </View>
          <WhiteRightCarrot />
        </ButtonBlack>
      </View>
    </View>
  );
}
