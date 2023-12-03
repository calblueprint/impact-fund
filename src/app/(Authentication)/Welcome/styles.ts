import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    marginTop: 60,
    marginLeft: 30,
  },
  textContainer: {
    width: 325,
    marginLeft: 30,
    marginTop: 140,
    marginBottom: 30,
  },
  welcomeText: {
    marginTop: 310,
    marginRight: 20,
    marginLeft: 40,
    color: colors.black,
    fontSize: 39.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  buttonContainer: {
    alignItems: 'center',
  },
});
