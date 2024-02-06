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
  const [displayFullName, setDisplayFullName] = useState<boolean>(true);
  const [namePlaceholder, setNamePlaceholder] = useState<string>('Full Name');
  useEffect(() => {
    setFullName(session?.user?.user_metadata.fullName);
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/Profile/')}
      >
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.instructionText}>Edit account details</Text>

      <View style={styles.inputBox}>
        <AuthInput
          input={fullName}
          setInput={setFullName}
          defaultValue="Full Name"
          isPassword={false}
          displayInput={displayFullName}
          setDisplayInput={setDisplayFullName}
          keyboard="default"
          autoCapitalization
          placeholder={namePlaceholder}
          setPlaceholder={setNamePlaceholder}
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
