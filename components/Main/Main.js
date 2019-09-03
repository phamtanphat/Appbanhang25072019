import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Main extends PureComponent {
  render() {
    return (
      <View>
        <Text style={{ backgroundColor: 'coral' }}> Main </Text>
        <TouchableOpacity
          style={{ backgroundColor: 'yellow' }}
          onPress={() => this.props.navigation.navigate('Authentication')}
        >
          <Text>Go to Authentication</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'orange' }}
          onPress={() => this.props.navigation.navigate('OrderHistory')}
        >
          <Text>Go to OrderHistory</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'orange' }}
          onPress={() => this.props.navigation.navigate('ChangeInfo')}
        >
          <Text>Go to ChangeInfo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
