import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  screenContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '84%',
    paddingVertical: 40,
  },
  textContainer: {
    rowGap: 20,
    marginTop: 85,
  },
});
