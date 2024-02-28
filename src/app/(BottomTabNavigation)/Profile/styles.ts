import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  edit: {
    marginRight: 5,
    marginTop: 3,
  },
  iconTitle: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 3,
  },
  actionElementTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 17,
    marginLeft: 10,
  },
  userText: {
    marginLeft: 34,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 10,
    color: colors.darkGrey,
  },
  userTextMargin: {
    marginLeft: 34,
    marginRight: 20,
    marginTop: 5,
    color: colors.darkGrey,
  },
  line: {
    borderBottom: 'solid',
    borderBottomColor: colors.midGrey,
    borderBottomWidth: 0.5,
    width: '92%',
    marginLeft: 32,
    marginRight: 0,
  },
  actionsContainer: {
    paddingRight: 10,
    paddingBottom: 3,
    paddingLeft: 10,
    width: '100%',
    // marginLeft: 29,
    // marginRight: 27,
    border: 'solid',
    borderColor: colors.darkGrey,
    borderWidth: 0.5,
    borderRadius: 5,
    background: colors.white,
    marginBottom: 22,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  bottomPush: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 33,
    color: colors.black,
    alignSelf: 'flex-start',
    // marginLeft: 29,
    marginTop: 39,
    marginBottom: 15,
  },
  userInfo: {
    color: colors.darkGrey,
    fontSize: 20,
  },
  textElements: {
    color: colors.black,
    marginLeft: 10,
    marginTop: 0,
    fontSize: 16,
    fontWeight: '400',
  },
  resetIcon: {
    marginBottom: 10,
  },
  headerLine: {
    borderBottom: 'solid',
    borderBottomColor: colors.midGrey,
    borderBottomWidth: 0.5,
    // marginLeft: 2,
    marginTop: 8,
    // width: 317,
  },
  headerContainer: {
    // alignSelf: 'flex-start',
    marginTop: 63,
    // marginLeft: 27,
    width: '100%',
  },
  signOutButton: {
    alignSelf: 'flex-start',
    width: '100%',
    height: 45,
    borderRadius: 5,
    backgroundColor: colors.black,
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signOutText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
  },
  contentContainer: {
    width: '84%',
    alignItems: 'center',
  },
});
