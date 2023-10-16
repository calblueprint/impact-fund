import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 30,
  },
  casesContainer: {
    flex: 0.8,
    flexDirection: 'column',
    width: '90%',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    backgroundColor: '#a9a9a9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
