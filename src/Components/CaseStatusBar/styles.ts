import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
export default StyleSheet.create({
  caseStatusContainer: {
    aspectRatio: 7.4,
    width: '100%',
  },
  caseStatusContainerSmall: {
    paddingHorizontal: 20,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    border: 'solid',
    borderColor: colors.darkGrey,
    borderWidth: 0.5,
    borderRadius: 5,
    background: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  caseStatusText: {
    color: colors.midnightBlack,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '300',
  },
  statusColor: {
    aspectRatio: 6.1,
    width: '50%',
    flex: 0.9,
    border: 'solid',
    borderWidth: 0.3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusTextColor: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
  },
});
