import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  toggleButtonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

    width: '100%',
    height: 50,
    borderRadius: 30,
    paddingHorizontal: '1%',
    backgroundColor: colors.lightGrey,
  },
  activeItem: {
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  inactiveItem: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightText: {
    color: colors.darkGrey,
    fontSize: 18,
    fontWeight: '300',
  },
  boldText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '500',
  },
});
