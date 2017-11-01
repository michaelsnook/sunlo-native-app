import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/LoginScreen.js';

export default App = StackNavigator({
  Home: { screen: LoginScreen },
  //Profile: { screen: ProfileScreen },
});
