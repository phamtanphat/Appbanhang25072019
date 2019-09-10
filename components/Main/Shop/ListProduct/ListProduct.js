/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Screenapp from '../../../Unit/Screenapp';
import icBackList from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';

export default class ListProduct extends PureComponent {
    render() {
        const { container, header, wrapper, iconbackStyles,
            titleStyle, productContainer, lastRowInfo,
            productImage, productInfo, wrapImageStyle, 
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail } = styles;
        return (
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.goBack()}
                        >  
                            <Image source={icBackList} style={iconbackStyles} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={iconbackStyles} />
                    </View>
                    
                    <View style={productContainer}>
                        <View style={wrapImageStyle}>
                            <Image style={productImage} source={sp1} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo} >
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: Screenapp.width * 0.06, width: Screenapp.width * 0.06, borderRadius: Screenapp.width * 0.03 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <View style={wrapImageStyle}>
                            <Image style={productImage} source={sp1} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo} >
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: Screenapp.width * 0.06, width: Screenapp.width * 0.06, borderRadius: Screenapp.width * 0.03 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <View style={wrapImageStyle}>
                            <Image style={productImage} source={sp1} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo} >
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: Screenapp.width * 0.06, width: Screenapp.width * 0.06, borderRadius: Screenapp.width * 0.03 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <View style={wrapImageStyle}>
                            <Image style={productImage} source={sp1} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMaterial}>Material silk</Text>
                            <View style={lastRowInfo} >
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={{ backgroundColor: 'cyan', height: Screenapp.width * 0.06, width: Screenapp.width * 0.06, borderRadius: Screenapp.width * 0.03 }} />
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        padding: Screenapp.height * 0.01,
        
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 8,
        paddingHorizontal: Screenapp.width * 0.01
    },
    header: {
        height: Screenapp.height * 0.08,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Screenapp.width * 0.01,
        alignItems: 'center'
    },
    iconbackStyles: {
        width: Screenapp.width * 0.08,
        height: Screenapp.width * 0.08
    },
    productContainer: {
        flexDirection: 'row',
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,
        paddingVertical: Screenapp.width * 0.04
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: Screenapp.width * 0.05
    },
    wrapImageStyle: {
        width: Screenapp.width * 0.3,
        height: Screenapp.width * 0.3
    },
    productImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    productInfo: {
        justifyContent: 'space-between',
        flex: 1,
        alignSelf: 'stretch'
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingRight: Screenapp.width * 0.01
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: Screenapp.width * 0.06,
        fontWeight: '700'
    }, 
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65', 
    }, 
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    }, 
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: Screenapp.width * 0.03
    }
});
