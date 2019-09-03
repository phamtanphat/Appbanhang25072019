import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
    headerMode: 'none'
  }
);

export default createAppContainer(Appnavigator);
