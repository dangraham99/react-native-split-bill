import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { styles } from '../assets/styles'
import { Ionicons } from '@expo/vector-icons';
import currency from 'currency.js';
import { useTheme } from '@react-navigation/native';

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
                    <View style={[styles.groupCardPictures, { marginTop: 10 }]}>

                        <Image style={[styles.profileImg, { position: 'absolute' }]} source={require(`../assets/placeholders/portrait-1.jpg`)} />
                        <Image style={[styles.profileImg, { position: 'absolute', left: 25 }]} source={require(`../assets/placeholders/portrait-2.jpg`)} />
                        <Image style={[styles.profileImg, { position: 'absolute', left: 50 }]} source={require(`../assets/placeholders/portrait-3.jpg`)} />
                        <Image style={[styles.profileImg, { position: 'absolute', left: 75 }]} source={require(`../assets/placeholders/portrait-4.jpg`)} />
                        {props.participants > 4 && <View style={[styles.profileImg, { position: 'absolute', left: 100, backgroundColor: colors.primaryTransparent, justifyContent: 'center' }]}><Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 18, letterSpacing: 2, color: 'white' }}>+{props.participants - 4}</Text></View>}
                    </View>
                </View>
                <View style={{ flex: 4, alignItems: 'flex-end' }}>
                    <Text style={styles.cardSubtitle}>{props.balance < 0 ? "You owe" : "You're owed"}</Text>
                    <Text style={[styles.cardTitle, {
                        color: props.balance < 0 ? 'red' : colors.text
                    }]}>{currency(props.balance, { fromCents: true, symbol: "£" }).format()}</Text>
                </View>
                <View style={{

                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginLeft: 10


                }}>
                    <Ionicons name="ios-chevron-forward" size={28} color={'grey'} />
                </View>
            </View>
        </Pressable>
    )
}