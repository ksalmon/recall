import React from 'react';
import {
      createStackNavigator,
      createAppContainer
    } from 'react-navigation';

import LoadingScene from './src/scenes/Loading'
import LoginScene from './src/scenes/Login'

// create our app's navigation stack
const RootStack = createStackNavigator(
  {
    Loading: { screen: LoadingScene },
    Login: { screen: LoginScene }
  },
  {
    initialRouteName: "Loading"
  }
)

const App = createAppContainer(RootStack);
export default App;