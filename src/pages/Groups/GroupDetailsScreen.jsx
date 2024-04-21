import { View, Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import TransactionCard from '../../components/TransactionCard';
import TintedButton from '../../components/TintedButton';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../assets/styles';
import { fetchData } from '../../utils/fetchData';

export default function GroupDetailsScreen(props) {

    const [ group, setGroup ] = useState({})
    const { colors } = useTheme();
    const [refreshing, setRefreshing] = useState(false)

    const fetchGroupData = async () => {
        try {
            const data = await fetchData('http://localhost:3000/groups/' + props.route.params.groupId); //use the ID which was passed to the route
            setGroup(data);
        
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {  
        //only update the title once we get it && if it doesn't match the title that we passed to this route
        if (group?.title && group.title !== props.route.params.groupTitle) { 
            props.navigation.setOptions({ title:  gorup.title})
        }

    }, [group])

    useEffect(() => {
        props.navigation.setOptions({ title:  props.route.params.groupTitle}) //set the group title initially using data that was passed (this will be reset once we get the group name in the request);
        fetchGroupData(); // Fetch group data on component mount
    }, []); // Run effect only once on component mount


    const onRefresh = async () => {
        setRefreshing(true);
        await fetchGroupData(); // Fetch updated groups data
        setRefreshing(false); // Finish refreshing
    };


    const parseDate = (dateStr) => {

        const date = new Date(dateStr)

        const options = {
            weekday: 'long',  // Full name of the day
            year: 'numeric',  // Four digit year
            month: 'long',    // Full name of the month
            day: '2-digit'    // Day of the month with leading zero if necessary
        };
    
        // Convert the date to the specified format in the current locale
        return date.toLocaleDateString('en-GB', options);
    }


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


                
                
                {group.transactions && group.transactions.map((transaction, i) => {
                        //TODO: Refactor this out of the UI logic

                        let showDate;

                        // Convert both current and previous dates to the same format
                        // for accurate comparison (i.e. same date, not same time)
                        const currentDate = parseDate(transaction.createdAt);
                        const prevDate = i > 0 ? parseDate(group.transactions[i - 1].createdAt) : '';

                        // Check if the current transaction is the first one or
                        // if its date is different from the previous transaction's date
                        showDate = i === 0 || currentDate !== prevDate;

                        return (
                            <View key={transaction.id} style={styles.cardContainer}>
                            {showDate && (
                                <Text style={styles.groupDetailsSubtitle}>{currentDate}</Text>
                            )}
                            <TransactionCard transaction={transaction} />
                            </View>
                        );
                })}
                
       
            </ScrollView>
        </SafeAreaView>
    )
}