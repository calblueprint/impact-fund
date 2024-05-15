import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  contentContainer: {
    width: '82%',
    height: '84%',
  },
  headerContainer: {
    height: '12%',
    width: '100%',
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  formsContainer: {
    height: '88%',
    width: '100%',
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
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
  lineStyle: {
    borderTopWidth: 1,
    borderTopColor: colors.midGrey,
    marginVertical: 12,
  },
});
