import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  toggleButtonContainer: {
    width: '100%',
    height: 43,
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  toggleItem: {
    position: 'absolute',
    marginLeft: 4,
    marginRight: 4,
    width: '50%',
    height: 35,
    backgroundColor: colors.white,

    borderColor: colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,

    shadowColor: colors.midGrey,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1,
    shadowRadius: 0.75,
    elevation: 1,
  },
  toggleSwitchCheckedButtonContainer: {
    backgroundColor: colors.lightGrey,
  },
  toggleSwitchCheckedItem: {
    right: 0,
  },
  blackText: {
    color: colors.black,
    fontWeight: '400',
  },
});
