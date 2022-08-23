import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import GroupsScreen from './Groups/GroupsScreen'
import HomeScreen from './Home/HomeScreen';
import { stackOptions } from '../assets/styles'
import GroupDetailsScreen from './Groups/GroupDetailsScreen';
import CreateGroupScreen from './Groups/CreateGroupScreen';

export default function GroupsStack({ navigation }) {



    const Stack = createNativeStackNavigator();

    const { colors } = useTheme()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Groups" options={{ headerLargeTitle: true }} component={GroupsScreen} />
            <Stack.Screen name="Details" options={{ headerTitle: "Details", headerLargeTitle: true }} component={GroupDetailsScreen} />
            <Stack.Screen name="NewGroup" options={{
                headerTitle: "New Group",
                headerTitleAlign: 'center',
                presentation: "modal",
                headerLeft: () => (
                    <Button
                        onPress={() => navigation.navigate("Groups")}
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