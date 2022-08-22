import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../assets/styles'
import { useTheme } from '@react-navigation/native'

export default function TransactionCard() {


    const { colors } = useTheme()






    return (
        <View style={[styles.transactionCard, { backgroundColor: colors.card }]}>
            <View>
                <Image style={styles.profileImg} source={require(`../assets/placeholders/portrait-7.jpg`)} />
            </View>
            <View style={{ flex: 2, paddingLeft: 10 }}>

                <Text style={[styles.cardTitle, { color: colors.text }]}>The Goldenhill</Text>
                <Text style={{ color: colors.text }}>Daniel Graham</Text>

            </View>
            <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                <Text style={[styles.cardTitle, { color: colors.text }]}>£4.20</Text>
            </View>
        </View>
    )
}