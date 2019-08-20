import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BLUE, GRAY } from './config/constants';
import ModelScreen from './screens/ModelScreen';
import HowToScreen from './screens/HowToScreen';

const TabNavigator = createBottomTabNavigator({
    'Write A Diamond Model': ModelScreen,
    'How Do I Do This?': HowToScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const routeName = navigation.state.routeName
        let iconName = ''
        if (routeName === 'Write A Diamond Model') {
          iconName = `pencil${focused ? '' : '-outline'}`
        } else {
          iconName = `information${focused ? '' : '-outline'}`
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: BLUE,
      inactiveBackgroundColor: GRAY
    }
  }
);

export default TabNavigator;
