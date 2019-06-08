import React, {Component} from 'react';
import { Button } from 'react-native';
import firebase from 'react-native-firebase';

export default class LogOut extends Component {
  constructor(props) {
    super(props)
  }
  logOut() {
    const route = this.props.navigator
    firebase.auth().signOut().then(function() {
      route.replace('Loading')
    }).catch(function(error) {
      console.log(error);
    });
  }
  render() {
    return (
      <Button title="Sign Out" onPress={this.logOut.bind(this)}/>
    )
  }
}