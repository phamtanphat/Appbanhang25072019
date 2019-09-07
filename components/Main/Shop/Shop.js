/* eslint-disable no-duplicate-imports */
import React, { PureComponent } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './Header';

import icHomeSelect from '../../../media/appIcon/home0.png';
import icHomeSelected from '../../../media/appIcon/home.png';
import icCartSelect from '../../../media/appIcon/cart0.png';
import icCartSelected from '../../../media/appIcon/cart.png';
import icSearchSelect from '../../../media/appIcon/search0.png';
import icSearchSelected from '../../../media/appIcon/search.png';
import icContactSelect from '../../../media/appIcon/contact0.png';
import icContactSelected from '../../../media/appIcon/contact.png';

const Screenheight = Dimensions.get('window').height;

export default class Shop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'Home' };
  }
  render() {
    const { iconStyle } = styles;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: Screenheight * 0.15 }}>
          <Header openMenu={this.props.openMenu.bind(this)} />
        </View>

        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="Home"
            renderIcon={() => <Image source={icHomeSelect} style={iconStyle} />}
            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            renderSelectedIcon={() => (
              <Image source={icHomeSelected} style={iconStyle} />
            )}
            onPress={() => this.setState({ selectedTab: 'Home' })}
          >
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Cart'}
            title="Cart"
            renderIcon={() => <Image source={icCartSelect} style={iconStyle} />}
            renderSelectedIcon={() => (
              <Image source={icCartSelected} style={iconStyle} />
            )}
            badgeText="1"
            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            onPress={() => this.setState({ selectedTab: 'Cart' })}
          >
            <Cart />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Search'}
            title="Search"
            renderIcon={() => (
              <Image source={icSearchSelect} style={iconStyle} />
            )}
            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            renderSelectedIcon={() => (
              <Image source={icSearchSelected} style={iconStyle} />
            )}
            onPress={() => this.setState({ selectedTab: 'Search' })}
          >
            <Search />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Contact'}
            title="Contact"
            renderIcon={() => (
              <Image source={icContactSelect} style={iconStyle} />
            )}
            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            renderSelectedIcon={() => (
              <Image source={icContactSelected} style={iconStyle} />
            )}
            onPress={() => this.setState({ selectedTab: 'Contact' })}
          >
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    height: Screenheight * 0.04,
    width: Screenheight * 0.04
  }
});
