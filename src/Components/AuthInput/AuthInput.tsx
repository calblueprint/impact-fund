import { useState, useEffect } from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

import styles from './styles';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

interface AuthInputProps {
  input: string;
  onChangeInput: (input: string) => void;
  labelText: string;
  placeholderText: string;
  isPassword: boolean;
  keyboard: KeyboardTypeOptions;
  autoCapitalization: boolean;
  isHalfWidth?: boolean;
}

export default function AuthInput({
  input,
  onChangeInput,
  labelText,
  placeholderText,
  isPassword,
  keyboard,
  autoCapitalization,
  isHalfWidth,
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
    if ((!input || input.trim() === '') && !isPassword) {
      setPlaceholder(placeholderText);
      setIsLabelDisplayed(false);
    } else if (isPassword && !input) {
      setPlaceholder(placeholderText);
      setIsLabelDisplayed(false);
    } else {
      setPlaceholder('');
    }
  };

  useEffect(() => {
    if (!isPassword && input && input.trim() !== '') {
      setIsLabelDisplayed(true);
    }
  }, [input]);

  return (
    <View style={isHalfWidth ? { width: '47%' } : { width: '100%' }}>
      <Text style={fonts.greyVerySmall}>
        {isLabelDisplayed ? labelText : ' '}
      </Text>

      <TextInput
        style={[styles.inputBox, fonts.body, isFocused && styles.inputFocused]}
        value={input}
        onChangeText={onChangeInput}
        onFocus={onClick}
        onBlur={offClick}
        placeholder={placeholder}
        placeholderTextColor={colors.darkGrey}
        secureTextEntry={isPassword}
        keyboardType={keyboard}
        autoCapitalize={autoCapitalization ? 'words' : 'none'}
        clearButtonMode={isPassword ? 'never' : 'while-editing'}
      />
    </View>
  );
}
