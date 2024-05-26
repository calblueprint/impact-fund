import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  centered: {
    justifyContent: 'center',
    position: 'relative',
  },
  scanner: {
    height: 300,
    width: 300,
    borderWidth: 5,
    borderRadius: 10,
    marginVertical: 20,
    overflow: 'hidden',
  },
  permissionDenied: {
    padding: 20,
    flexDirection: 'column',
    rowGap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignedText: {
    textAlign: 'center',
  },
  validScan: {
    borderColor: colors.green,
  },
  invalidScan: {
    borderColor: colors.midRed,
  },
  notScanned: {
    borderColor: colors.black,
  },
  viewCaseButton: {
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
    bottom: 30,
  },
  caseButtonText: {
    color: colors.black,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
  },
});
