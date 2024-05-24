import { StyleSheet } from 'react-native';

export const input = StyleSheet.create({
  screenContainer: {
    width: '84%',
    height: '100%',
  },
  instructionContainer: {
    flexDirection: 'column',
    marginTop: 20,
    rowGap: 10,
  },
  inputBoxContainer: {
    flexDirection: 'column',
    width: '100%',
    rowGap: 20,
    marginTop: 34,
  },
  inlineInputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 20,
  },
  errorMessageContainer: {
    height: 70,
    paddingTop: 10,
  },
  inputScreenGap: {
    height: 40,
  },
  groupButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
});
