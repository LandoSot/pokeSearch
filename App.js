// import stuff
import React from 'react'
import {Platform, View, Text} from 'react-native'
import {Button} from 'native-base'

// create stuff
class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text>The button is right bellow</Text>
        <Button><Text>Hello World</Text></Button>
      </View>
    );
  }
}

const styles = {
  container: {
    borderWidth: 1,
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  }
}


// export stuff
export default App