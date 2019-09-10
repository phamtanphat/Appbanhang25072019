import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Screenapp from '../Unit/Screenapp';

import profileIcon from '../../media/temp/profile.png';

export default class Menu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { isLogin: true };
    }
    gotoOrderHistory() {
        this.props.navigation.navigate('OrderHistory');
    }
    gotoChangeInfo() {
        this.props.navigation.navigate('ChangInfo');
    }
    render() {
        const { container, profile, buttonSignInStyle,
            textStyle, buttonSignOutStyle, btnTextSignIn,
            loginContainer, displayName } = styles;
        const logout = (<View>
            <TouchableOpacity
                style={buttonSignOutStyle}
                onPress={() => this.props.navigation.navigate('Authentication')}
            >
                <Text style={textStyle}>Sign In</Text>
            </TouchableOpacity>
        </View>);
        const login = (
            <View style={loginContainer}>
                <Text style={displayName}>
                    Pham Tan Phat
                </Text>
                <View>
                    <TouchableOpacity
                        style={buttonSignInStyle}
                        onPress={this.gotoOrderHistory.bind(this)}
                    >
                        <Text style={btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonSignInStyle}
                        onPress={this.gotoChangeInfo.bind(this)}
                    >
                        <Text style={btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonSignInStyle}
                    >
                        <Text style={btnTextSignIn}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );

        const mainJXS = this.state.isLogin ? login : logout;
        return (
            <View style={container}>
                <Image
                    source={profileIcon}
                    style={profile}
                />
                {mainJXS}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: Screenapp.width * 0.01,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: Screenapp.width * 0.4,
        height: Screenapp.width * 0.4,
        borderRadius: Screenapp.width * 0.2,
        marginVertical: Screenapp.height * 0.05
    },
    buttonSignOutStyle: {
        height: Screenapp.height * 0.07,
        borderRadius: Screenapp.width * 0.01,
        paddingHorizontal: Screenapp.width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textStyle: {
        color: '#34B089',
        fontFamily: 'Avenir',
        fontSize: Screenapp.width * 0.05
    },
    buttonSignInStyle: {
        height: Screenapp.height * 0.07,
        borderRadius: Screenapp.width * 0.01,
        width: Screenapp.width * 0.55,
        justifyContent: 'center',
        paddingLeft: Screenapp.width * 0.02,
        backgroundColor: '#fff',
        marginBottom: Screenapp.height * 0.01
    },
    btnTextSignIn: {
        color: '#34B089',
        fontSize: Screenapp.width * 0.05
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    displayName: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: Screenapp.width * 0.07
    }
});
