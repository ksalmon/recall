import React from 'react';
import {
      createStackNavigator,
      createAppContainer
    } from 'react-navigation';

import LoadingScene from './src/scenes/Loading'
import LoginScene from './src/scenes/Login'
import SignUpScreen from './src/scenes/SignUp'
import HomeScreen from './src/scenes/Home'

// create our app's navigation stack
const RootStack = createStackNavigator(
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

const App = createAppContainer(RootStack);
export default App;