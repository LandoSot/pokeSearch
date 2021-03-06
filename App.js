// import stuff
import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import Landing from './src/landing'
import Search from './src/search'

// create and export stuff
export default class App extends React.Component{
  state = {
    currentScreen: "landing"
  }

  switchScreen = (currentScreen) => {
    this.setState({currentScreen})
  }

  renderScreen = () => {
    if (this.state.currentScreen === "landing"){
      return(<Landing switchScreen = {this.switchScreen}/>)
    }
    else if (this.state.currentScreen === "search"){
      return(<Search />)
    }
  }

  render(){
    return(
      <View style = {styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? 24 : 0
  }
})
