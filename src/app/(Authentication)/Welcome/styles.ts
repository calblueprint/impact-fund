import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    height: '84%',
    width: '82%',
  },
  imageContainer: {
    width: '100%',
  },
  image: {
    width: 130,
    height: 16,
  },
  textContainer: {
    width: '100%',
    marginTop: 310,
  },
  welcomeText: {
    color: colors.black,
    fontSize: 39.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
  },
});
