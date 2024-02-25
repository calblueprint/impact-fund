import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
    margin: 20,
  },
  insideContainer: {
    justifyContent: 'space-evenly',
    height: '90%',
    width: '100%',
  },
  textContainer: {
    flex: 0.7,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  buttonsContainer: {
    width: '83%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  button: {
    width: 149,
    height: 47,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonBottom: {
    backgroundColor: colors.black,
  },
  buttonTop: {
    borderColor: colors.black,
    borderWidth: 0.5,
  },
  buttonBottomText: {
    color: colors.white,
  },
  reqs: {
    marginVertical: 10,
  },
  info: {
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 300,
    marginLeft: 25,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 55,
  },
});
