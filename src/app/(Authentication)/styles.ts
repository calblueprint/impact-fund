import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export const inputScreenStyles = StyleSheet.create({
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
    columnGap: 15,
  },
});

// export const TitleText = styled.Text({
//   color: colors.black,
//   fontSize: 24,
//   fontWeight: '800',
// });

// export const InstructionText = styled.Text({
//   color: colors.darkGrey,
//   fontSize: 14,
//   fontStyle: 'normal',
//   fontWeight: '300',
// });

// export const ErrorMessageText = styled.Text({
//   color: colors.darkRed,
//   fontSize: 14,
//   fontWeight: '400',
// });
