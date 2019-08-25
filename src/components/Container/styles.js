import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Content = styled.View`
  flex: 1;
  background-color: ${colors.black};
  flex-direction: column;
`;

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.black,
  barStyle: 'light-content',
})``;
