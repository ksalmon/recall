import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';

const t = require('tcomb-form-native');
const Form = t.form.Form;


const emailValidation = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(email);
});

const passwordValidation = t.refinement(t.String, password => {
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return re.test(password);
});

const newUser = t.struct({
  name: t.String,
  email: emailValidation,
  password: passwordValidation,
});

const options = {
  fields: {
    name: {
      error: 'Name is Required'
    },
    email: {
      error: 'Insert a valid email'
    },
    password: {
      password: true,
      secureTextEntry: true,
      error: 'Passwords must be a min of six characters and have at least one number, one lowercase and one uppercase letter'
    }
  }
};

export default class SignUpScene extends React.Component {
  constructor(props) {
    super(props)
  }

  signUp() {
    // TODO: Export to Create Functions
    const route = this.props.navigation;
    const input = this.refs.form.getValue();
    console.log("Hello", input)
    if (!input) {
      return
    }
    firebase.auth().createUserWithEmailAndPassword(input.email, input.password)
      .then(function(data) {
        const newUser = data.user
        if (newUser) { 
          newUser.updateProfile({
            displayName: input.name
          });
        }
        route.replace('Loading')
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', textSize: 50 }}>
        <Text>Signup</Text>
        <Form ref="form" type={newUser} options={options}/>
        <TouchableHighlight onPress={this.signUp.bind(this)} underlayColor='#99d9f4'>
          <Text>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}