import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Loading from './scenes/Loading'
import Login from './scenes/Login'

// create our app's navigation stack
export const Routes = createStackNavigator(
  {
    Loading: Loading,
    Login: Login
  },
  {
    initialRouteName: "Loading"
  }
)
