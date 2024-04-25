import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  toggleButtonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: colors.lightGrey,
    borderRadius: 30,
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
    height: 42,
    backgroundColor: colors.white,

    borderColor: colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 30,

    shadowColor: colors.midGrey,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1,
    shadowRadius: 0.75,
    elevation: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveTextContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 4,
  },
  inactiveTextStandardBox: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleSwitchCheckedButtonContainer: {
    backgroundColor: colors.lightGrey,
  },
  toggleSwitchCheckedItem: {
    right: 0,
  },
  lightText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '300',
  },
  boldText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '500',
  },
});
