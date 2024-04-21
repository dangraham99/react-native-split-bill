import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import GroupsScreen from './Groups/GroupsScreen'
import HomeScreen from './Home/HomeScreen';
import { stackOptions } from '../assets/styles'
import GroupDetailsScreen from './Groups/GroupDetailsScreen';
import CreateGroupScreen from './Groups/CreateGroupScreen';
import { StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function GroupsStack({ navigation }) {



    const Stack = createNativeStackNavigator();
    const popAction = StackActions.pop(1);

    const { colors } = useTheme()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Groups" options={{

                headerTitle: "Groups",

                headerLargeTitle: false,
                headerRight: () => (
                    <TouchableOpacity>
                        <Ionicons name="add-circle" size={30} color={colors.primary} />
                    </TouchableOpacity>
                ),
            }} component={GroupsScreen} />
            <Stack.Screen name="Details" options={({route}) =>  ({
                headerTitle: route.params.name, 
                headerLargeTitle: true, 
                headerRight: () => (
                    <Button
                        onPress={() => { navigation.navigate('Edit Group') }}
                        title="Edit Group"
                        color={colors.primaryTransparent}
                    />
                ),
            })} component={GroupDetailsScreen} />
            <Stack.Screen name="New Group" options={{
                headerTitle: "New Group",
                headerTitleAlign: 'center',
                presentation: "modal",
                headerLeft: () => (
                    <Button
                        onPress={() => navigation.dispatch(popAction)}
                        title="Cancel"
                        color={'red'}
                    />
                ),
                headerRight: () => (
                    <Button
                        onPress={() => alert('This is a button!')}
                        title="Done"
                        color={colors.primaryTransparent}
                    />
                ),
            }} component={CreateGroupScreen} />

            <Stack.Screen name="Edit Group" options={{
                headerTitle: "Edit Group",
                headerTitleAlign: 'center',
                presentation: "modal",
                headerLeft: () => (
                    <Button
                        onPress={() => navigation.dispatch(popAction)}
                        title="Cancel"
                        color={'red'}
                    />
                ),
                headerRight: () => (
                    <Button
                        onPress={() => alert('This is a button!')}
                        title="Done"
                        color={colors.primary}
                    />
                ),
            }} component={CreateGroupScreen} />


        </Stack.Navigator>
    )
}