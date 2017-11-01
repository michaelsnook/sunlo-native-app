import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.homeScreen, styles.minPadding, {flex: 1}]}>
        <Text
          style={[styles.title, styles.whiteText]}
        >
          Welcome to
        </Text>
        <Text
          style={[styles.title, styles.whiteText, {fontWeight: 'bold'}]}
        >
          Sunlo
        </Text>
        <Button
          style={{marginTop: 30, marginBottom: 20}}
          buttonStyle={{backgroundColor: 'white', width: '100%'}}
          textStyle={{color: '#025aa5'}}
          title='Log in'
          onPress={ () => console.log('logging in') }
        />
        <Button
          buttonStyle={{width: '100%', backgroundColor: 'transparent'}}
          title='Sign up'
          onPress={ () => console.log('signing up') }
          underlayColor='transparent'
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
  homeScreen: {
    backgroundColor: '#025aa5',
    flex: 1,
  },
  whiteText: {
    color: 'white',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});