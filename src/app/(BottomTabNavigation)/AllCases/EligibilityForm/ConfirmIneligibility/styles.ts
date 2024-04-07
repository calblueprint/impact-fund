import { StyleSheet } from 'react-native';

import { colors } from '../../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
  },
  centerContainer: {
    alignItems: 'flex-start',
    width: '85%',
    height: '85%',
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  footerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    rowGap: 16,
    padding: 25,
    borderTopWidth: 0.5,
    borderTopColor: colors.midGrey,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    columnGap: 20,
  },
  buttonBase: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 47,
    borderRadius: 5,
    columnGap: 10,
  },
  eligibleButton: {
    backgroundColor: colors.black,
  },
  ineligbleButton: {
    borderColor: colors.black,
    borderWidth: 0.5,
  },

  titleText: {
    fontSize: 35,
    marginVertical: 60,
    fontWeight: '800',
  },
  infoText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '300',
    fontStyle: 'normal',
    color: colors.darkGrey,
    flexWrap: 'wrap',
    width: '84%',
  },
  buttonText: {
    fontSize: 17,
    lineHeight: 19,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  eligibleButtonText: {
    color: colors.white,
  },
});
