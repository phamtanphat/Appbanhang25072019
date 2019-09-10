/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import Drawer from 'react-native-drawer';
import Shop from './Shop/Shop';
import Menu from '../Menu/Menu';

export default class Main extends PureComponent {
    closeControlPanel = () => {
        this._drawer.close();
    };
    openControlPanel = () => {
        this._drawer.open();
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={<Menu navigation={this.props.navigation} />}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
