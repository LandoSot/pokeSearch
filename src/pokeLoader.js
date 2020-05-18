import React from 'react'
import {Image, StyleSheet, View} from 'react-native'

export default class PokeLoader extends React.Component{
  render (){
    return(
      <View style = {styles.container}>
        <Image 
          source = {{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
          style = {styles.gifLoading}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gifLoading: {
    height: 400,
    width: 400,
  }
})