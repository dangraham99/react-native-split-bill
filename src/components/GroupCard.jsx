import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../assets/styles'
import { Ionicons } from '@expo/vector-icons';
import currency from 'currency.js';

export default function GroupCard(props) {
    return (
        <View style={styles.groupCard}>
            <View style={{ flex: 3 }}>
                <Text style={styles.cardSubtitle}>{`${props.participants} participants`}</Text>
                <Text style={styles.cardTitle}>{props.title}</Text>

            </View>


            <View style={{ flex: 3, alignItems: 'flex-end', justifyContent: 'flex-center' }}>

                <Text style={styles.cardSubtitle}>{props.balance < 0 ? "You owe" : "You're owed"}</Text>
                <Text style={[styles.cardTitle, {
                    color: props.balance < 0 ? 'red' : 'black'
                }]}>{currency(props.balance, { fromCents: true, symbol: "£" }).format()}</Text>

            </View>

            <View style={{
                flex: 1,
                justifyContent: 'flex-center',
                alignItems: 'flex-end'
            }}>

                <Ionicons name="ios-chevron-forward" size={32} color={'grey'} />

            </View>


        </View>
    )
}