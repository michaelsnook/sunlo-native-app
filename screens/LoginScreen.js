import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }
  static navigationOptions = {
    title: 'Log in',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={[styles.container, styles.minPadding, {flex: 1}]}>
        <Text>Your email</Text>
        <TextInput
          value={this.state.email}
          placeholder='snook-test@sunlo.co'
          autoFocus={true}
          keyboardType='email-address'
          returnKeyType='next'
          autoCapitalize='none'
          autoCorrect={false}
          style={{height: 40, width: '80%', borderBottomWidth: 1, borderBottomColor: '#025aa5', textAlign: 'center'}}
          underlineColorAndroid='transparent'
          onChangeText={(email) => this.setState({email})}
        />
      <Text>Your password</Text>
        <TextInput
          value={this.state.password}
          placeholder='abc-strong-password'
          secureTextEntry={true}
          returnKeyType='done'
          autoCapitalize='none'
          autoCorrect={false}
          style={{height: 40, width: '80%', borderBottomWidth: 1, borderBottomColor: '#025aa5', textAlign: 'center'}}
          underlineColorAndroid='transparent'
          onChangeText={(password) => this.setState({password})}

        />
        <Button
          style={{marginTop: 30, marginBottom: 20}}
          buttonStyle={{backgroundColor: '#025aa5', width: '100%'}}
          textStyle={{color: 'white'}}
          title='Log in'
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
