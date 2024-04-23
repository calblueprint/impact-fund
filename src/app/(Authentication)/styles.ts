import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

export const TitleText = styled.Text({
  color: colors.black,
  fontSize: 24,
  fontWeight: '800',
});

export const InputBoxContainer = styled.View({
  flexDirection: 'column',
  width: '100%',
  rowGap: 20,
  marginTop: 34,
});
