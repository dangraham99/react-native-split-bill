import { View, Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import TransactionCard from '../../components/TransactionCard';
import TintedButton from '../../components/TintedButton';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../assets/styles';
import { fetchData } from '../../utils/fetchData';

export default function GroupDetailsScreen(props) {

    const [ data, setData ] = useState({})
    const { colors } = useTheme();
    const [refreshing, setRefreshing] = useState(false)

    const fetchGroupData = async () => {
        try {
            const data = await fetchData('http://localhost:3000/groups/' + props.route.params.groupId); //use the ID which was passed to the route
            setData(data);
        
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {  
        //only update the title once we get it && if it doesn't match the title that we passed to this route
        if (data?.title && data.title !== props.route.params.groupTitle) { 
            props.navigation.setOptions({ title:  data.title})
        }

    }, [data])

    useEffect(() => {
        props.navigation.setOptions({ title:  props.route.params.groupTitle}) //set the group title initially using data that was passed (this will be reset once we get the group name in the request);
        fetchGroupData(); // Fetch group data on component mount
    }, []); // Run effect only once on component mount


    const onRefresh = async () => {
        setRefreshing(true);
        await fetchGroupData(); // Fetch updated groups data
        setRefreshing(false); // Finish refreshing
    };




    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView 
            
            refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={colors.primary}
                    />
                }>

                <View style={[styles.container, { flexDirection: 'row', justifyContent: 'center', marginHorizontal: 30 }]}>
                    <TintedButton onPress={() => { props.navigation.navigate('New Group') }}>
                        <Ionicons name="cash" size={28} color={colors.secondary} />
                        <Text style={[styles.tintedButtonText, { color: colors.secondary, marginLeft: 4 }]}>Add Transaction</Text>
                    </TintedButton>
                </View>

                <View style={styles.container}>
                    <Text style={styles.groupDetailsSubtitle}>Today</Text>
                </View>
                {data.transactions && data?.transactions.map((transaction, i) => (
                    <TransactionCard key={i} transaction={transaction} />
                ))}
                
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