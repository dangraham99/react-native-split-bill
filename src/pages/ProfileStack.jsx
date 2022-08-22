import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Profile/ProfileScreen'
import { stackOptions } from '../assets/styles'

export default function ProfileStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" options={{ headerLargeTitle: true }} component={HomeScreen} />
        </Stack.Navigator>
    )
}