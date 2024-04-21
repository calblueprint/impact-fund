import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  profileDetailsBox: {
    flexDirection: 'row',
    columnGap: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    rowGap: 5,
  },
  spreadInlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  userText: {
    fontSize: 13,
    fontWidth: '300',
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
    marginLeft: 50,
  },
  actionsContainer: {
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
  profileLabel: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '400',
  },
  redText: {
    color: colors.darkRed,
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
  centerAlign: {
    alignItems: 'center',
  },
});
