import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.black};
`;

export const ProductContent = styled.View`
  background-color: ${colors.white};
  width: 220px;
  height: 358px;
  /* align-items: center; */
  /* justify-content: center; */
  margin: ${metrics.baseMargin * 2}px;
  padding: ${metrics.basePadding / 2}px;
  border-radius: ${metrics.baseRadius};
`;

export const ImageProduct = styled.Image`
  width: 200;
  height: 200;
`;

export const Title = styled.Text`
  font-size: ${fonts.medium};
  margin: 0 ${metrics.baseMargin}px;
`;

export const Price = styled.Text`
  font-size: ${fonts.big};
  font-weight: bold;
  margin: ${metrics.baseMargin}px ${metrics.baseMargin}px;
`;

export const AddButtom = styled(RectButton)`
  /* margin-top: ${metrics.baseMargin / 2}px; */
  align-self: stretch;
  border-radius: ${metrics.baseRadius}px;
  background: ${colors.violet};
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const AddButtomText = styled.Text`
  font-size: ${fonts.regular}px;
  font-weight: bold;
  color: ${colors.white};
  text-transform: uppercase;
`;
