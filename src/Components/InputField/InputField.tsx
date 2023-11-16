import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';
function InputField({ val, place }: { val: string; place: string }) {
  const [value, setValue] = useState('');
  const [display, setDisplay] = useState(false);
  const [placeholder, setPlaceholder] = useState(place);
  const [isFocused, setIsFocused] = useState(false);

  const onClick = () => {
    setPlaceholder('');
    setIsFocused(true);
    setDisplay(true);
  };

  const offClick = () => {
    if (value.trim() === '') {
      setPlaceholder(place);
    } else {
      setPlaceholder('');
    }
    setIsFocused(false);
  };

  function removePassword() {
    if (value.trim() !== '') {
      setDisplay(true);
    } else {
      setValue('');
      setDisplay(false);
    }
  }
  return (
    <View>
      <Text style={styles.inputText}>{display ? val : ' '} </Text>

      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        value={value}
        onChangeText={setValue}
        onEndEditing={removePassword}
        onFocus={onClick}
        onBlur={offClick}
        placeholder={placeholder}
      />
    </View>
  );
}

export default InputField;
