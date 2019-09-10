/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Screenapp from '../../../Unit/Screenapp';
import Api from '../../../Unit/Api';

export default class Category extends PureComponent {
    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        const { categoryTypes } = this.props;
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
                        {categoryTypes.map(type => (
                            <TouchableOpacity
                                key={type.id}
                                onPress={() => this.props.navigation.navigate('ListProduct')}
                            >
                                <ImageBackground source={{ uri: `${Api}api/images/type/${type.image}` }} style={imageStyle} >
                                    <Text style={cateTitle}>{type.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))} 
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
