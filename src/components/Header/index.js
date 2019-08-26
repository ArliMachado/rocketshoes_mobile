import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Content, Logo, IconContent, Bag } from './styles';
import Imagem from '~/assets/logo.png';

function Header({ onPressLogo, onPressBag }) {
  return (
    <Content>
      <TouchableOpacity onPress={onPressLogo}>
        <Logo source={Imagem} />
      </TouchableOpacity>
      <IconContent>
        <TouchableOpacity onPress={onPressBag}>
          <Bag name="basket" size={24} />
        </TouchableOpacity>
      </IconContent>
    </Content>
  );
}

export default Header;
