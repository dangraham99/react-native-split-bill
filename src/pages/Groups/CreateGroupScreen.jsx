import { View, Text, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { styles } from '../../assets/styles'
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import TintedButton from '../../components/TintedButton';

export default function CreateGroupScreen({ navigation }) {

    const { colors } = useTheme()

    const [groupName, setGroupName] = useState()

    useEffect(() => {
        navigation.setOptions({ headerTitle: groupName })

    }, [groupName])


    return (
        <SafeAreaView style={styles.safearea}>
            <View style={[styles.container, { marginTop: 20 }]}>
                <View style={{ marginBottom: 15 }}>
                    <Text style={styles.groupDetailsSubtitle}>Group Info</Text>
                    <TextInput placeholderTextColor={'grey'} onChangeText={(value) => { setGroupName(value) }} placeholder='Group name' style={[styles.textInput, { color: colors.text, backgroundColor: colors.card, fontSize: 16 }]} />
                </View>
                <View style={[{ marginBottom: 15 }]}>
                    <Text style={styles.groupDetailsSubtitle}>Participants</Text>
                </View>
                <View style={[styles.transactionCard, { backgroundColor: colors.card, borderRadius: 12 }]}>
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

                <TintedButton onPress={() => { props.navigation.navigate('New Group') }}>
                    <Ionicons name="ios-person-add" size={28} color={colors.secondary} />
                    <Text style={[styles.tintedButtonText, { color: colors.secondary, marginLeft: 4 }]}>Add People</Text>
                </TintedButton>

            </View>
        </SafeAreaView >
    )
}