import React, { useState } from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

import styles from './styles';

interface AuthInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  defaultValue: string;
  isPassword: boolean;
  displayInput: boolean;
  setDisplayInput: React.Dispatch<React.SetStateAction<boolean>>;
  keyboard: KeyboardTypeOptions;
  autoCapitalization: boolean;
  placeholder: string;
  setPlaceholder: React.Dispatch<React.SetStateAction<string>>;
}

export default function AuthInput({
  input,
  setInput,
  defaultValue,
  isPassword,
  displayInput,
  setDisplayInput,
  keyboard,
  autoCapitalization,
  placeholder,
  setPlaceholder,
}: AuthInputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onClick = () => {
    setPlaceholder('');
    setIsFocused(true);
    setDisplayInput(true);
  };

  const offClick = () => {
    if (input.trim() === '') {
      setPlaceholder(defaultValue);
      setDisplayInput(false);
    } else {
      setPlaceholder('');
    }
    setIsFocused(false);
  };

  function removeInput() {
    if (input.trim() === '') {
      setDisplayInput(true);
      setPlaceholder(defaultValue);
    }
  }

  return (
    <View>
      <Text style={styles.inputText}>{displayInput ? defaultValue : ' '} </Text>

      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        value={input}
        onChangeText={setInput}
        onEndEditing={removeInput}
        onFocus={onClick}
        onBlur={offClick}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        keyboardType={keyboard}
        autoCapitalize={autoCapitalization ? 'words' : 'none'}
        clearButtonMode={isPassword ? 'never' : 'while-editing'}
      />
    </View>
  );
}
