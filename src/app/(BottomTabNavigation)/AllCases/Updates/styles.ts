import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  contentContainer: {
    width: '82%',
    height: '84%',
  },
  titleContainer: {
    alignItems: 'flex-start',
    paddingTop: 10,
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
    paddingTop: 12,
  },
});
