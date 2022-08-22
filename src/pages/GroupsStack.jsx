import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupsScreen from './Groups/GroupsScreen'
import HomeScreen from './Home/HomeScreen';
import { stackOptions } from '../assets/styles'
import GroupDetailsScreen from './Groups/GroupDetailsScreen';

export default function GroupsStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Groups" options={{ headerLargeTitle: true }} component={GroupsScreen} />
            <Stack.Screen name="Details" options={{ title: "Details", headerLargeTitle: true }} component={GroupDetailsScreen} />

            <Stack.Screen name="New Group" options={{ headerTitle: "New Group", presentation: 'modal' }} component={HomeScreen} />


        </Stack.Navigator>
    )
}