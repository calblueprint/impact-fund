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
  titleContainer: {
    marginBottom: 22,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.black,
  },
  pronounsContainer: {
    height: 240,
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
    marginBottom: 300,
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
});
