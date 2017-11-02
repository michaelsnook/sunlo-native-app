import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class RegistrationScreen extends Component {
  static navigationOptions = {
    title: 'New Account',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.container, styles.minPadding, {flex: 1}]}>
        <Text>Start learning your first language</Text>
        <Text>Hindi</Text>
        <Text>Your email</Text>
        <Text>snook@sunlo.co</Text>
        <Text>Your password</Text>
        <Text>abc-password-time</Text>
        <Button
          style={{marginTop: 30, marginBottom: 20}}
          buttonStyle={{backgroundColor: '#025aa5', width: '100%'}}
          textStyle={{color: 'white'}}
          title='Submit'
          onPress={() => navigate('Home')}
        />
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
