import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
    flexDirection: 'row',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageText: {
    color: colors.black,
    fontSize: 16,
    lineHeight: 21,
  },
  iconContainer: {
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
