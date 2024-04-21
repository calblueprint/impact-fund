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
    width: '81%',
  },
  image: {
    width: 130,
    height: 16,
  },
  textContainer: {
    marginTop: 275,
    justifyContent: 'center',
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
    marginTop: 55,
  },
  orLine: {
    flexDirection: 'row',
    marginBottom: 7.5,
    width: '89%',
  },
  orStyle: {
    fontWeight: '200',
    marginTop: -8,
  },
  nextText: {
    color: colors.white,
    fontSize: 17,
    opacity: 1,
    fontWeight: '500',
    marginLeft: 10,
  },
  nextTextBlack: {
    color: colors.black,
    fontSize: 17,
    opacity: 1,
    fontWeight: '500',
    marginLeft: 10,
  },
  baseButton: {
    height: 55,
    borderRadius: 3,
    borderBottomWidth: 2.25,
    borderWidth: 1,
    marginBottom: 13,
    marginTop: -2,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: colors.black,
  },
});
