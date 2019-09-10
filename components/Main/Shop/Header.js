import React, { PureComponent } from 'react';
// eslint-disable-next-line max-len
import { Text, View, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');
export default class Header extends PureComponent {
    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpenMenu}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder="What do you want to buy?"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: height / 90
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        height: height / 23,
        backgroundColor: '#fff',
        paddingLeft: height / 80,
        marginTop: height / 100,
        paddingVertical: 0
    },
    iconStyle: {
        width: height / 23,
        height: height / 23
    },
    titleStyle: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: height / 30
    }
});
