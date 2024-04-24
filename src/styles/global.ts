import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { colors } from './colors';

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
  paddingTop: 40,
  width: '84%',
});
