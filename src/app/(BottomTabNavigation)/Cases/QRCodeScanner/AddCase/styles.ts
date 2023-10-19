import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    height: 200,
    width: 334,
    marginTop: 10,
    marginBottom: 10,
  },

  blurb: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 50,
  },

  button: {
    border: 'solid',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#339FFF',
    height: 75,
    width: 334,
    borderRadius: 20,
  },
});
