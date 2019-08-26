import React, { Component } from 'react';

import Header from '~/components/Header';
import { Container } from './styles';

class Cart extends Component {
  handleNavigation = page => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  render() {
    return (
      <Container>
        <Header
          onPressLogo={() => this.handleNavigation('Home')}
          onPressBag={() => this.handleNavigation('Cart')}
        />
      </Container>
    );
  }
}

export default Cart;
