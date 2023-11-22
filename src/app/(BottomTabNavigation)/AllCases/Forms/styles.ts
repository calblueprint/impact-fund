import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  contentContainer: {
    width: '82%',
    height: '84%',
  },
  linkContainer: {
    height: '16%',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: '7%',
    borderTopWidth: 0.5,
    borderColor: colors.darkGrey,
  },
  headerContainer: {
    height: '10%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 15,
  },
  formsContainer: {
    height: '80%',
    width: '100%',
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  lineStyle: {
    borderTopWidth: 1,
    borderTopColor: colors.midGrey,
    marginVertical: 12,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '800',
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 21,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '100',
    lineHeight: 21,
  },
});
