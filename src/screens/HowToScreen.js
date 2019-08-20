import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Header } from 'react-native-elements'

const HowToScreen = props => {
  return (
    <View>
    <Header containerStyle={{ backgroundColor: '#248DAE', padding: 20, justifyContent: 'space-around' }}
        leftComponent={<Image source={require('../assets/diamond.png')} style={{ width: 45, height: 40 }} />}
        centerComponent={{ text: 'Diamond Models', style: { color: 'white', fontSize: 20 } }}
        rightComponent={{ icon: 'camera-enhance', color: 'white', size: 45 }}
    />
      <Text>HOW TO COMPLETE A Diamond Model</Text>
    </View>
  )
}

export default HowToScreen
