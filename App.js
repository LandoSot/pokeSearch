// import stuff
import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import Landing from './src/landing'

// create and export stuff
export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Landing />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  }
})
