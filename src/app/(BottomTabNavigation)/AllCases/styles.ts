import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.white,
  },
  casesContainer: {
    width: '85%',
    flexDirection: 'column',
  },
  innerScroll: {
    rowGap: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  titleText: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 33,
    color: colors.black,
  },
  cameraContainer: {
    width: '100%',
    height: 57,
    marginTop: 18,
    backgroundColor: colors.white,

    borderColor: colors.midGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: colors.midGrey,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1,
    shadowRadius: 0.75,
    elevation: 1,
  },
  buttonInfoContainer: {
    width: '66%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cameraText: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 24,
    color: colors.black,
  },
});
