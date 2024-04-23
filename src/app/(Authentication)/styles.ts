import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

export const SafeArea = styled(SafeAreaView)`
  background-color: ${colors.white};
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex: 1;
`;

export const ContentContainer = styled.View({
  paddingTop: 20,
  width: '84%',
});

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
  columnGap: 20,
});

export const ErrorMessageContainer = styled.View({
  height: 70,
  paddingTop: 10,
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
  lineHeight: 18,
});

export const ErrorMessageText = styled.Text({
  color: colors.darkRed,
  fontSize: 14,
  fontWeight: '400',
});
