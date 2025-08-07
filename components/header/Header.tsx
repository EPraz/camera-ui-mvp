import {useWindowDimensions,Modal,StyleSheet,View,Text,TouchableOpacity,Animated,ScrollView,} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { EventFeed } from "@/components/EventFeed";

const MENU_WIDTH = 360;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState("");
  const { width } = useWindowDimensions();
  const isExpanded = width >= 1024;
  const slideAnim = useRef(new Animated.Value(MENU_WIDTH)).current;

  useEffect(() => {
    const finalPosition = isMenuOpen ? 0 : MENU_WIDTH;
    Animated.timing(slideAnim, {
      toValue: finalPosition,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const handleSelectedEvent = (item: any) => {
    setSelectedEventId(item.id);console.log("Selected event:", item);};
  if (isExpanded) return null;

  return (
    <>
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>Camera Viewer</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.headerButton}>
          <Ionicons name={isMenuOpen ? "close" : "menu"} size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Modal transparent={true} visible={isMenuOpen} onRequestClose={toggleMenu} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.overlay} activeOpacity={1} onPressOut={toggleMenu} />
          <Animated.View style={[styles.menuPanel, { width: MENU_WIDTH, transform: [{ translateX: slideAnim }] }]}>
            <EventFeed
              handleSelectedEvent={handleSelectedEvent}
              selectedEventId={selectedEventId}
              onClose={toggleMenu} 
            />
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};


const styles = StyleSheet.create({
  headerBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e5e7eb' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: 'black' },
  headerButton: { padding: 8 },
  modalContainer: { flex: 1 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  menuPanel: { position: 'absolute', top: 0, bottom: 0, right: 0, backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: -2, height: 0 }, shadowOpacity: 0.15, shadowRadius: 10, elevation: 10 },
});

export default Header;