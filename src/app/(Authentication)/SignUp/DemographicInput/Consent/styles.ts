import { StyleSheet } from 'react-native';

import { colors } from '../../../../../styles/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 0.87,
    display: 'flex',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.13,
    borderTopWidth: 0.5,
    borderColor: colors.black,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  smallerButtonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: 162,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 5,
    paddingHorizontal: 35,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  acceptButton: {
    backgroundColor: colors.black,
  },
  acceptButtonText: {
    color: colors.white,
  },
  declineButtonText: {
    color: colors.black,
  },
  smallerContentContainer: {
    paddingTop: 110,
    width: '84%',
  },
  backButton: {
    marginBottom: 65,
  },
  titleTextContainer: {
    marginBottom: 34,
  },
  titleText: {
    fontSize: 35,
    fontWeight: '800',
    color: colors.black,
    lineHeight: 33,
  },
  instructionContainer: {
    flexDirection: 'row',
    columnGap: 24,
  },
  instructionText: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.darkGrey,
    flex: 1,
  },
});
