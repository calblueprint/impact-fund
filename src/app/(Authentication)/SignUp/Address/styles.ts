import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 90,
    marginRight: 100,
    marginBottom: 40,
  },
  backText: {
    color: colors.midGrey,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 7,
  },
  backButton: {
    marginRight: 182,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginRight: 25,
    marginBottom: 20,
  },
  inputBox: {
    marginTop: 11,
    width: '100%',
    alignItems: 'center',
  },
  inputWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stateLine: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    width: 310,
    marginLeft: 40,
    marginRight: 100,
    marginTop: 11,
  },
  space: {
    marginBottom: 15,
  },
  nextText: {
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    fontWeight: '600',
    marginLeft: 85,
    marginRight: 20,
  },
  nextButton: {
    marginTop: 10,
    borderRadius: 3,
    width: 310,
    height: 50,
    flexDirection: 'row',
  },
  errorMessage: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
    width: '81%',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  check: {
    marginTop: 1.5,
  },
});
