import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import AuthInput from '../../../../Components/AuthInput/AuthInput';
import { signUpUser } from '../../../../supabase/queries/auth';

export default function SignUpScreen() {
  const name = useLocalSearchParams<{ name: string }>();
  const email = useLocalSearchParams<{ email: string }>();
  const password = useLocalSearchParams<{ password: string }>();

  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const address = streetAddress + ' ' + city + ' ' + state + ' ' + zipcode;

  const [displayStreet, setDisplayStreet] = useState(false);
  const [placeholderStreet, setPlaceholderStreet] = useState('Street address');

  const [displayCity, setDisplayCity] = useState(false);
  const [placeholderCity, setPlaceholderCity] = useState('City');

  const [displayState, setDisplayState] = useState(false);
  const [placeholderState, setPlaceholderState] = useState('State');
  const [isFocusedState, setIsFocusedState] = useState(false);

  const [displayZip, setDisplayZip] = useState(false);
  const [placeholderZip, setPlaceholderZip] = useState('Zip code');
  const [isFocusedZip, setIsFocusedZip] = useState(false);

  // ** Display fields **
  //State
  const onClickState = () => {
    setPlaceholderState('');
    setIsFocusedState(true);
    setDisplayState(true);
  };

  const offClickState = () => {
    setPlaceholderState('State');
    setIsFocusedState(false);
  };

  function removeState() {
    if (state.trim() === '') {
      setDisplayState(false);
    }
  }

  //Zip
  const onClickZip = () => {
    setPlaceholderZip('');
    setIsFocusedZip(true);
    setDisplayZip(true);
  };

  const offClickZip = () => {
    setPlaceholderZip('Zipcode');
    setIsFocusedZip(false);
  };

  function removeZip() {
    if (zipcode.trim() === '') {
      setDisplayZip(false);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.instructionText}>Create your account.</Text>

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
        />
      </View>

      <View style={styles.inputWrap}>
        <View style={styles.smallInputBox}>
          <Text style={styles.displayTextSmall}>
            {displayState ? 'State' : ' '}
          </Text>
          <TextInput
            style={[
              styles.inputSmall,
              isFocusedState && styles.inputSmallFocused,
            ]}
            value={state}
            onChangeText={setState}
            onEndEditing={removeState}
            onFocus={onClickState}
            onBlur={offClickState}
            placeholder={placeholderState}
            autoCapitalize="words"
            clearButtonMode="while-editing"
          />
        </View>

        <Text style={styles.space}> </Text>

        <View style={styles.smallInputBox}>
          <Text style={styles.displayTextSmall}>
            {displayZip ? 'Zip' : ' '}
          </Text>
          <TextInput
            style={[
              styles.inputSmall,
              isFocusedZip && styles.inputSmallFocused,
            ]}
            maxLength={5}
            value={zipcode}
            onChangeText={setZipcode}
            onEndEditing={removeZip}
            onFocus={onClickZip}
            onBlur={offClickZip}
            placeholder={placeholderZip}
            keyboardType="default"
            clearButtonMode="while-editing"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        /* the signUpUser function requires first, middle, and last name
        but the figma only wants a full name, so this doesn't work rn */

        // onPress={() => signUpUser(name, email, address, password)}
      >
        <Text style={styles.nextText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
