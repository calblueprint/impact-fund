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
    flexDirection: 'row',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 12,
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
});
