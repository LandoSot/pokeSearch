import React from 'react'
import {ImageBackground, StyleSheet, Text, View} from 'react-native'
import {Button} from 'native-base'

var myBackGround = require('../assets/icon/landing.jpg')

export default class Landing extends React.Component{
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
              onPress = {() => this.props.switchScreen("search")}
            ><Text style = {styles.btnTextStyle}>Start Searching</Text></Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
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