import React from 'react';

import { Content, Logo, IconContent, Bag } from './styles';
import Imagem from '~/assets/logo.png';

const Header = () => (
  <Content>
    <Logo source={Imagem} />
    <IconContent>
      <Bag name="basket" size={24} />
    </IconContent>
  </Content>
);

export default Header;
