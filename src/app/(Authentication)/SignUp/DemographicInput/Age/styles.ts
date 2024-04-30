import { StyleSheet } from 'react-native';

import { colors } from '../../../../../styles/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  innerContainer: {
    width: '84%',
    paddingTop: 110,
  },
  backButton: {
    marginBottom: 65,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.black,
  },
  instructionTextContainer: {
    marginTop: 16,
    marginBottom: 22,
  },
  instructionText: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.darkGrey,
  },
  pronounsContainer: {
    height: 365,
    width: 320,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.offWhite,

    shadowColor: colors.offWhite,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1.25,
    shadowRadius: 0.05,
    elevation: 1,
    padding: 30,
    marginBottom: 100,
  },
  continueButton: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    backgroundColor: colors.black,
    borderRadius: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  pronounSelectButton: {
    flexDirection: 'row',
    width: '100%',
    columnGap: 20,
    //solely to delete space between buttons, don't want unclickable space in between
    paddingBottom: 20,
  },
  selectText: {
    fontSize: 16,
    fontWeight: '300',
  },
});
