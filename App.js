import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen.js';
import AppHomeScreen from './screens/AppHomeScreen.js';

export default App = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: AppHomeScreen },
  //Profile: { screen: ProfileScreen },
});
