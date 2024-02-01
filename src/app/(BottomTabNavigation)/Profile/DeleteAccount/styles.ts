import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 25,
  },
  headerContainer: {
    alignSelf: 'flex-start',
    marginTop: 63, // copied this value from profile screen
  },
  textContainer: {
    rowGap: 20,
    marginTop: 100,
  },
  topText: {
    fontSize: 38,
    fontStyle: 'normal',
    fontWeight: '800',
    color: colors.black,
  },
  blurb: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 365, // im guessing here how do i move the buttons to the bottom of the screen w out just adding a bunch of marginTop for this container
  },
  cancelButton: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.black,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    color: colors.black,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: colors.black,
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: {
    color: colors.white,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  gap: {
    width: 10,
  },
});
