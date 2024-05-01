import { SafeAreaView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { colors } from './colors';

export const SafeArea = styled(SafeAreaView)`
  background-color: ${colors.white};
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const ContentContainer = styled.View({
  paddingTop: 40,
  width: '84%',
});

export const shawdowStyles = StyleSheet.create({
  shadowBorder: {
    backgroundColor: colors.white,
    borderColor: colors.midGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,

    shadowColor: colors.midGrey,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1,
    shadowRadius: 0.75,
    elevation: 1,
  },
});
