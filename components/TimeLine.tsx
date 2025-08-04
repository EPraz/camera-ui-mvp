import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const timelineData = [
  {
    time: '09:00 AM',
    clips: 2,
    thumbnail: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop'
  },
  {
    time: '10:00 AM',
    clips: 3,
    thumbnail: 'https://images.pexels.com/photos/1029391/pexels-photo-1029391.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop'
  },
  {
    time: '10:56 AM',
    clips: 1,
    thumbnail: 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop',
    isActive: true
  },
  {
    time: '11:00 AM',
    clips: 4,
    thumbnail: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop'
  },
  {
    time: '12:00 PM',
    clips: 6,
    thumbnail: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop'
  },
];

export function Timeline() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today</Text>
        <TouchableOpacity style={styles.todayButton}>
          <Text style={styles.todayButtonText}>24h</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.timeline}
        contentContainerStyle={styles.timelineContent}
      >
        {timelineData.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.timelineItem,
              item.isActive && styles.activeTimelineItem
            ]}
          >
            <Text style={styles.timeText}>{item.time}</Text>
            <View style={styles.thumbnailContainer}>
              <Image 
                source={{ uri: item.thumbnail }}
                style={styles.thumbnail}
                resizeMode="cover"
              />
              {item.isActive && <View style={styles.activeOverlay} />}
            </View>
            <Text style={styles.clipsText}>{item.clips} clips</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    borderTopWidth: 1,
    borderTopColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  todayButton: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  todayButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  timeline: {
    paddingHorizontal: 16,
  },
  timelineContent: {
    gap: 24,
    paddingBottom: 16,
  },
  timelineItem: {
    alignItems: 'center',
    minWidth: 80,
  },
  activeTimelineItem: {
    opacity: 1,
  },
  timeText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    fontWeight: '500',
  },
  thumbnailContainer: {
    position: 'relative',
    marginBottom: 6,
  },
  thumbnail: {
    width: 60,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#ddd',
  },
  activeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  clipsText: {
    fontSize: 10,
    color: '#888',
    fontWeight: '500',
  },
});