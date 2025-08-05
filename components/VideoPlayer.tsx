import { AnimatedSegment } from "@/components/ui";
import { TabProps, tabs } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState("01:03");
  const [totalTime, setTotalTime] = useState("02:08");
  const [activeTab, setActiveTab] = useState("all");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching:", query, "tab:", activeTab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topPart} className="md:flex hidden">
        <View style={styles.segmentContainer}>
          <AnimatedSegment<TabProps>
            items={tabs}
            activeId={activeTab}
            onChange={setActiveTab}
            orientation="horizontal"
            itemClassName="px-4 py-2 rounded-full"
            itemsGapClassName="gap-3"
            renderItem={(tab, isActive) => (
              <Text
                className={`text-sm font-medium ${isActive ? "text-white" : "text-gray-600"}`}
              >
                {tab.label}
              </Text>
            )}
          />
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            className="bg-gray-500 rounded-full px-4 py-2"
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
            placeholder="Search events..."
            placeholderTextColor="#6B7280"
            returnKeyType="search"
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity
            style={styles.searchButton}
            activeOpacity={0.85}
            onPress={handleSearch}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.homeButton}>
          <Ionicons name="chevron-back" size={16} color="#666" />
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextDeviceButton}>
          <Text style={styles.nextDeviceButtonText}>Next Device</Text>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.videoContainer}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
          }}
          style={styles.videoPlaceholder}
          resizeMode="cover"
        />

        <View style={styles.overlayTop}>
          <View style={styles.cameraInfo}>
            <View style={styles.signalIndicator}>
              <Ionicons name="wifi" size={16} color="#ffffff" />
            </View>
            <Text style={styles.cameraName}>Front Door Camera 2</Text>
            <Text style={styles.dateTime}>15-05-2024 10:56 AM</Text>
          </View>
          <View style={styles.topRightControls}>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="calendar" size={20} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="expand" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.overlayBottom}>
          <View style={styles.playbackControls}>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="volume-high" size={20} color="#ffffff" />
            </TouchableOpacity>
            <Text style={styles.timeText}>
              {currentTime}/{totalTime}
            </Text>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="play-skip-back" size={20} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Ionicons name="pause" size={24} color="#ffffff" />
              ) : (
                <Ionicons name="play" size={24} color="#ffffff" />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="play-skip-forward" size={20} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="refresh" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <View style={styles.liveIndicator}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>Live Video</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  topPart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  segmentContainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  searchInput: {
    width: 200,
    marginRight: 8,
    backgroundColor: "#FFF",
    borderWidth: 0.5,
    borderColor: "black",
  },
  searchButton: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  homeButtonText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  nextDeviceButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  nextDeviceButtonText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  videoContainer: {
    flex: 1,
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    margin: 12,
  },
  videoPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  overlayTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 16,
  },
  cameraInfo: {
    flex: 1,
  },
  signalIndicator: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  cameraName: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  dateTime: {
    color: "#ffffff",
    fontSize: 12,
    opacity: 0.8,
  },
  topRightControls: {
    flexDirection: "row",
    gap: 8,
  },
  overlayBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  playbackControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  controlButton: {
    padding: 8,
  },
  playButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    padding: 8,
  },
  timeText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
  liveIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ff4444",
  },
  liveText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "500",
  },
});
