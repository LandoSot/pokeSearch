import React from 'react'
import {Text, View} from 'react-native'
import {Button, Header, Icon, Input, Item} from 'native-base'
import PokeLoader from './pokeLoader'
import SearchPoke from './searchBody'

export default class Search extends React.Component{
  state = {
    pokeSearch: "",
    onCall: true
  }
  searchPoke = () => {
    
  }
  renderBody = () => {
    if(this.state.onCall)
      return(<PokeLoader />)
    else
      return(<SearchPoke/>)
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
        {this.renderBody()}
      </View>
    )
  }
}