import { StyleSheet } from 'react-native';
import { normalize } from 'yargs';

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
    paddingHorizontal: 20,
    alignSelf: 'center',
    height: '90%',
    width: '90%',
    border: 'solid',
    borderColor: '#767676',
    borderWidth: 0.5,
    borderRadius: 5,
    background: '#FFF',
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  topText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    flex: 0.9,
  },
  text: {
    color: '#2C2C2C',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  inner: {
    height: '50%',
  },
});
