import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

const baseButton = {
  backgroundColor: colors.white,
  width: 310,
  height: 55,
  borderRadius: 3,
  borderColor: colors.black,
  borderWidth: 0.75,
  marginBottom: 10,
  padding: 17,
};

const buttonText = {
  fontSize: 16,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText,
  whiteText: {
    ...buttonText,
    color: colors.white,
    fontWeight: '400',
    alignSelf: 'flex-start',
  },
  blackText: {
    ...buttonText,
    color: colors.black,
    fontWeight: '400',
    alignSelf: 'flex-start',
  },

  baseButton,
  whiteButton: {
    ...baseButton,
    backgroundColor: colors.white,
  },
  blackButton: {
    ...baseButton,
    backgroundColor: colors.black,
  },
});
