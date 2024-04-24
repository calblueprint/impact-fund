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
  },
  smallerButtonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: 150,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 5,
    paddingHorizontal: 32,
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
    fontSize: 36,
    fontWeight: '800',
    color: colors.black,
  },
  instructionContainer: {
    flexDirection: 'row',
    columnGap: 24,
  },
  instructionText: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.black,
    flex: 1,
  },
});
