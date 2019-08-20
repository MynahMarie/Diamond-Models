import React from 'react'
import { createAppContainer } from 'react-navigation'
import TabNavigator from './src/routes'

export default class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {};
    console.log("App started", "initial props:", props)
  }

  render() {
    const AppContainer = createAppContainer(TabNavigator)
    return <AppContainer />
  }
}
