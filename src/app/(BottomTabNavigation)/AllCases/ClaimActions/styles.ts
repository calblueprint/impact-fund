import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    rowGap: 10,
  },
  screenContainer: {
    width: '84%',
    height: '100%',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'column',
    rowGap: 34,
    marginTop: 40,
  },
  infoContainer: {
    flexDirection: 'column',
    rowGap: 24,
  },
  infoRow: {
    columnGap: 20,
    flexDirection: 'row',
  },
  buttonsContainer: {
    flexDirection: 'column',
    rowGap: 12,
    marginBottom: 40,
  },
  inLineButtons: {
    flexDirection: 'row',
    columnGap: 20,
    marginBottom: 30,
  },
  textContainer: {
    flex: 1,
  },
});
