import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../../assets/styles'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import GroupCard from '../../components/GroupCard';
import currency from 'currency.js';

export default function GroupsScreen({ navigation }) {

    const { colors } = useTheme()

    const testData = ["Friday night", 3, 400]
    const testData2 = ["John's Birthday", 8, -732]

    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView style={styles.container}>


                <GroupCard onPress={() => { navigation.navigate('Details', { data: testData }) }} title={testData[0]} participants={testData[1]} balance={testData[2]} />



                <GroupCard onPress={() => { navigation.navigate('Details', { data: testData2 }) }} title={testData2[0]} participants={testData2[1]} balance={testData2[2]} />


            </ScrollView>
        </SafeAreaView>
    )
}