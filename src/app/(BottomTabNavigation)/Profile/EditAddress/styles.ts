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
  contentContainer: {
    width: '81%',
  },
  backButton: {
    marginTop: 70,
    marginBottom: 35,
    alignSelf: 'flex-start',
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'flex-start',
    marginBottom: 27,
  },
  inputBox: {
    marginBottom: 15,
  },
  smallInput: {
    width: '48%',
  },
  stateLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  submitText: {
    fontSize: 17,
    color: colors.white,
    fontWeight: '600',
  },
  submitIcon: {
    marginLeft: 20,
  },
  submitButton: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 39,
    height: 50,
  },
});
