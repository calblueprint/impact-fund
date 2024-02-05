import { useState } from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';
import { z } from 'zod';

import styles from './styles';

interface AuthInputProps {
  input: string;
  onChangeInput: (input: string) => void;
  labelText: string;
  placeholderText: string;
  isPassword: boolean;
  keyboard: KeyboardTypeOptions;
  autoCapitalization: boolean;
}

export default function AuthInput({
  input,
  onChangeInput,
  labelText,
  placeholderText,
  isPassword,
  keyboard,
  autoCapitalization,
}: AuthInputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>(placeholderText);
  const [isLabelDisplayed, setIsLabelDisplayed] = useState<boolean>(false);

  const onClick = () => {
    setIsFocused(true);
    setPlaceholder('');
    setIsLabelDisplayed(true);
  };

  const offClick = () => {
    setIsFocused(false);
    if (input.trim() === '') {
      setPlaceholder(placeholderText);
      setIsLabelDisplayed(false);
    } else {
      setPlaceholder('');
    }
  };

  return (
    <View>
      <Text style={styles.inputText}>{isLabelDisplayed ? labelText : ' '}</Text>

      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        value={input}
        onChangeText={onChangeInput}
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
