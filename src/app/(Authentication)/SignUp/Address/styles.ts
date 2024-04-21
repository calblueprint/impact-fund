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
    alignItems: 'flex-start',
    marginTop: 90,
    marginBottom: 40,
    width: '81%',
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
    marginTop: 30,
  },
  inputBox: {
    marginTop: 11,
    width: '100%',
  },
  inputWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stateLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
    width: '100%',
  },
  nextText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 12,
  },
  nextButton: {
    marginTop: 40,
    borderRadius: 3,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorMessage: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
    width: '81%',
    marginVertical: 20,
    marginLeft: 20,
  },
  check: {
    flexDirection: 'row',
    columnGap: 1,
  },
  smallInput: {
    width: '48%',
  },
});
