import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import Submit from '../../../../../assets/submit.svg';
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
      <Text style={styles.instructionText}>Edit account details</Text>

      <View style={styles.inputBox}>
        <AuthInput
          input={fullName}
          onChangeInput={setFullName}
          labelText="Full Name"
          placeholderText="Full Name"
          isPassword={false}
          keyboard="default"
          autoCapitalization
        />
      </View>
      <TouchableOpacity
        style={
          fullName
            ? styles.submitButton
            : [styles.submitButton, styles.submitButtonDisabled]
        }
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
      </TouchableOpacity>
    </View>
  );
}
export default EditNameScreen;
