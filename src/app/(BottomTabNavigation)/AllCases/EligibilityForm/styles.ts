import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    width: '84%',
  },
  flatty: {
    // marginHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center',
    // width: '84%',
    // rowGap: 10,
    //backgroundColor: 'green',
    // borderWidth: 1,
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: 20,
  },
  requirementContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    columnGap: 20,
  },
  innerRequirementBox: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.midGrey,
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
    // marginLeft: 8,
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
    // marginLeft: 8,
  },
  buttonTop: {
    // marginRight: 8,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 20,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  image: {
    aspectRatio: 1.75,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    flexDirection: 'row',
    marginVertical: 10,
    // marginHorizontal: 30,
    alignItems: 'flex-start',
  },
  bodyText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
  },
  activeColor: {
    color: colors.black,
  },
  inactiveColor: {
    color: colors.midGrey,
  },
  lineStyle: {
    borderTopWidth: 1,
    borderTopColor: colors.midGrey,
  },
});
