import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft } from 'react-navigation-transitions';

import Authentication from '../Authentication/Authentication';
import OrderHistory from '../OrderHistory/OrderHistory';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import Main from '../Main/Main';

const Appnavigator = createStackNavigator(
  {
    Authentication: { screen: Authentication },
    OrderHistory: { screen: OrderHistory },
    ChangeInfo: { screen: ChangeInfo },
    Main: { screen: Main }
  },
  { initialRouteName: 'Main',
    headerMode: 'none',
    transitionConfig: () => fromLeft(1000)
  }
);

export default createAppContainer(Appnavigator);
