import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Home/HomeScreen'
import { stackOptions } from '../assets/styles'

export default function HomeStack() {

  const Stack = createNativeStackNavigator()


  return (

    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerLargeTitle: true }} component={HomeScreen} />
    </Stack.Navigator>

  )
}