import React from 'react';
import { View, Text, TextInput, TouchableHighlight, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';

const t = require('tcomb-form-native');
const Form = t.form.Form;

const user = t.struct({
  email: t.String,
  password: t.String,
});

const options = {
  fields: {
    email: {
      error: 'Email can\'t be blank'
    },
    password: {
      password: true,
      secureTextEntry: true,
      error: 'Password can\'t be blank'
    }
  }
};

export default class LoginScene extends React.Component {
  constructor(props) {
    super(props)
  }

  signIn() {
    const route = this.props.navigation
    const input = this.refs.form.getValue();

    if (!input) { return }
    firebase.auth().signInWithEmailAndPassword(input.email, input.password)
      .then(function() {
        route.replace('Loading')
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage)
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', textSize: 50 }}>
        <Text>Login</Text>
        <Form ref="form" type={user} options={options}/>
        <Button onPress={this.signIn.bind(this)} title="Sign In"/>
        <Button onPress={() => this.props.navigation.navigate('SignUp')} title="Sign Up!"/>
      </View>
    );
  }
}