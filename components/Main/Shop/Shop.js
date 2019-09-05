import React, { PureComponent } from 'react';
import { View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Cart from './Cart/Cart';



export default class Shop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'Home' };
  }
  render() {
    return (
      <View style={{ flex : 1 }}>
           <TabNavigator>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'Home'}
                  title="Home"
                  renderIcon
                  onPress={() => this.setState({ selectedTab: 'Home' })}
              >
                  <Home />
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'Cart'}
                  title="Cart"
                  onPress={() => this.setState({ selectedTab: 'Cart' })}
              >
                  <Cart />
              </TabNavigator.Item>
              
          </TabNavigator>
      </View>
    );
  }
}
// https://github.com/ptomasroos/react-native-tab-navigator
