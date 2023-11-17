import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  actionElement: {
    backgroundColor: colors.white,
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
    marginTop: 5,
    marginBottom: 10,
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
    alignSelf: 'center',
    padding: 10,
    width: '80%',
    border: 'solid',
    borderColor: colors.darkGrey,
    borderWidth: 0.5,
    borderRadius: 5,
    background: colors.white,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 33,
    color: colors.black,
    alignSelf: 'flex-start',
    marginLeft: 42,
    marginTop: 30,
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
  headerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
    marginLeft: 27,
    width: '100%',
    paddingRight: 30,
  },
  signOutButton: {
    marginTop: 20,
    alignSelf: 'flex-start',
    width: '40%',
    height: '8%',
    marginLeft: 42,
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
    fontSize: 20,
  },
});
