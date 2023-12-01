import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  backText: {
    color: colors.midGrey,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 7,
  },
  backButton: {
    marginTop: 51,
    marginBottom: 55,
    alignSelf: 'flex-start',
    marginLeft: 22,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'flex-start',
    marginLeft: 29,
    marginBottom: 27,
  },
  inputBox: {
    width: 315,
    alignSelf: 'flex-start',
    marginLeft: 29,
    marginBottom: 15,
  },
  stateLine: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    width: 310,
    marginLeft: 29,
    marginRight: 100,
  },
  submitText: {
    fontSize: 17,
    color: colors.white,
    fontWeight: '600',
    marginLeft: 29,
  },
  submitButtonDisabled: {
    opacity: 0.35,
  },
  submitIcon: {
    marginLeft: 20,
  },
  submitButton: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 29,
    borderRadius: 5,
    marginTop: 39,
    width: 150,
    height: 50,
  },
});
