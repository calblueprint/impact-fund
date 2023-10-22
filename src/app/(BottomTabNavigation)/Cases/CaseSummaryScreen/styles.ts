import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 30,
  },
  scrollContainer: {
    width: 317,
  },
  imageContainer: {
    height: 185,
    width: 317,
    borderRadius: 5,
    marginBottom: 20,
  },
  blurbContainer: {
    width: 317,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    marginBottom: 20,
  },
  inLineSubInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryText: {
    marginBottom: 20,
  },
  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#339FFF',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
  },
  subText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.50)',
  },
});
