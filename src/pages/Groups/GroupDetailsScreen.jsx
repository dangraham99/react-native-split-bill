import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import TransactionCard from '../../components/TransactionCard';
import { styles } from '../../assets/styles';

export default function GroupDetailsScreen({ route, navigation }) {

    const { data } = route.params;
    const { colors } = useTheme();

    useEffect(() => {

        navigation.setOptions({ title: data[0] })

    })






    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView>
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