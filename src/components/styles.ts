import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999999',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 19,
    color: '#000000',
    alignSelf: 'center',
    fontWeight: '600',
    textTransform: 'uppercase',
  },

  buttonContainer: {
    backgroundColor: '#bcbcbc',
    width: 325,
    height: 80,
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 1.5,
    marginTop: 20,
    marginBottom: 10,
  },
});
