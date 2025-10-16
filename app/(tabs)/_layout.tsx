
import React from 'react';
import { Tabs } from 'expo-router';
import Themes from '@/constants/theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const TabsLaoyout = () => {
  return (
   <Tabs 
    screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: Themes.primary,}}>
        <Tabs.Screen 
            name="nature-meditate" 
            options={{ 
                tabBarLabel: "Meditate",
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons 
                    name="flower-tulip" 
                    size={24} 
                    color={color} />)
            }}/>
        <Tabs.Screen 
        name="affirmations" 
        options={{ 
            tabBarLabel: "Affirmations",
            tabBarIcon: ({ color }) => (
            <Entypo 
                name="open-book" 
                size={24} 
                color={color} />)
            }}/>
   </Tabs>
  );
};

export default TabsLaoyout;