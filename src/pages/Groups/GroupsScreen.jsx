import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from '../../assets/styles'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import GroupCard from '../../components/GroupCard';
import currency from 'currency.js';
import { Ionicons } from '@expo/vector-icons';

export default function GroupsScreen({ navigation }) {

    const { colors } = useTheme()

    const testData = ["Friday night", 3, 400]
    const testData2 = ["John's Birthday", 8, -732]

    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView>

                <TouchableOpacity onPress={() => { navigation.navigate('NewGroup') }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 25 }}>
                        <View style={[styles.tintedButton, { backgroundColor: colors.primaryTransparent }]}>
                            <Ionicons name="add" size={32} color={colors.secondary} />
                            <Text style={[styles.tintedButtonText, { color: colors.secondary }]}>New Group</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <GroupCard onPress={() => { navigation.navigate('Details', { data: testData }) }} title={testData[0]} participants={testData[1]} balance={testData[2]} />



                <GroupCard onPress={() => { navigation.navigate('Details', { data: testData2 }) }} title={testData2[0]} participants={testData2[1]} balance={testData2[2]} />


            </ScrollView>
        </SafeAreaView >
    )
}