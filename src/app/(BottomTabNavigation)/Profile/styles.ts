import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  iconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileDetailsBox: {
    flexDirection: 'row',
    columnGap: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
  },
  textContainer: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    rowGap: 5,
  },
  actionElementTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 15,
    // marginLeft: 10,
    // marginRight: 20,
    borderWidth: 1,
  },
  userText: {
    borderWidth: 1,
    // marginLeft: 35,
    // marginTop: 5,
    // marginBottom: 15,
    color: colors.darkGrey,
  },
  userTextMargin: {
    marginLeft: 34,
    marginTop: 5,
    color: colors.darkGrey,
  },
  line: {
    borderBottom: 'solid',
    borderBottomColor: colors.midGrey,
    borderBottomWidth: 1,
    marginLeft: 32,
  },
  actionsContainer: {
    // paddingLeft: 10,
    width: '100%',
    border: 'solid',
    borderColor: colors.midGrey,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginBottom: 22,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    shadowColor: colors.midGrey,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1.25,
    shadowRadius: 0.05,
    elevation: 1,
  },
  bottomPush: {
    paddingBottom: 15,
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
  redTextElements: {
    color: colors.darkRed,
    marginLeft: 10,
    marginTop: 0,
    fontSize: 16,
    fontWeight: '400',
  },
  resetIcon: {
    marginBottom: 15,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 45,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: colors.black,
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
  signOutInstructions: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },
  signOutContentContainer: {
    flexDirection: 'row',
  },
});
