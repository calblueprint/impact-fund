import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    marginTop: 100,
    width: '81%',
    alignItems: 'center',
  },
  backButton: {
    marginTop: 80,
    marginBottom: 40,
    marginRight: 180,
  },
  displayText: {
    marginRight: 253,
    fontSize: 13,
    opacity: 0.35,
  },
  displayTextEmail: {
    fontSize: 13,
    opacity: 0.35,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginRight: 70,
    marginBottom: 20,
  },
  nextText: {
    color: colors.white,
    fontSize: 14,
    opacity: 1,
    fontWeight: '600',
  },
  nextButton: {
    borderWidth: 1,
    width: 310,
    height: 50,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorMessage: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 65,
  },
  inputBox: {
    marginTop: 11,
    width: '100%',
  },
});
