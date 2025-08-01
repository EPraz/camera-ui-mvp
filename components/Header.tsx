import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const tabs = [
  { id: 'all', label: 'All Events' },
  { id: 'doorbell', label: 'Doorbell Call' },
  { id: 'detection', label: 'Intelligent Detection' },
];

export function Header() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.logo}>Camera Viewer</Text>
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                activeTab === tab.id && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.id && styles.activeTabText,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 32,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#ffffff',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  feedTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  filterButton: {
    padding: 8,
  },
  moreButton: {
    padding: 8,
  },
});