import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const sidebarItems = [
  { id: 'home', icon: 'home' },
  { id: 'video', icon: 'videocam' },
  { id: 'bell', icon: 'notifications' },
  { id: 'add', icon: 'add' },
  { id: 'search', icon: 'search' },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <View style={styles.container}>
      <View style={styles.mainItems}>
        {sidebarItems.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.sidebarItem,
                activeItem === item.id && styles.activeSidebarItem,
              ]}
              onPress={() => setActiveItem(item.id)}
            >
              <Ionicons
                name={item.icon}
                size={20}
                color={activeItem === item.id ? '#ffffff' : '#666'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      
      <TouchableOpacity style={styles.userItem}>
        <Ionicons name="person" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRightWidth: 1,
    borderRightColor: 'transparent',
    borderRadius: 12,
  
  },
  mainItems: {
    gap: 25,
    marginTop:"12rem"
  },
  sidebarItem: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',

  },
  activeSidebarItem: {
    backgroundColor: '#000',
  },
  userItem: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});