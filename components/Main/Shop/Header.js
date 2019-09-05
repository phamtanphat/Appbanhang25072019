import React, { PureComponent } from "react";
import { Text, View } from "react-native";

export default class Header extends PureComponent {
  render() {
    return (
      <View style={{ backgroundColor: "#34B089", flex: 1 }}>
        <Text> Header </Text>
      </View>
    );
  }
}
