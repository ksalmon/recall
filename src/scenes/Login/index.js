import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
// import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class LoginScene extends React.Component {
  render() {
    console.log("Hello")
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', textSize: 50 }}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}