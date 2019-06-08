import React, {Component} from 'react';
import {View, Text} from 'react-native'
import firebase from 'react-native-firebase';

import SignOut from '../../components/SignOut'

export default class HomeScene extends Component {
  componentWillMount() {
    const currentUser = firebase.auth().currentUser
  
    this.setState({
      user: currentUser
    });
    

  }
  render() {
    const { user } = this.state
    return (
      <View>
        <SignOut navigator={this.props.navigation}/>
        <Text>
          Hello {user.displayName}
        </Text>
      </View>
    )
  }
}