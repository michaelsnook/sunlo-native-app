import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen.js';
import RegistrationScreen from './screens/RegistrationScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import AppHomeScreen from './screens/AppHomeScreen.js';

export default App = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Register: { screen: RegistrationScreen },
  Login: { screen: LoginScreen },
  Home: { screen: AppHomeScreen },
  //Profile: { screen: ProfileScreen },
});
