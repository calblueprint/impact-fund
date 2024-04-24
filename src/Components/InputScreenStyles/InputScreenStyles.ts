import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

export const InstructionContainer = styled.View({
  flexDirection: 'column',
  marginTop: 35,
  rowGap: 10,
});

export const InputBoxContainer = styled.View({
  flexDirection: 'column',
  width: '100%',
  rowGap: 20,
  marginTop: 34,
});

export const InlineInputContainer = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  columnGap: 20,
});

export const ErrorMessageContainer = styled.View({
  height: 70,
  paddingTop: 10,
});

export const GroupButtonContent = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: 15,
});

export const TitleText = styled.Text({
  color: colors.black,
  fontSize: 24,
  fontWeight: '800',
});

export const InstructionText = styled.Text({
  color: colors.darkGrey,
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: '300',
});

export const ErrorMessageText = styled.Text({
  color: colors.darkRed,
  fontSize: 14,
  fontWeight: '400',
});
