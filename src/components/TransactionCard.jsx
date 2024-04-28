import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../assets/styles'
import { useTheme } from '@react-navigation/native'
import currency from 'currency.js'

export default function TransactionCard(props) {


    const { colors } = useTheme()





    return ( 
        <View style={[styles.transactionCard, { backgroundColor: colors.card }]}>
            <View>
                <Image style={[styles.profileImg, { borderColor: colors.card }]} source={{uri: props.transaction.owner.avatar}} />
            </View>
            <View style={{ flex: 2, paddingLeft: 10 }}>

                <Text style={[styles.cardTitle, { color: colors.text }]}>{props.transaction.title}</Text>
                <Text style={{ color: colors.text }}>{ props.transaction.owner.name }</Text>

            </View>
            <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                <Text style={[styles.cardTitle, { color: colors.text }]}>{currency(props.transaction.valueInCents, {fromCents: true}).format({symbol: "£"})}</Text>
            </View>
        </View>
    )
}