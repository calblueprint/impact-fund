import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },

  everythingContainer: {
    justifyContent: 'flex-start',
    marginTop: '35%',
  },

  textContainer: {
    width: '90%',
    height: '50%',
    marginLeft: '9%',
  },

  welcomeText: {
    color: colors.black,
    fontSize: 50,
    fontWeight: '200',
    letterSpacing: 0.5,
  },

  buttonContainer: {
    alignItems: 'center',
    marginBottom: '20%',
  },
});
