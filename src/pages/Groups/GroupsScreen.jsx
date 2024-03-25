import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from '../../assets/styles'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import GroupCard from '../../components/GroupCard';
import currency from 'currency.js';
import { Ionicons } from '@expo/vector-icons';
import TintedButton from '../../components/TintedButton';

export default function GroupsScreen(props) {

    const { colors } = useTheme()

    const testData = ["Friday night", 3, 400]
    const testData2 = ["John's Birthday", 8, -732]
    const testData3 = ["Christmas Party", 20, 5032]

    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView>

                <GroupCard onPress={() => { props.navigation.navigate('Details', { data: testData }) }} title={testData[0]} participants={testData[1]} balance={testData[2]} />
                <GroupCard onPress={() => { props.navigation.navigate('Details', { data: testData2 }) }} title={testData2[0]} participants={testData2[1]} balance={testData2[2]} />
                <GroupCard onPress={() => { props.navigation.navigate('Details', { data: testData3 }) }} title={testData3[0]} participants={testData3[1]} balance={testData3[2]} />

            </ScrollView>
        </SafeAreaView >
    )
}