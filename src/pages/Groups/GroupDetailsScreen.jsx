import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native';

export default function GroupDetailsScreen({ route, navigation }) {

    const { data } = route.params;
    const { colors } = useTheme();

    useEffect(() => {

        navigation.setOptions({ title: data[0] })

    })






    return (
        <SafeAreaView>
            <Text style={{ color: colors.text }}>GroupDetailsScreen</Text>
        </SafeAreaView>
    )
}