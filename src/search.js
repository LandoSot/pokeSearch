import React from 'react'
import {Text, View} from 'react-native'
import {Button, Header, Icon, Input, Item} from 'native-base'

export default class Search extends React.Component{
  state = {
    pokeSearch: ""
  }
  searchPoke = () => {

  }

  render(){
    return(
      <View style = {{flex: 1}}>
        <Header searchBar rounded>
          <Item>
            <Icon name = "search" onPress = {this.searchPoke} />
            <Input
              value = {this.state.pokeSearch}
              placeholder = "Search Pokemon"
              onChangeText = {(pokeSearch) => this.setState({pokeSearch})}
            />
          </Item>
        </Header>
      </View>
    )
  }
}