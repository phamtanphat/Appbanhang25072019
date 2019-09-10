/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { fromLeft } from 'react-navigation-transitions';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Authentication from '../Authentication/Authentication';
import ChangInfo from '../ChangeInfo/ChangInfo';
import OrderHistory from '../OrderHistory/OrderHistory';
import Main from '../Main/Main';


const StackNavigator = createStackNavigator({
    Authentication: { screen: Authentication },
    ChangInfo: { screen: ChangInfo },
    OrderHistory: { screen: OrderHistory },
    Main: { screen: Main }
}, {
        initialRouteName: 'Main',
        transitionConfig: () => fromLeft(1000),
        headerMode: 'none'
});


export default createAppContainer(StackNavigator);
