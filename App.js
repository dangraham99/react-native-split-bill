import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { styles } from './src/assets/styles';
import HomeStack from './src/pages/HomeStack';
import GroupsStack from './src/pages/GroupsStack';
import ProfileStack from './src/pages/ProfileStack';
import { Ionicons } from '@expo/vector-icons';


export default function App() {

  const Tab = createBottomTabNavigator();
  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#004E98'

    },
  };

  return (
    <NavigationContainer theme={lightTheme}>
      <StatusBar style="dark" />
      <Tab.Navigator

        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}

          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            )
          }}

        />

        <Tab.Screen
          name="GroupsTab"
          component={GroupsStack}

          options={{
            tabBarLabel: "Groups",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="ios-people" size={size} color={color} />
            )
          }}

        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}

          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="ios-person" size={size} color={color} />
            )
          }}

        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

