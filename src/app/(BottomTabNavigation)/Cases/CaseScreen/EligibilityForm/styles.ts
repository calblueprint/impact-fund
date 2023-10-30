import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 0.7,
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 40,
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
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonBottom: {
    backgroundColor: 'black',
  },
  buttonTop: {
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonBottomText: {
    color: '#fff',
  },
});
