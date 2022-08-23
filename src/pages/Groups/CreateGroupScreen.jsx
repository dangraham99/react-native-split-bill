import { View, Text, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { styles } from '../../assets/styles'
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

export default function CreateGroupScreen({ navigation }) {

    const { colors } = useTheme()

    const [groupName, setGroupName] = useState("New Group")

    useEffect(() => {
        navigation.setOptions({ headerTitle: groupName })

    }, [groupName])


    return (
        <SafeAreaView style={styles.safearea}>
            <View style={{ marginTop: 20 }}>
                <View style={[styles.container, { marginBottom: 15 }]}>
                    <Text style={styles.cardSubtitle}>Group Info</Text>
                    <TextInput placeholderTextColor={'grey'} onChangeText={(value) => { setGroupName(value) }} placeholder='Group name' style={[styles.textInput, { color: colors.text, backgroundColor: colors.card }]} />
                </View>
                <View style={[styles.container, { marginBottom: 15 }]}>
                    <Text style={styles.cardSubtitle}>Participants</Text>
                    <Text style={{ color: colors.text, marginTop: 5, fontSize: 13 }}>Invite people to join the group now. You can add more later.</Text>
                </View>
                <View style={[styles.transactionCard, { backgroundColor: colors.card }]}>
                    <View>
                        <Image style={[styles.profileImg, { borderColor: colors.card }]} source={require(`../../assets/placeholders/portrait-6.jpg`)} />
                    </View>
                    <View style={{ flex: 2, paddingLeft: 10, justifyContent: 'center' }}>

                        <Text style={[styles.cardTitle, { color: colors.text }]}>Daniel Graham</Text>
                        <Text style={[styles.cardSubtitle]}>Group Owner</Text>

                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                        <TouchableOpacity>
                            <Ionicons name="ios-information-circle-outline" size={28} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView >
    )
}