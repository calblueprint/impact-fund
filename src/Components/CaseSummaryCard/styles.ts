import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    overflow: 'hidden',
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
  bottomContainer: {
    height: 47,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderTopWidth: 0.5,
    borderColor: colors.midGrey,
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
    borderWidth: 1,
  },
});
