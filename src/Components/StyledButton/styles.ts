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
  padding: 16,
};

const buttonText = {
  fontSize: 17,
};

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  arrow: {
    marginLeft: 120,
    marginTop: 5,
  },
  arrowWhite: {
    marginLeft: 132,
    marginTop: 5,
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
