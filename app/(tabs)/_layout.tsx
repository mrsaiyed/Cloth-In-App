import { Tabs } from 'expo-router';
import React from 'react';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
       screenOptions={{
        tabBarShowLabel: false, // no text labels under icons
        tabBarActiveTintColor: 'black', // active icon color
        tabBarInactiveTintColor: 'gray', // inactive icon color
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white', // tab bar background
          borderTopColor: '#ccc',   // subtle top border
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol name="house" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol name="plus.circle" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol name="magnifyingglass" color={color} size={28} />,
        }}
      />
          <Tabs.Screen
            name="account"
            options={{
              tabBarIcon: ({ color }) => <IconSymbol name="person" color={color} size={28} />,
            }}
          />
        </Tabs>
      );
    }