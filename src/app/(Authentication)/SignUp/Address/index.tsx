import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import Check from '../../../../../assets/check-white.svg';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import MiniAuthInput from '../../../../Components/MiniAuthInput/MiniAuthInput';
import { signUpUser } from '../../../../supabase/queries/auth';

export default function SignUpScreen() {
  const { name } = useLocalSearchParams() as unknown as { name: string };
  const { email } = useLocalSearchParams() as unknown as { email: string };
  const { password } = useLocalSearchParams() as unknown as {
    password: string;
  };
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');

  const [displayStreet, setDisplayStreet] = useState<boolean>(false);
  const [placeholderStreet, setPlaceholderStreet] =
    useState<string>('Street address');
  const [streetFilled, setStreetFilled] = useState<boolean>(false);

  const [displayCity, setDisplayCity] = useState<boolean>(false);
  const [placeholderCity, setPlaceholderCity] = useState<string>('City');
  const [cityFilled, setCityFilled] = useState<boolean>(false);

  const [displayState, setDisplayState] = useState<boolean>(false);
  const [placeholderState, setPlaceholderState] = useState<string>('State');
  const [stateFilled, setStateFilled] = useState<boolean>(false);

  const [displayZip, setDisplayZip] = useState<boolean>(false);
  const [placeholderZip, setPlaceholderZip] = useState<string>('Zip code');
  const [zipFilled, setZipFilled] = useState<boolean>(false);

  const [, setDummyError] = useState<boolean>(false);

  const filled = () => {
    if (streetFilled && cityFilled && stateFilled && zipFilled) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    if (filled()) {
      signUpUser(name, email, password, streetAddress, city, state, zipcode);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.image}>
          <Image
            source={require('../../../../../assets/inline-logo.jpeg')}
            style={{ width: 100, height: 12.5 }}
          />
        </View>
      </View>

      <Text style={styles.instructionText}>Last, enter your address.</Text>

      <View style={styles.inputBox}>
        <AuthInput
          input={streetAddress}
          setInput={setStreetAddress}
          defaultValue="Street address"
          isPassword={false}
          displayInput={displayStreet}
          setDisplayInput={setDisplayStreet}
          keyboard="default"
          autoCapitalization
          placeholder={placeholderStreet}
          setPlaceholder={setPlaceholderStreet}
          errorHandling={false}
          setDisplayError={setDummyError}
          setFilled={setStreetFilled}
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
          placeholder={placeholderCity}
          setPlaceholder={setPlaceholderCity}
          errorHandling={false}
          setDisplayError={setDummyError}
          setFilled={setCityFilled}
        />
      </View>

      <View style={styles.inputWrap}>
        <View style={styles.smallInputBox}>
          <MiniAuthInput
            input={state}
            setInput={setState}
            defaultValue="State"
            isPassword={false}
            displayInput={displayState}
            setDisplayInput={setDisplayState}
            keyboard="default"
            autoCapitalization
            placeholder={placeholderState}
            setPlaceholder={setPlaceholderState}
            setFilled={setStateFilled}
          />
        </View>

        <Text style={styles.space}> </Text>

        <View style={styles.smallInputBox}>
          <MiniAuthInput
            input={zipcode}
            setInput={setZipcode}
            defaultValue="Zipcode"
            isPassword={false}
            displayInput={displayZip}
            setDisplayInput={setDisplayZip}
            keyboard="default"
            autoCapitalization
            placeholder={placeholderZip}
            setPlaceholder={setPlaceholderZip}
            setFilled={setZipFilled}
          />
        </View>
      </View>
      <Text style={styles.space2}> </Text>

      <TouchableOpacity
        style={filled() ? styles.nextButton : styles.nextButtonGray}
        onPress={() => handleSubmit()}
      >
        <Text style={styles.nextText}>Sign Up</Text>
        <View style={styles.check}>
          <Check />
        </View>
      </TouchableOpacity>
    </View>
  );
}
