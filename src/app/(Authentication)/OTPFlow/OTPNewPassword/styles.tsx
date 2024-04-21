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
  contentContainer: {
    width: '81%',
  },
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 90,
    marginRight: 98,
    marginBottom: 40,
  },
  backText: {
    color: colors.midGrey,
    fontSize: 16,
    fontWeight: '400',
  },
  backButton: {
    marginRight: 180,
  },
  displayText: {
    marginRight: 253,
    fontSize: 13,
    opacity: 0.35,
  },
  displayTextEmail: {
    marginRight: 225,
    fontSize: 13,
    opacity: 0.35,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginRight: 35,
    marginBottom: 20,
  },
  nextText: {
    color: colors.white,
    fontSize: 14,
    opacity: 1,
    fontWeight: '600',
    marginLeft: 15,
  },
  nextButton: {
    borderRadius: 3,
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorMessage: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 65,
    justifyContent: 'flex-start',
  },
  inputBox: {
    marginTop: 11,
    width: '100%',
  },
});
