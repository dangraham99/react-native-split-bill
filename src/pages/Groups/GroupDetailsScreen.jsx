import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import TransactionCard from '../../components/TransactionCard';
import TintedButton from '../../components/TintedButton';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../assets/styles';

export default function GroupDetailsScreen(props) {

    const { data } = props.route.params;
    const { colors } = useTheme();

    useEffect(() => {

        props.navigation.setOptions({ title: data[0] })

    })






    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView>

                <View style={[styles.container, { flexDirection: 'row', justifyContent: 'center', marginHorizontal: 30 }]}>
                    <TintedButton onPress={() => { props.navigation.navigate('New Group') }}>
                        <Ionicons name="cash" size={28} color={colors.secondary} />
                        <Text style={[styles.tintedButtonText, { color: colors.secondary, marginLeft: 4 }]}>Add Transaction</Text>
                    </TintedButton>
                </View>

                <View style={styles.container}>
                    <Text style={styles.groupDetailsSubtitle}>Today</Text>
                </View>
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <View style={styles.container}>
                    <Text style={styles.groupDetailsSubtitle}>Yesterday</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.groupDetailsSubtitle}>Saturday, 20 August 2022</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}