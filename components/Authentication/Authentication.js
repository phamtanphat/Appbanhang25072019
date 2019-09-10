import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png';
import Screenapp from '../Unit/Screenapp';


export default class Authentication extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }
    signInForm() {
        this.setState({ isSignIn: true });
    }
    signUpForm() {
        this.setState({ isSignIn: false });
    }

    render() {
        const { row1, iconStyle, titleStyle, container,
            controlButton, signIn, signUp, inactive,
            active, inputStyle, btnSigninNow, btnTextStyle } = styles;
        const signInJSX = (
            <View>
                <TextInput style={inputStyle} placeholder='Enter your email' />
                <TextInput style={inputStyle} placeholder='Enter your password' />
                <TouchableOpacity
                    style={btnSigninNow}
                >
                    <Text style={btnTextStyle}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const signUpJSX = (
            <View>
                <TextInput style={inputStyle} placeholder='Enter your name' />
                <TextInput style={inputStyle} placeholder='Enter your email' />
                <TextInput style={inputStyle} placeholder='Enter your password' />
                <TextInput style={inputStyle} placeholder='Re-enter your password' />
                <TouchableOpacity
                    style={btnSigninNow}
                >
                    <Text style={btnTextStyle}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? signInJSX : signUpJSX;
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                {mainJSX}
                <View style={controlButton}>
                    <TouchableOpacity style={signIn} onPress={this.signInForm.bind(this)}>
                        <Text style={isSignIn ? active : inactive}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUp} onPress={this.signUpForm.bind(this)}>
                        <Text style={isSignIn ? inactive : active}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: Screenapp.width * 0.03,
        justifyContent: 'space-between'
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconStyle: {
        width: Screenapp.width / 10,
        height: Screenapp.width / 10
    },
    titleStyle: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: Screenapp.width / 15
    },
    controlButton: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    signIn: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: Screenapp.height * 0.03,
        borderColor: '#fff',
        borderTopLeftRadius: Screenapp.height * 0.03,
        borderBottomLeftRadius: Screenapp.height * 0.03,
        marginRight: '1%'
    },
    signUp: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: Screenapp.height * 0.03,
        borderColor: '#fff',
        borderTopRightRadius: Screenapp.height * 0.03,
        borderBottomRightRadius: Screenapp.height * 0.03,
        marginLeft: '1%'
    },
    active: {
        color: '#3EBA77'
    },
    inactive: {
        color: '#D7D7D7'
    },
    inputStyle: {
        height: Screenapp.height * 0.08,
        backgroundColor: '#fff',
        marginBottom: Screenapp.height * 0.03,
        borderRadius: Screenapp.height * 0.04,
        paddingLeft: Screenapp.width * 0.05
    },
    btnSigninNow: {
        height: Screenapp.height * 0.08,
        borderRadius: Screenapp.height * 0.04,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTextStyle: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});

