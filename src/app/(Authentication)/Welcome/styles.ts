import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
  },
  textContainer: {
    width: 325,
    marginLeft: 30,
    marginTop: 140,
    marginBottom: 30,
  },

  welcomeText: {
    color: colors.black,
    fontSize: 50,
    fontWeight: '200',
    letterSpacing: 0.5,
  },

  buttonContainer: {
    alignItems: 'center',
  },
});
