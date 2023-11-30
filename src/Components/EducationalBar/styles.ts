import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    height: 55,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.darkGrey,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // justifyContent: 'center',
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
