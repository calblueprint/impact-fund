import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyItems: 'center',
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    //backgroundColor: 'blue',
  },
  button: {
    width: 149,
    height: 47,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  buttonBottom: {
    width: 149,
    height: 47,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: colors.black,
  },
  buttonBottomGray: {
    width: 149,
    height: 47,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: colors.midGrey,
  },
  buttonTop: {
    borderColor: colors.black,
    borderWidth: 0.5,
  },
  buttonBottomText: {
    color: colors.white,
  },
  info: {
    marginVertical: 20,
  },
  infoRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  image: {
    aspectRatio: 5,
  },
  title: {
    marginTop: 15,
    fontSize: 35,
    fontWeight: 'bold',
  },
  list: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  flatty: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    rowGap: 10,
    //backgroundColor: 'green',
  },
});
