import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { styles } from '../../assets/styles';
import GroupCard from '../../components/GroupCard';
import { fetchData } from '../../utils/useData'; // Import fetchData function

export default function GroupsScreen(props) {
    const { colors } = useTheme();
    const [groups, setGroups] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchGroupsData = async () => {
        try {
            const data = await fetchData('http://localhost:3000/groups');
            setGroups(data); // Update groups state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchGroupsData(); // Fetch groups data on component mount
    }, []); // Run effect only once on component mount

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchGroupsData(); // Fetch updated groups data
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
                }
            >
                    {groups.map((group, i) => (
                    <GroupCard key={i} group={group} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
