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

export const TitleText = styled.Text({
  color: colors.black,
  fontSize: 24,
  fontWeight: '800',
});
