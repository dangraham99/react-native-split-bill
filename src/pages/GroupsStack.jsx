import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Groups/GroupsScreen'
import { stackOptions } from '../assets/styles'

export default function GroupsStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Groups" options={{ headerLargeTitle: true }} component={HomeScreen} />
        </Stack.Navigator>
    )
}