/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { fromLeft } from 'react-navigation-transitions';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Cartview from './Cartview';
import ProductDetail from '../ProductDetail/ProductDetail';

export default class Cart extends PureComponent {
    render() {
        const StackNavigator = createStackNavigator({
            Cartview: { screen: Cartview, params: this.props },
            ProductDetail: { screen: ProductDetail }
        }, {
                initialRouteName: 'Cartview',
                transitionConfig: () => fromLeft(1000),
                headerMode: 'none'
        });
        const Stack = createAppContainer(StackNavigator);
        return (
            <Stack />
        );
    }
}
