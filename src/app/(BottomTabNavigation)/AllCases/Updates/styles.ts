import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  contentContainer: {
    width: '84%',
  },
  titleContainer: {
    alignItems: 'flex-start',
  },
  title: {
    color: colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  lineStyle: {
    borderTopWidth: 1,
    borderTopColor: colors.midGrey,
    marginVertical: 12,
  },
  updatesContainer: {
    height: '100%',
    width: '100%',
  },
});
