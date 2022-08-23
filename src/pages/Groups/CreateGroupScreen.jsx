import { View, Text, TextInput, SafeAreaView } from 'react-native'
import { useTheme } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { styles } from '../../assets/styles'
import { Picker } from '@react-native-picker/picker';

export default function CreateGroupScreen({ navigation }) {

    const { colors } = useTheme()

    const [groupName, setGroupName] = useState("New Group")

    useEffect(() => {
        navigation.setOptions({ headerTitle: groupName })

    }, [groupName])


    return (
        <SafeAreaView style={styles.safearea}>
            <View style={[styles.container, { marginTop: 20 }]}>
                <View style={{ marginBottom: 15 }}>
                    <Text style={styles.cardSubtitle}>Group Info</Text>
                    <TextInput onChangeText={(value) => { setGroupName(value) }} placeholder='Group name' style={[styles.textInput, { color: colors.text, backgroundColor: colors.card }]} />
                </View>
                <Text style={styles.cardSubtitle}>Participants</Text>
                <Text style={{ color: colors.text, marginTop: 5, fontSize: 13 }}>Invite people to join the group now. You can add more later.</Text>

            </View>
        </SafeAreaView>
    )
}