import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Topbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera_Viewer</Text>
      <View style={styles.menu}>
        <Text style={styles.item}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#1a1a1a',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'row',
  },
  item: {
    color: '#fff',
    marginHorizontal: 10,
    fontSize: 14,
  },
});

export default Topbar;
