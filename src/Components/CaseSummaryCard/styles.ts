import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    borderWidth: 0.5,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: colors.midGrey,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1.25,
    shadowRadius: 0.05,
    elevation: 1,
  },
  imageContainer: {
    aspectRatio: 1.9,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  infoContainer: {
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  bottomContainer: {
    height: 47,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 0.5,
    borderColor: colors.midGrey,
  },
  inLineInfo: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
  },
  blurbText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21,
    color: colors.black,
  },
  subText: {
    fontSize: 10,
    fontStyle: 'normal',
    lineHeight: 21,
  },
  lawFirmText: {
    color: colors.darkRed,
    fontWeight: '700',
  },
  dateText: {
    color: colors.darkGrey,
    fontWeight: '300',
  },
  bottomText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
  },
  rightCaret: {
    justifyContent: 'center',
    opacity: 0.5,
  },
});
