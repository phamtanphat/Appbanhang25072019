import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Shop extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'gray' }}>
        <TouchableOpacity onPress={this.props.openMenu}>
          <Text style={{ backgroundColor: 'cadetblue' }}> Shop </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
