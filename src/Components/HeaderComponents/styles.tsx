import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  allCasesBorder: {
    width: '94%',
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGrey,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerText: {
    color: colors.midRed,
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: -0.264,
  },
  backButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
  },
});
