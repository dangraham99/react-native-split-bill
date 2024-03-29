import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Appearance } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './src/assets/styles';
import HomeStack from './src/pages/HomeStack';
import GroupsStack from './src/pages/GroupsStack';
import ProfileStack from './src/pages/ProfileStack';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';


export default function App() {

  const [scheme, setScheme] = useState(Appearance.getColorScheme());
  const Tab = createBottomTabNavigator();

  const lightTheme = {
    dark: false,
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,

      primary: '#02c764',
      primaryTransparent: '#02c76490',
      secondary: 'white',
      card: 'white',
      text: 'black'


    },
  };

  const darkTheme = {
    dark: true,
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#02c764',
      primaryTransparent: '#02c76450',
      secondary: '#33ffa3',
      text: 'white'
    }
  }

  useEffect(() => {
    Appearance.addChangeListener(() => {
      setScheme(Appearance.getColorScheme())
    })
  })

  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
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
              <Ionicons name="home" size={size} color={color} />
            )
          }}

        />

        <Tab.Screen
          name="GroupsTab"
          component={GroupsStack}

          options={{
            tabBarLabel: "Groups",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="people" size={size} color={color} />
            )
          }}

        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}

          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="person" size={size} color={color} />
            )
          }}

        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

