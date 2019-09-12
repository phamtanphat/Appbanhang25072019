/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';
import Header from './Header';
import Api from '../../Unit/Api';
import CartsProduct from '../../Unit/CartsProduct';

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';


const { height } = Dimensions.get('window');

export default class Shop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            categoryTypes: [],
            topProducts: [],
            cartArray: []
        };
        CartsProduct.addProductToCart = this.addProductToCart.bind(this);
    }
    componentDidMount() {
        const Url = `${Api}api/`;
        fetch(Url)
        .then(response => response.json())
        .then(resJSON => {
            this.setState({ categoryTypes: resJSON.type, topProducts: resJSON.product });
        });
    }
    
    addProductToCart(product) {
        this.setState({ cartArray: this.state.cartArray.concat({ product, quantity: 1 }) });
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { iconStyle } = styles;
        const { categoryTypes, topProducts, cartArray } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Header onOpenMenu={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Home'}
                        title="Home"
                        renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        onPress={() => this.setState({ selectedTab: 'Home' })}
                    >
                        <Home categoryTypes={categoryTypes} topProducts={topProducts} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Cart'}
                        title="Cart"
                        renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                        badgeText={cartArray.length}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        onPress={() => this.setState({ selectedTab: 'Cart' })}
                    >
                        <Cart cartArray={cartArray} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Search'}
                        title="Search"
                        renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                        onPress={() => this.setState({ selectedTab: 'Search' })}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Contact'}
                        title="Contact"
                        renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
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
        width: height / 28,
        height: height / 28
    }
});

