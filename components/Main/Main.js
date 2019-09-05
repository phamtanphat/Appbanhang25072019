import React, { PureComponent } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu/Menu';
import Shop from './Shop/Shop';


export default class Main extends PureComponent {
  // <Text style={{ backgroundColor: 'coral' }}> Main </Text>
  // <TouchableOpacity
  //   style={{ backgroundColor: 'yellow' }}
  //   onPress={() => this.props.navigation.navigate('Authentication')}
  // >
  //   <Text>Go to Authentication</Text>
  // </TouchableOpacity>
  // <TouchableOpacity
  //   style={{ backgroundColor: 'orange' }}
  //   onPress={() => this.props.navigation.navigate('OrderHistory')}
  // >
  //   <Text>Go to OrderHistory</Text>
  // </TouchableOpacity>
  // <TouchableOpacity
  //   style={{ backgroundColor: 'green' }}
  //   onPress={() => this.props.navigation.navigate('ChangeInfo')}
  // >
  //   <Text>Go to ChangeInfo</Text>
  // </TouchableOpacity>
  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };
  render() {
    return (
      <Drawer
        ref={ref => { this.drawer = ref; }}
        content={<Menu closeMenu={this.closeControlPanel.bind(this)} />}
        openDrawerOffset={0.5}
        tapToClose
      >
        <Shop openMenu={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
