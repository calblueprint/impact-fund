import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    display: 'flex',
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
    paddingVertical: 12,
    marginTop: 20,
  },
  linkContainer: {
    height: '16%',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: '7%',
    borderTopWidth: 0.5,
    borderColor: colors.darkGrey,
    zIndex: 2,
  },
  title: {
    flex: 1,
    color: colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
