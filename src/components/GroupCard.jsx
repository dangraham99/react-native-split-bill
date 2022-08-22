import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../assets/styles'
import { Ionicons } from '@expo/vector-icons';
import currency from 'currency.js';
import { useTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function GroupCard(props) {

    const { colors } = useTheme()

    return (
        <Pressable
            onPress={() => {
                props.onPress()
            }
            }>
            <View style={[styles.groupCard, { backgroundColor: colors.card }]}>
                <View style={{ flex: 4 }}>
                    <Text style={styles.cardSubtitle}>{`${props.participants} participants`}</Text>
                    <Text numberOfLines={1} style={[styles.cardTitle, { color: colors.text }]}>{props.title}</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'flex-center' }}>
                    <Text style={styles.cardSubtitle}>{props.balance < 0 ? "You owe" : "You're owed"}</Text>
                    <Text style={[styles.cardTitle, {
                        color: props.balance < 0 ? 'red' : colors.text
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
        </Pressable>
    )
}