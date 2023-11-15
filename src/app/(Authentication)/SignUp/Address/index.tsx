import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
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
  const [isFocusedStreet, setIsFocusedStreet] = useState(false);

  const [displayCity, setDisplayCity] = useState(false);
  const [placeholderCity, setPlaceholderCity] = useState('City');
  const [isFocusedCity, setIsFocusedCity] = useState(false);

  const [displayState, setDisplayState] = useState(false);
  const [placeholderState, setPlaceholderState] = useState('State');
  const [isFocusedState, setIsFocusedState] = useState(false);

  const [displayZip, setDisplayZip] = useState(false);
  const [placeholderZip, setPlaceholderZip] = useState('Zip code');
  const [isFocusedZip, setIsFocusedZip] = useState(false);

  // ** Display fields **
  //Street Address
  const onClickStreet = () => {
    setPlaceholderStreet('');
    setIsFocusedStreet(true);
    setDisplayStreet(true);
  };

  const offClickStreet = () => {
    setPlaceholderStreet('Street address');
    setIsFocusedStreet(false);
  };

  function removeStreet() {
    if (streetAddress.trim() === '') {
      setDisplayStreet(false);
    }
  }

  //City
  const onClickCity = () => {
    setPlaceholderCity('');
    setIsFocusedCity(true);
    setDisplayCity(true);
  };

  const offClickCity = () => {
    setPlaceholderCity('City');
    setIsFocusedCity(false);
  };

  function removeCity() {
    if (city.trim() === '') {
      setDisplayCity(false);
    }
  }

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

      <Text style={styles.displayTextStreet}>
        {displayStreet ? 'Street address' : ' '}{' '}
      </Text>
      <TextInput
        style={[styles.input, isFocusedStreet && styles.inputFocused]}
        value={streetAddress}
        onChangeText={setStreetAddress}
        onEndEditing={removeStreet}
        onFocus={onClickStreet}
        onBlur={offClickStreet}
        placeholder={placeholderStreet}
        autoCapitalize="words"
        clearButtonMode="while-editing"
      />

      <Text style={styles.displayTextCity}>{displayCity ? 'City' : ' '} </Text>
      <TextInput
        style={[styles.input, isFocusedCity && styles.inputFocused]}
        value={city}
        onChangeText={setCity}
        onEndEditing={removeCity}
        onFocus={onClickCity}
        onBlur={offClickCity}
        placeholder={placeholderCity}
        autoCapitalize="words"
        clearButtonMode="while-editing"
      />

      <View style={styles.inputWrap}>
        <Text style={styles.displayTextState}>
          {displayState ? 'State' : ' '}{' '}
        </Text>
        <Text style={styles.displayTextZip}>
          {displayZip ? 'Zipcode' : ' '}{' '}
        </Text>
      </View>

      <View style={styles.inputWrap}>
        <TextInput
          style={[styles.inputLeft, isFocusedState && styles.inputLeftFocused]}
          value={state}
          onChangeText={setState}
          onEndEditing={removeState}
          onFocus={onClickState}
          onBlur={offClickState}
          placeholder={placeholderState}
          autoCapitalize="words"
          clearButtonMode="while-editing"
        />
        <TextInput
          style={[styles.inputRight, isFocusedZip && styles.inputRightFocused]}
          maxLength={5}
          value={zipcode}
          onChangeText={setZipcode}
          onEndEditing={removeZip}
          onFocus={onClickZip}
          onBlur={offClickZip}
          placeholder={placeholderZip}
          keyboardType="numeric"
          clearButtonMode="while-editing"
        />
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => signUpUser(name, email, address, password)}
      >
        <Text style={styles.nextText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
