import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
    rowGap: 20,
  },
  button: {
    paddingHorizontal: 20,
    alignSelf: 'center',
    height: 125,
    width: '100%',
    border: 'solid',
    borderColor: colors.darkGrey,
    borderWidth: 0.5,
    borderRadius: 5,
    background: colors.white,
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
});
