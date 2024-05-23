import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  leftContainer: {
    flex: 0.15,
  },
  middleContainer: {
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    height: 0.5,
    marginVertical: 15,
    backgroundColor: colors.midGrey,
  },
  topContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
