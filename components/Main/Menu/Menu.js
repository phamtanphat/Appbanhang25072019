import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Menu extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <TouchableOpacity onPress={this.props.closeMenu}>
          <Text style={{ backgroundColor: 'green' }}> Menu </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
