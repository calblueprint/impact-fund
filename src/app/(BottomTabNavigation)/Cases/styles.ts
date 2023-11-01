import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: colors.white,
  },
  headerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 30,
  },
  casesContainer: {
    flex: 0.8,
    flexDirection: 'column',
    width: '90%',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    backgroundColor: colors.midGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
