import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import React from 'react'

export default function CreateGroupScreen() {

    const { colors } = useTheme()

    return (
        <View>
            <Text style={{ color: colors.text }}>CreateGroupScreen</Text>
        </View>
    )
}