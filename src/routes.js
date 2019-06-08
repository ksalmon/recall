import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoadingScene from './scenes/Loading'
import LoginScene from './scenes/Login'
import SignUpScreen from './scenes/SignUp'
import HomeScreen from './scenes/Home'

export const Routes = createStackNavigator(
  {
    Loading: { screen: LoadingScene },
    Login: { screen: LoginScene },
    SignUp: { screen: SignUpScreen },
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: "Loading"
  }
)
