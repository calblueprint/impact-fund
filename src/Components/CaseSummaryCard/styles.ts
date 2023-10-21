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
    borderRadius: 10,
  },
  headerContainer: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 0.1,
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },
  statusText: {
    fontSize: 16,
  },
  titleText: {
    flex: 0.6,
    fontSize: 17,
  },
});
