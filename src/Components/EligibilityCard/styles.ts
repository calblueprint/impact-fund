import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

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
    width: '100%',
    border: 'solid',
    borderColor: colors.darkGrey,
    borderWidth: 0.5,
    borderRadius: 5,
    background: colors.white,
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
    color: colors.black,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  inner: {
    height: '50%',
  },
});
