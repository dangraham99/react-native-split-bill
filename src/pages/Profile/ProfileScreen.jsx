import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../../assets/styles'
import React, {useState, useEffect} from 'react'
import { Image } from 'react-native'
import { fetchData } from '../../utils/fetchData'

export default function ProfileScreen() {

    const [profile, setProfile] = useState([])

    const fetchProfileData = async () => {
        try {
            const data = await fetchData('http://localhost:3000/users/5');
            setProfile(data); // Update groups state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchProfileData(); // Fetch groups data on component mount
    }, []); // Run effect only once on component mount


    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView style={styles.container}>
                <View style={[styles.container, styles.centerContainer]}>
                    <Image width={200} height={200}
                        style={{
                            marginBottom: 20,
                            resizeMode: 'cover',
                            borderRadius: 360,
                            borderWidth: 2
                        }}
                        source={{uri: profile.avatar}}
                    />
                </View>
                <Text style={styles.pageTitle}>{profile.name}</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non et ut dolor porro id quasi necessitatibus. Aspernatur asperiores quis doloribus, sequi dolorum quibusdam aliquid molestias facere exercitationem. Ea repellat nesciunt quia provident magni cumque quis dicta consequuntur rem saepe, vel ratione neque earum asperiores perspiciatis dolorem, est quaerat culpa?</Text>
            </ScrollView>
        </SafeAreaView>
    )
}