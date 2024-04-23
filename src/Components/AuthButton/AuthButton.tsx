import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

const ButtonBase = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  flex-direction: row;
  width: 100%;
  height: 45px;
  padding: 15px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
`;

export const ButtonBlack = styled(ButtonBase)`
  background: ${colors.black};
`;

export const ButtonWhite = styled(ButtonBase)`
  background: ${colors.white};
  border-color: ${colors.black};
  border-width: 1px;
`;

export const ButtonTextBase = styled.Text({
  color: colors.white,
  fontSize: 14,
  opacity: 1,
  fontWeight: '600',
});

export const ButtonTextWhite = styled(ButtonTextBase)`
  color: ${colors.white};
`;

export const ButtonTextBlack = styled(ButtonTextBase)`
  color: ${colors.black};
`;
