import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  contentContainer: {
    width: '84%',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 33,
    color: colors.black,
    alignSelf: 'flex-start',
    marginTop: 39,
    marginBottom: 18,
  },

  actionsContainer: {
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: 22,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
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
  line: {
    borderBottom: 'solid',
    borderBottomColor: colors.midGrey,
    borderBottomWidth: 1,
    marginLeft: 50,
  },
  centerAlign: {
    alignItems: 'center',
  },
  userText: {
    fontSize: 13,
    fontWeight: '300',
    color: colors.darkGrey,
  },
  profileLabelText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '400',
  },
  redText: {
    color: colors.darkRed,
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
  signOutInstructions: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },
  signOutContentContainer: {
    flexDirection: 'row',
  },
});
