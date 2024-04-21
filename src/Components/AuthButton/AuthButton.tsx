import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

const ButtonBase = styled.TouchableOpacity`
  justifycontent: space-between;
  align-items: center;
  border-radius: 5px;
  flexdirection: 'row';
  width: 100%;
  height: 45px;
  padding: 13px;
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
