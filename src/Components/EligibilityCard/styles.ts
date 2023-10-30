import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  eligible: {
    height: '20%',
  },
  ineligible: {
    height: '40%',
  },
  container: {
    flex: 0,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    alignSelf: 'center',
    height: '90%',
    width: '90%',
    border: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  inner: {
    height: '50%',
  },
  arrow: {
    height: '20%',
    width: '20%',
  },
});
