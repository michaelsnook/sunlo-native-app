import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class AppHomeScreen extends Component {
  static navigationOptions = {
    title: 'Sunlo Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.container, styles.minPadding, {flex: 1}]}>
        <Text>hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  minPadding: {
    padding: 5,
  },
});
