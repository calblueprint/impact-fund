import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import Submit from '../../../../../assets/submit.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import MiniAuthInput from '../../../../Components/MiniAuthInput/MiniAuthInput';
import { useSession } from '../../../../context/AuthContext';

function EditNameScreen() {
  const { updateUser, session } = useSession();
  const [streetName, setStreetName] = useState<string>('');
  const [usState, setUsState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [displayStreetName, setDisplayStreetName] = useState<boolean>(true);
  const [displayState, setDisplayState] = useState<boolean>(true);
  const [displayCity, setDisplayCity] = useState<boolean>(true);
  const [displayZip, setDisplayZip] = useState<boolean>(true);
  const [streetPlaceholder, setStreetPlaceholder] =
    useState<string>('Street NAdfasdf');
  const [statePlaceholder, setStatePlaceholder] = useState<string>('State');
  const [cityPlaceholder, setCityPlaceholder] = useState<string>('City');
  const [zipPlaceholder, setZipPlaceholder] = useState<string>('Zip code');

  useEffect(() => {
    setStreetName(session?.user?.user_metadata.streetName);
    setUsState(session?.user?.user_metadata.state);
    setCity(session?.user?.user_metadata.city);
    setZip(session?.user?.user_metadata.zip);
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
          input={streetName}
          setInput={setStreetName}
          defaultValue="Street Name"
          isPassword={false}
          displayInput={displayStreetName}
          setDisplayInput={setDisplayStreetName}
          keyboard="default"
          autoCapitalization
          placeholder={streetPlaceholder}
          setPlaceholder={setStreetPlaceholder}
        />
      </View>
      <View style={styles.inputBox}>
        <AuthInput
          input={city}
          setInput={setCity}
          defaultValue="City"
          isPassword={false}
          displayInput={displayCity}
          setDisplayInput={setDisplayCity}
          keyboard="default"
          autoCapitalization
          placeholder={cityPlaceholder}
          setPlaceholder={setCityPlaceholder}
        />
      </View>
      <View style={styles.stateLine}>
        <View>
          <MiniAuthInput
            input={usState}
            setInput={setUsState}
            defaultValue="State"
            isPassword={false}
            displayInput={displayState}
            setDisplayInput={setDisplayState}
            keyboard="default"
            autoCapitalization
            placeholder={statePlaceholder}
            setPlaceholder={setStatePlaceholder}
          />
        </View>
        <View>
          <MiniAuthInput
            input={zip}
            setInput={setZip}
            defaultValue="Zip code"
            isPassword={false}
            displayInput={displayZip}
            setDisplayInput={setDisplayZip}
            keyboard="default"
            autoCapitalization
            placeholder={zipPlaceholder}
            setPlaceholder={setZipPlaceholder}
          />
        </View>
      </View>

      <TouchableOpacity
        style={
          streetName && city && usState && zip
            ? styles.submitButton
            : [styles.submitButton, styles.submitButtonDisabled]
        }
        onPress={() => {
          if (streetName && city && usState && zip) {
            updateUser({
              data: {
                streetName,
                city,
                state: usState,
                zip,
              },
            });
            router.push('/Profile/');
          } else {
            //ask josh about case of invalid address
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
