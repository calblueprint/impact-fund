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
    minHeight: '100%',
    width: 317,
    marginTop: 30,
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
    height: 20,
    marginTop: 15,
  },
  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#339FFF',
    padding: 10,
  },
  blurbText: {
    fontSize: 22,
    fontWeight: '700',
  },
  subText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.50)',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: '200',
    lineHeight: 24,
    marginBottom: 20,
  },
});
