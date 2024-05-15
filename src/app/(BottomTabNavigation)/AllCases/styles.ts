import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.white,
  },
  casesContainer: {
    width: '85%',
    height: '100%',
    flexDirection: 'column',
  },
  innerScroll: {
    rowGap: 20,
    paddingTop: 39,
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});
