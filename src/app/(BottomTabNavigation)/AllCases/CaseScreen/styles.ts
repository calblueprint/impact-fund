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
  headerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    paddingBottom: 12,
  },
  title: {
    flex: 1,
    color: colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  shareContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginTop: 10,
    //backgroundColor: colors.darkGrey,
  },
  share: {
    textAlign: 'right',
    color: colors.midRed,
    fontSize: 16,
    marginHorizontal: 3,
  },
});
