import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Screenapp from '../../../Unit/Screenapp';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

export default class Topproduct extends PureComponent {
    constructor(props) {
        super(props); 
        this.navigateDetail = this.navigateDetail.bind(this);
    }
    navigateDetail() {
        this.props.navigation.navigate('ProductDetail');
    }
    render() {
        const { container, titleContainer, title, body, 
            productContainer, productImage, productName, productPrice } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body} >
                    <TouchableOpacity 
                        onPress={this.navigateDetail}
                        style={productContainer}
                    >
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>400$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.navigateDetail}
                        style={productContainer}
                    >
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>200$</Text>
                    </TouchableOpacity>
                    <View style={{ height: Screenapp.width * 0.03, width: Screenapp.width }} />
                    <TouchableOpacity 
                        onPress={this.navigateDetail}
                        style={productContainer}
                    >
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>300$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.navigateDetail} 
                        style={productContainer}
                    >
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>500$</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: Screenapp.height * 0.01,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 8
    },
    titleContainer: {
        height: Screenapp.height * 0.08,
        justifyContent: 'center',
        paddingLeft: Screenapp.height * 0.01
    },
    title: {
        color: '#D3D3CF',
        fontSize: Screenapp.height * 0.03
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: Screenapp.height * 0.01
    },
    productContainer: {
        width: Screenapp.width * 0.43,
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 8
    },
    productImage: {
        width: Screenapp.width * 0.43,
        height: Screenapp.height * 0.4
    },
    productName: {
        marginVertical: Screenapp.height * 0.009,
        paddingLeft: Screenapp.width * 0.01,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    productPrice: {
        marginBottom: Screenapp.height * 0.009,
        paddingLeft: Screenapp.width * 0.01,
        fontFamily: 'Avenir',
        color: '#8a2be2',
        fontWeight: '500'
    }
});
