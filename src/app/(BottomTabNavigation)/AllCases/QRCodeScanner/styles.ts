import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
  },

  scanner: {
    height: 300,
    width: 300,
    border: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 20,
  },
  viewCaseButton: {
    border: 'solid',
    flexDirection: 'row',
    borderColor: colors.black,
    borderWidth: 1,
    height: 45,
    width: 300,
    borderRadius: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  caseButtonText: {
    color: colors.black,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
  },

  errorMessage: {
    color: colors.midRed,
  },
});
