import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { EventItem } from './EventItem';
import { Ionicons } from '@expo/vector-icons';

const events = [
  {
    id: '1',
    camera: 'Front Door 2',
    time: '10:56:18 AM',
    thumbnail: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    type: 'motion'
  },
  {
    id: '2',
    camera: 'Front Door 2',
    time: '10:54:13 PM',
    thumbnail: 'https://images.pexels.com/photos/1029391/pexels-photo-1029391.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    type: 'person'
  },
  {
    id: '3',
    camera: 'Front Door 2',
    time: '10:52:36 AM',
    thumbnail: 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    type: 'motion'
  },
  {
    id: '4',
    camera: 'Front Door 1',
    time: '10:50:44 AM',
    thumbnail: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    type: 'doorbell'
  },
  {
    id: '5',
    camera: 'Front Door 1',
    time: '10:48:20 AM',
    thumbnail: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    type: 'motion'
  },
  {
    id: '6',
    camera: 'Front Door 1',
    time: '10:46:12 AM',
    thumbnail: 'https://images.pexels.com/photos/1029391/pexels-photo-1029391.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    type: 'person'
  },
  {
    id: '7',
    camera: 'Front Door 2',
    time: '10:44:05 AM',
    thumbnail: 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    type: 'motion'
  },
  {
    id: '8',
    camera: 'Front Door 2',
    time: '10:42:18 AM',
    thumbnail: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    type: 'doorbell'
  },
  {
    id: '9',
    camera: 'Front Door 2',
    time: '10:40:33 AM',
    thumbnail: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    type: 'motion'
  },
  {
    id: '10',
    camera: 'Front Door 2',
    time: '10:38:27 AM',
    thumbnail: 'https://images.pexels.com/photos/1029391/pexels-photo-1029391.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    type: 'person'
  },
];

const timeHeaders = ['09', '10', '11', '12', '13', '14', '15'];

export function EventFeed() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Feed</Text>
         <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
        </TouchableOpacity>
        <View style={styles.timeHeaders}>
          {timeHeaders.map((hour) => (
            <Text key={hour} style={styles.timeHeader}>{hour}</Text>
          ))}
        </View>
      </View>
      
      <ScrollView 
        style={styles.eventsList}
        showsVerticalScrollIndicator={false}
      >
        {events.map((event) => (
          <EventItem 
            key={event.id}
            event={event}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: '#ffffff',
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  timeHeaders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeHeader: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  eventsList: {
    flex: 1,
  },
  filterButton: {
    padding: 8,
  },
});