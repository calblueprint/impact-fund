import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    width: '100%',
  },
  flatListContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '84%',
    rowGap: 20,
  },
  requirementContainer: {
    width: '84%',
    flexDirection: 'row',
    paddingTop: 20,
    columnGap: 20,
  },
  innerRequirementBox: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.midGrey,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    columnGap: 20,
  },
  footerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    rowGap: 16,
    borderTopWidth: 1,
    padding: 25,
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
  inactiveEligibleButton: {
    backgroundColor: colors.midGrey,
  },
  ineligbleButton: {
    borderColor: colors.black,
    borderWidth: 0.5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 20,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  image: {
    aspectRatio: 1.75,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
  },
  eligibleButtonText: {
    color: colors.white,
  },
  activeText: {
    color: colors.black,
  },
  inactiveText: {
    color: colors.midGrey,
  },
});
