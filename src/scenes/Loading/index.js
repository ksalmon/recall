import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import firebase from 'react-native-firebase';

export default class LoadingScene extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    
    const route = this.props.navigation
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        route.navigate('Home')
      } else {
        // No user is signed in.
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
