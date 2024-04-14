import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { styles } from '../../assets/styles';
import GroupCard from '../../components/GroupCard';
import { useData } from '../../utils/useData';

export default function GroupsScreen(props) {
    const { colors } = useTheme();
    const groupsData = useData('http://localhost:3000/groups');
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        // Update groups state with fetched data
        setGroups(groupsData || []);
    }, [groupsData]); // Run effect whenever groupsData changes

    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView>
                {groups.map((group, i) => (
                    <GroupCard key={i} title={group.title} participants={group.users.length} balance={group.balancesInCents} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
