import React from 'react';

import Header from '../Header';

import { Content, StatusBar } from './styles';

const Container = props => (
  <>
    <StatusBar />
    <Content>
      <Header />
      {props.children}
    </Content>
  </>
);

export default Container;
