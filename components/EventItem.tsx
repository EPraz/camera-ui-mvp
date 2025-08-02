import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface EventItemProps {
  event: {
    id: string;
    camera: string;
    time: string;
    thumbnail: string;
    type: 'motion' | 'person' | 'doorbell';
  };
}

export function EventItem({ event }: EventItemProps) {
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'person':
        return '#007AFF';
      case 'doorbell':
        return '#FF6B35';
      case 'motion':
      default:
        return '#34C759';
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image 
          source={{ uri: event.thumbnail }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
        <View style={styles.playOverlay}>
          <Ionicons name="play" size={16} color="#ffffff" />
        </View>
        <View 
          style={[
            styles.eventIndicator,
            { backgroundColor: getEventTypeColor(event.type) }
          ]} 
        />
      </View>
      
      <View style={styles.eventInfo}>
        <Text style={styles.cameraName}>{event.camera}</Text>
        <Text style={styles.eventTime}>{event.time}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  thumbnailContainer: {
    position: 'relative',
    marginRight: 12,
  },
  thumbnail: {
    width: 140,
    height: 70,
    borderRadius: 6,
    backgroundColor: '#ddd',
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventIndicator: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  eventInfo: {
    flex: 1,
  },
  cameraName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 2,
  },
  eventTime: {
    fontSize: 12,
    color: '#888',
  },
});