import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import firebase from 'react-native-firebase';

export default class LoadingScene extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    const route = this.props.navigation
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        route.replace('Home')
      } else {
        route.replace('Login')
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#d1d1d1" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
