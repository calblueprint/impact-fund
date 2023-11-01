import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideContainer: {
    justifyContent: 'space-evenly',
    height: '70%',
    width: '100%',
  },
  textContainer: {
    flex: 0.7,
    width: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
    paddingTop: 50,
  },
  buttonsContainer: {
    flex: 0.3,
    width: '100%',
    justifyContent: 'center',
    padding: 40,
  },
  buttonWrapperTop: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  buttonWrapperBottom: {
    flex: 0.5,
    justifyContent: 'flex-start',
  },
  button: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonBottom: {
    backgroundColor: '#2C2C2C',
  },
  buttonTop: {
    borderColor: 'black',
    borderWidth: 0.5,
  },
  buttonBottomText: {
    color: '#fff',
  },
});