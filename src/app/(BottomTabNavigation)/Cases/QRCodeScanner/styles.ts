import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scanner: {
    height: 300,
    width: 300,
    border: 'solid',
    borderWidth: 3,
  },

  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#339FFF',
    padding: 10,
  },

  crosshair: {
    height: 400,
    width: 400,
    position: 'absolute',
    top: 120,
    left: -90,
  },
});
