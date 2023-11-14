import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 6,
    paddingHorizontal: 20,
    marginBottom: 30,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.black,

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
