import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import icMenu from '../../../media/appIcon/ic_menu.png';
import icLogo from '../../../media/appIcon/ic_logo.png';
import Screenapp from '../../Unit/Screenapp';

export default class Header extends PureComponent {
  render() {
    const { container, row1, imageStyle, textStyle, row2, textInputStyle } = styles;
    return (
      <View style={container}>
        <View style={row1}>
            <TouchableOpacity>
                <Image source={icMenu} style={imageStyle} />
            </TouchableOpacity>
            <Text style={textStyle}>Wearing a Dress</Text>
            <Image source={icLogo} style={imageStyle} />
        </View>
        <View style={row2} >
          <TextInput
            style={textInputStyle} 
            placeholder="What do you want to buy?"
          />
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
        justifyContent: 'space-between',
        padding: Screenapp.width * 0.02
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageStyle: {
        width: Screenapp.width * 0.08,
        height: Screenapp.height * 0.05
    },
    row2: {
        height: Screenapp.height * 0.05
    },
    textInputStyle: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 0,
        paddingBottom: 0
    },
    textStyle: {
        color: '#fff',
        fontSize: Screenapp.width * 0.05,
        fontFamily: 'Avenir'
    }

});
