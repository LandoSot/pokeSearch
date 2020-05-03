// import stuff
import React from 'react'
import {Platform, View, Text} from 'react-native'

// create stuff
class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text>
          Starting project
        </Text>
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