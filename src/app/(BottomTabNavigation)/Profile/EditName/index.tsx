import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import BackButton from '../../../../../assets/back-button.svg';
import Submit from '../../../../../assets/submit.svg';
import { ButtonBlack } from '../../../../Components/AuthButton/AuthButton';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { useSession } from '../../../../context/AuthContext';

function EditNameScreen() {
  const { updateUser, session } = useSession();
  const [fullName, setFullName] = useState<string>('');

  useEffect(() => {
    setFullName(session?.user?.user_metadata.fullName);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/Profile/')}
        >
          <BackButton />
        </TouchableOpacity>
        <Text style={styles.instructionText}>Edit account details</Text>

        <View style={styles.inputBox}>
          <AuthInput
            input={fullName}
            onChangeInput={setFullName}
            labelText="Full name"
            placeholderText="Full name"
            isPassword={false}
            keyboard="default"
            autoCapitalization
          />
        </View>
        <ButtonBlack
          style={styles.submitButton}
          disabled={!fullName || fullName.trim() === ''}
          onPress={() => {
            if (fullName) {
              updateUser({
                data: {
                  fullName,
                },
              });
              router.push('/Profile/');
            } else {
              //ask josh about what should appear in invalid name event
            }
          }}
        >
          <Text style={styles.submitText}>
            Submit
            <Submit style={styles.submitIcon} />
          </Text>
        </ButtonBlack>
      </View>
    </View>
  );
}
export default EditNameScreen;
