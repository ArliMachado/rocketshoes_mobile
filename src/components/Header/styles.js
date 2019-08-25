import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, metrics } from '~/styles';

export const Content = styled.View`
  height: ${100 + getStatusBarHeight()};
  padding-top: ${getStatusBarHeight()};
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.black};
  align-items: center;
  padding: ${metrics.basePadding}px;
`;

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.black,
})``;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const IconContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Bag = styled(Icon)`
  color: ${colors.white};
`;
