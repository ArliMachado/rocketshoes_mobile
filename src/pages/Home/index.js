import React, { Component } from 'react';

import Header from '~/components/Header';

import {
  Container,
  ProductContent,
  ImageProduct,
  Title,
  Price,
  AddButtom,
  AddButtomText,
} from './styles';

export default class Home extends Component {
  handleNavigation = page => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  render() {
    return (
      <>
        <Header
          onPressLogo={() => this.handleNavigation('Home')}
          onPressBag={() => this.handleNavigation('Cart')}
        />
        <Container>
          <ProductContent>
            <ImageProduct
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/28/COL-3586-128/COL-3586-128_detalhe2.jpg?resize=326:*',
              }}
            />
            <Title>Tênis Kappa Impact Masculino - Preto e Grafite</Title>
            <Price>R$179,90</Price>
            <AddButtom>
              <AddButtomText>Adicionar</AddButtomText>
            </AddButtom>
          </ProductContent>
        </Container>
      </>
    );
  }
}
