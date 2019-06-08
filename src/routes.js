import React from 'react';
import {
      createStackNavigator,
      createAppContainer
    } from 'react-navigation';

import Loading from './scenes/Loading'
import Login from './scenes/Login'

// create our app's navigation stack
const RootStack = createStackNavigator(
  {
    Loading: Loading,
    Login: Login
  },
  {
    initialRouteName: "Loading"
  }
)

const Routes = createAppContainer(RootStack);
export default Routes;