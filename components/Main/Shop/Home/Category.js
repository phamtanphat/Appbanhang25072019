import React, { PureComponent } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Screenapp from '../../../Unit/Screenapp';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

export default class Category extends PureComponent {
    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        const {categoryTypes} = this.props;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}> LIST OF CATEGORY </Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper
                        showsPagination
                        width={imageStyle.width}
                        height={imageStyle.height}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ListProduct')}
                        >
                            <ImageBackground source={littleIcon} style={imageStyle} >
                                <Text style={cateTitle}>Maxi dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ListProduct')}
                        >
                            <ImageBackground source={maxiIcon} style={imageStyle} >
                                <Text style={cateTitle}>Maxi dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ListProduct')}
                        >
                            <ImageBackground source={partyIcon} style={imageStyle} >
                                <Text style={cateTitle}>Maxi dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>   
                    </Swiper>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: Screenapp.height * 0.4,
        backgroundColor: '#fff',
        margin: Screenapp.height * 0.01,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 8,
        padding: Screenapp.height * 0.01,
        paddingTop: 0
    },
    textStyle: {
        color: '#AFAEAF',
        fontSize: Screenapp.height * 0.03
    },
    imageStyle: {
        height: '100 %',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: Screenapp.height * 0.03,
        fontFamily: 'Avenir',
        color: 'gray'
    }
});
