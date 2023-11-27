import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.darkGrey,
    flexDirection: 'row',
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
