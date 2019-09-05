import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Authentication extends PureComponent {
  render() {
    return (
      <View>
        <Text style={{ backgroundColor: 'blue' }}> Authentication </Text>
        <TouchableOpacity
          style={{ backgroundColor: 'yellow' }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>Go back Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
