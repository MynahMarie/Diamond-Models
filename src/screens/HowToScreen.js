import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, Image, Switch } from 'react-native'
import { Header } from 'react-native-elements'
import EnglishHowTo from '../components/EnglishHowTo'
import HebrewHowTo from '../components/HebrewHowTo'
import { BLUE, GRAY } from '../config/constants'

export default class HowToScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lang: 'en',
      switchIsOn: false
    }
  }

  changeLang = () => {
    let lang;
    let switchIsOn = !this.state.switchIsOn
    this.state.lang === 'en' ? lang = 'he' : lang = 'en';
    
    this.setState({ lang, switchIsOn });
  }

  render() {
    return (
      <View>
      <Header containerStyle={{ backgroundColor: '#248DAE', padding: 20, justifyContent: 'space-around' }}
          leftComponent={<Image source={require('../assets/diamond.png')} style={{ width: 45, height: 40 }} />}
          centerComponent={{ text: 'Diamond Models', style: { color: 'white', fontSize: 20 } }}
          rightComponent={
            <View>
            <Switch trackColor={{false: "#5e6977", true: "#5e6977"}} thumbColor='#f6f6f6' value={this.state.switchIsOn} onChange={this.changeLang}/>
            <Text style={{color: 'white'}}>EN/HE</Text>
            </View>}
      />
      {this.state.lang === 'en' ? <EnglishHowTo /> : <HebrewHowTo />}
      </View>
    )
  }

}
