// import stuff
import React from 'react'
import {ImageBackground, Platform, StyleSheet, Text, View} from 'react-native'
import {Button} from 'native-base'

var myBackGround = require('./assets/icon/landing.jpg')

// create and export stuff
export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <ImageBackground 
          source = {myBackGround}
          style = {styles.bgStyles}
        >
          <View style = {styles.viewStyles}>
            <Text style = {styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button
              block = {true}
              style = {styles.btnStyle}
            ><Text style = {styles.btnTextStyle}>Start Searching</Text></Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  },
  bgStyles: {
    flex: 1,
    resizeMode: 'cover'
  },
  btnStyle: {
    margin: 10,
    backgroundColor: '#089BD4'
  },
  btnTextStyle: {
    color: 'white',
    fontSize: 18
  },
  titleStyle: {
    fontSize: 30,
  },
  viewStyles: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
})
