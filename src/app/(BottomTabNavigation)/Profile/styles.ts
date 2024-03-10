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
    marginRight: 20,
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
    marginTop: 15,
    marginLeft: 10,
  },
  userText: {
    marginLeft: 34,
    marginTop: 5,
    marginBottom: 15,
    color: colors.darkGrey,
  },
  userTextMargin: {
    marginLeft: 34,
    // marginRight: 20,
    marginTop: 5,
    color: colors.darkGrey,
  },
  line: {
    borderBottom: 'solid',
    borderBottomColor: colors.midGrey,
    borderBottomWidth: 1,
    // width: '%',
    marginLeft: 32,
    // marginRight: 0,
  },
  actionsContainer: {
    // paddingRight: 10,
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
    marginTop: 8,
  },
  headerContainer: {
    marginTop: 63,
    width: '100%',
  },
  signOutButton: {
    alignSelf: 'flex-start',
    width: '100%',
    height: 45,
    borderRadius: 5,
    backgroundColor: colors.black,
    paddingLeft: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signOutText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 10,
  },
  contentContainer: {
    width: '84%',
    alignItems: 'center',
  },
  signOutIcon: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  signOutContentContainer: {
    flexDirection: 'row',
    // alignItems: 'flex-start',
  },
});
