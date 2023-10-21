import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  summaryContainer: {
    width: 338,
    height: 375,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    backgroundColor: '#fff',

    flexDirection: 'column',
  },
  imageContainer: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
  },
  titleContainer: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  bottomContainer: {
    flex: 0.1,
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
  },
  inLineInfo: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    flex: 0.6,
    fontSize: 20,
    fontWeight: 700,
  },
  subText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.50)',
  },
});
