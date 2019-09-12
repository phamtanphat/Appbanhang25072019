/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Screenapp from '../../../Unit/Screenapp';
import Api from '../../../Unit/Api';

export default class Topproduct extends PureComponent {
    constructor(props) {
        super(props); 
        this.navigateDetail = this.navigateDetail.bind(this);
    }
    navigateDetail(productItem) {
        this.props.navigation.navigate('ProductDetail', { productItem });
    }
    render() {
        const { container, titleContainer, title, body, 
            productContainer, productImage, productName, productPrice } = styles;
        const  { topProducts } = this.props;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                    <FlatList 
                        contentContainerStyle={body}
                        data={topProducts}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <TouchableOpacity 
                                onPress={() => this.navigateDetail(item)}
                                style={productContainer}
                            >
                                <Image source={{ uri: `${Api}api/images/product/${item.images[0]}` }} style={productImage} />
                                <Text style={productName}>{item.name.toUpperCase()}</Text>
                                <Text style={productPrice}>{item.price}$</Text>
                            </TouchableOpacity>
                        )}
                        ItemSeparatorComponent={() => <View style={{ height: 1, width: Screenapp.width }} />}
                    />
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
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingBottom: Screenapp.height * 0.01
    },
    productContainer: {
        margin: Screenapp.width * 0.02,
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
