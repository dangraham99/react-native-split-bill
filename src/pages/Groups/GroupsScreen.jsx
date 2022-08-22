import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../../assets/styles'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import GroupCard from '../../components/GroupCard';
import currency from 'currency.js';

export default function GroupsScreen() {

    const { colors } = useTheme()

    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView style={styles.container}>

                <GroupCard title={"Friday night"} participants={3} balance={400} />


                <GroupCard title={"John's birthday"} participants={8} balance={-732} />


            </ScrollView>
        </SafeAreaView>
    )
}