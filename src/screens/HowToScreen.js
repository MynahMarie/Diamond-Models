import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'
import { Header } from 'react-native-elements'
import EnglishHowTo from '../components/EnglishHowTo'
import { BLUE, GRAY } from '../config/constants'

export default class HowToScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lang: 'en'
    }
  }

  render() {
    return (
      <View>
      <Header containerStyle={{ backgroundColor: '#248DAE', padding: 20, justifyContent: 'space-around' }}
          leftComponent={<Image source={require('../assets/diamond.png')} style={{ width: 45, height: 40 }} />}
          centerComponent={{ text: 'Diamond Models', style: { color: 'white', fontSize: 20 } }}
          rightComponent={{ icon: 'camera-enhance', color: 'white', size: 45 }}
      />
      {this.state.lang === 'en' ? <EnglishHowTo /> : <Text>Hebrew will go here.</Text>}
      </View>
    )
  }

}
