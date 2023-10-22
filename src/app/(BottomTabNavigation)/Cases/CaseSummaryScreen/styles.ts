import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 30,
  },
  imageContainer: {
    height: 185,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
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
