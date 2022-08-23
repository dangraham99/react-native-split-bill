import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../assets/styles'
import { useTheme } from '@react-navigation/native'

export default function TintedButton(props) {

    const { colors } = useTheme()

    return (

        <TouchableOpacity onPress={() => { props.onPress() }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 25 }}>
                <View style={[styles.tintedButton, { backgroundColor: colors.primaryTransparent }]}>
                    {props.children}
                </View>
            </View>
        </TouchableOpacity>

    )
}