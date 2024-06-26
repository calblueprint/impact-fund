import { StyleSheet } from 'react-native';

export const instruction = StyleSheet.create({
  screenContainer: {
    width: '84%',
    height: '100%',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'column',
    rowGap: 34,
    marginTop: 40,
  },
  instructionContainer: {
    flexDirection: 'column',
    rowGap: 24,
  },
  instructionRow: {
    columnGap: 20,
    flexDirection: 'row',
  },
  buttonsContainer: {
    flexDirection: 'column',
    rowGap: 12,
    marginBottom: 40,
  },
  inLineButtons: {
    flexDirection: 'row',
    columnGap: 20,
    marginBottom: 30,
  },
  textContainer: {
    flex: 1,
  },
});
