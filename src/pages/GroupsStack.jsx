import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Groups/GroupsScreen'
import { stackOptions } from '../assets/styles'
import GroupDetailsScreen from './Groups/GroupDetailsScreen';

export default function GroupsStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Groups" options={{ headerLargeTitle: true }} component={HomeScreen} />
            <Stack.Screen name="Details" options={{ title: "Details", headerLargeTitle: true }} component={GroupDetailsScreen} />

        </Stack.Navigator>
    )
}