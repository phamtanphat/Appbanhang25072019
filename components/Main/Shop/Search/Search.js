/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { fromLeft } from 'react-navigation-transitions';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Searchview from './Searchview';
import ProductDetail from '../ProductDetail/ProductDetail';


const StackNavigator = createStackNavigator({
    Searchview: { screen: Searchview },
    ProductDetail: { screen: ProductDetail }
}, {
        initialRouteName: 'Searchview',
        transitionConfig: () => fromLeft(1000),
        headerMode: 'none'
});


export default createAppContainer(StackNavigator);
