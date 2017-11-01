import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen.js';

export default App = StackNavigator({
  Home: { screen: LoginScreen },
  //Profile: { screen: ProfileScreen },
});
