import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { Button } from 'react-native-elements';

export default class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      language: null,
    };
  }
  static navigationOptions = {
    title: 'New Account',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.container, styles.minPadding, {flex: 1}]}>
        <Text>Start learning your next language</Text>
        <Picker
          selectedValue={this.state.language}
          mode='dropdown'
          prompt='Select a language to learn'
          autoFocus={true}
          style={{width: '80%'}}
          itemStyle={{borderColor: 'gray', textAlign: 'center'}}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
        >
          <Picker.Item label="Arabic" value="AR" />
          <Picker.Item label="English" value="EN" />
          <Picker.Item label="French" value="FR" />
          <Picker.Item label="Hindi" value="HI" />
          <Picker.Item label="Kannada" value="KN" />
          <Picker.Item label="Konkani" value="KOK" />
          <Picker.Item label="Polish" value="PL" />
          <Picker.Item label="Spanish" value="ES" />
          <Picker.Item label="Tamil" value="TA" />
        </Picker>

        <Text style={{marginBottom:15}}>Your email</Text>
        <TextInput
          value={this.state.email}
          placeholder='snook-test@sunlo.co'
          keyboardType='email-address'
          returnKeyType='next'
          autoCapitalize='none'
          autoCorrect={false}
          style={{height: 40, width: '80%', borderBottomWidth: 1, borderBottomColor: 'gray', textAlign: 'center'}}
          onChangeText={(email) => this.setState({email})}
        />
      <Text style={{marginTop:30, marginBottom: 15}}>Your password</Text>
        <TextInput
          {...this.props}
          value={this.state.password}
          placeholder='abc-strong-password'
          secureTextEntry={true}
          returnKeyType='done'
          autoCapitalize='none'
          autoCorrect={false}
          style={{height: 40, width: '80%', borderBottomWidth: 1, borderBottomColor: 'gray', textAlign: 'center'}}
          onChangeText={(password) => this.setState({password})}
        />
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
