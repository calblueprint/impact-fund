import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
  },
  contentContainer: {
    width: '84%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topContainer: { marginTop: 40 },
  infoContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
    rowGap: 12,
    marginBottom: 40,
  },
  buttonBase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 47,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonWhite: {
    backgroundColor: colors.white,
    borderColor: colors.black,
  },
  buttonBlack: {
    backgroundColor: colors.black,
  },
  titleText: {
    fontSize: 35,
    fontWeight: '800',
  },
  buttonText: {
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  infoText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '300',
    fontStyle: 'normal',
    color: colors.darkGrey,
    flexWrap: 'wrap',
  },
  blackText: {
    color: colors.black,
  },
  whiteText: {
    color: colors.white,
  },
});
