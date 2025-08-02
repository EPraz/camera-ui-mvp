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



const today = new Date();

const timeHeaders = Array.from({ length: 7 }, (_, i) => {
  const date = new Date(today);
  date.setDate(today.getDate() + i);

  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }); // ej: Mon, Tue
  const day = date.getDate().toString().padStart(2, '0'); // ej: 05, 06

  return { weekday, day };
});

export function EventFeed() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>Feed</Text>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="filter" size={20} color="#666" />
            </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
          </TouchableOpacity>
          </View>
        </View>

  <View style={styles.timeHeaders}>
    {timeHeaders.map(({ weekday, day }, index) => (
    <View key={index} style={styles.dateColumn}>
    <Text style={styles.weekday}>{weekday}</Text>
    <Text style={styles.timeHeader}>{day}</Text>
  </View>
))}
  </View>
</View>
      
      <ScrollView
      style={styles.eventsList}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={true}
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
  icons:{
    flex: 1
  },
    headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  icons: {
    flexDirection: 'row',
    gap: 8, // si tu versión de RN no soporta `gap`, usa marginRight en cada botón
  },
  iconButton: {
    padding: 8,
  },
});