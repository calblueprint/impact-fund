import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: 'center',
  },
  headerContainer: {
    //alignContent: 'center',
    justifyContent: 'center',
    //backgroundColor: 'blue',
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    //backgroundColor: 'blue',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
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
    marginLeft: 8,
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
    marginLeft: 8,
  },
  buttonTop: {
    marginRight: 8,
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
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    //width: '80%',
  },
  image: {
    aspectRatio: 1.75,
  },
  title: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 33,
  },
  list: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 30,
    alignItems: 'flex-start',
  },
  flatty: {
    marginHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
    rowGap: 10,
    //backgroundColor: 'green',
  },
  reqs: {
    marginLeft: 30,
  },
  texts: {
    marginRight: 10,
  },
});
