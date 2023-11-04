import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  headerContainer: {
    height: '10%',
    width: '82%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  formsContainer: {
    width: '82%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: '800',
  },
  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#339FFF',
    padding: 10,
  },
});
