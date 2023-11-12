import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    width: '100%', // essentially the safeAreaView container
    backgroundColor: colors.white,
  },
  contentView: {
    flex: 1,
    borderWidth: 1,
    width: '92%',
    rowGap: 20,
    alignItems: 'center',
  },
  headerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 30,
  },
});
