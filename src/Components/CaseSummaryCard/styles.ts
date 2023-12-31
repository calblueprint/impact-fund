import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.midGrey,
    borderStyle: 'solid',
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
  blurbContainer: {
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    overflow: 'hidden',
  },
  bottomContainer: {
    height: 41,
    borderTopWidth: 1,
    borderColor: colors.midGrey,
    justifyContent: 'center',
  },
  inLineInfo: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blurbText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
  },
  subText: {
    fontSize: 12,
    color: colors.darkGrey,
  },
  threeDots: {
    justifyContent: 'center',
    opacity: 0.5,
  },
});
