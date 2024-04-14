import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { styles } from '../assets/styles';
import { Ionicons } from '@expo/vector-icons';
import currency from 'currency.js';
import { useTheme } from '@react-navigation/native';

export default function GroupCard({ group, onPress }) {
    const { colors } = useTheme();

    return (
        <Pressable onPress={onPress}>
            <View style={[styles.groupCard, { backgroundColor: colors.card }]}>
                <View style={{ flex: 4 }}>
                    <Text style={styles.cardSubtitle}>
                        {group.users.length > 1 || group.users.length === 0 ? `${group.users.length} participants` : `${group.users.length} participant`}
                    </Text>
                    <Text numberOfLines={1} style={[styles.cardTitle, { color: colors.text }]}>
                        {group.title}
                    </Text>
                    <View style={[styles.groupCardPictures, { marginTop: 10 }]}>
                        {group.users.slice(0, 4).map((user, index) => (
                            <Image
                                key={index}
                                style={[styles.profileImg, { position: 'absolute', left: index * 25, borderColor: colors.card }]}
                                source={{uri: user.user.avatar}} // Correct dynamic image source
                               
                            />
                        ))}
                        {group.users.length > 4 && (
                            <View style={[styles.profileImg, { position: 'absolute', left: 100, backgroundColor: colors.primaryTransparent, justifyContent: 'center', borderColor: colors.card }]}>
                                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 14, letterSpacing: 2, color: 'white' }}>+{group.users.length - 4}</Text>
                            </View>
                        )}
                    </View>
                </View>
                <View style={{ flex: 4, alignItems: 'flex-end' }}>
                    <Text style={styles.cardSubtitle}>
                        {group.balancesInCents < 0 ? "You owe" : "You're owed"}
                    </Text>
                    <Text style={[styles.cardTitle, { color: group.balancesInCents < 0 ? 'red' : colors.text }]}>
                        {currency(group.balancesInCents, { fromCents: true, symbol: "£" }).format()}
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginLeft: 10 }}>
                    <Ionicons name="chevron-forward" size={28} color={'grey'} />
                </View>
            </View>
        </Pressable>
    );
}
