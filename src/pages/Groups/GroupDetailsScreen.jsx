import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function GroupDetailsScreen({ route, navigation }) {

    const { data } = route.params;

    useEffect(() => {

        navigation.setOptions({ title: data[0] })

    })






    return (
        <SafeAreaView>
            <Text>GroupDetailsScreen</Text>
        </SafeAreaView>
    )
}