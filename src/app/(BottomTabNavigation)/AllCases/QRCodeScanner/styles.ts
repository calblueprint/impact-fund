import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
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
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 20,
  },
  caseButtonText: {
    color: colors.black,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
  },
});
