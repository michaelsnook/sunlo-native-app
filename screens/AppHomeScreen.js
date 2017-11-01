import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class AppHomeScreen extends Component {
  static navigationOptions = {
    title: 'Sunlo Home',
  };
  render() {
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
