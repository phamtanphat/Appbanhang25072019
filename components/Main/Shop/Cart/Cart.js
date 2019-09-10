/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { fromLeft } from 'react-navigation-transitions';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Cartview from './Cartview';
import ProductDetail from '../ProductDetail/ProductDetail';

const StackNavigator = createStackNavigator({
    Cartview: { screen: Cartview },
    ProductDetail: { screen: ProductDetail }
}, {
        initialRouteName: 'Cartview',
        transitionConfig: () => fromLeft(1000),
        headerMode: 'none'
});


export default createAppContainer(StackNavigator);
