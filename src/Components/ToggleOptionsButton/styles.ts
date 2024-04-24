import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  toggleButtonContainer: {
    width: '100%',
    height: 43,
    backgroundColor: colors.midGrey,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 2,
  },
  toggleItem: {
    width: ' 50%',
    height: 35,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  arrow: {
    marginLeft: 120,
    marginTop: 5,
  },
  arrowWhite: {
    marginLeft: 132,
    marginTop: 5,
  },
});
