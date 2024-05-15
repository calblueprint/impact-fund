import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: colors.white,
  },
  outerScroll: {
    height: '84%',
    width: '92%',
  },
  innerScroll: {
    alignItems: 'center',
    rowGap: 20,
    paddingBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
