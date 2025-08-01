import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/SideBar';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Timeline } from '@/components/TimeLine';
import { EventFeed } from '@/components/EventFeed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <Sidebar />
        <View style={styles.centerContent}>
          <View style={styles.videoSection}>
            <VideoPlayer />
            <Timeline />
          </View>
        </View>
        <EventFeed />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 12
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  centerContent: {
    flex: 1,
    padding: 16,
  },
  videoSection: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
});