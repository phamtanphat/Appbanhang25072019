import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import icMenu from '../../../media/appIcon/ic_menu.png';
import icLogo from '../../../media/appIcon/ic_logo.png';
import Screenapp from '../../Unit/Screenapp';

export default class Header extends PureComponent {
  render() {
    const { container, row1, imageStyle, textStyle } = styles;
    return (
      <View style={container}>
        <View style={row1}>
            <TouchableOpacity>
                <Image source={icMenu} style={imageStyle} />
            </TouchableOpacity>
            <Text style={textStyle}>Wearing a Dress</Text>
            <Image source={icLogo} style={imageStyle} />
        </View>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34B089', 
        flex: 1,
        padding: Screenapp.width * 0.02
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageStyle: {
        width: Screenapp.width * 0.08,
        height: Screenapp.height * 0.05
    }
});
