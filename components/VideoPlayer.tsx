import { AnimatedSegment } from "@/components/ui";
import { EventItemProps, TabProps, tabs } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {Image,StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native";


type VideoPlayerProps = {
  selectedEvent: EventItemProps;
};

export function VideoPlayer({ selectedEvent }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState("01:03");
  const [totalTime, setTotalTime] = useState("02:08");
  const [activeTab, setActiveTab] = useState("all");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching:", query, "tab:", activeTab);
  };

  return (
    <View className="flex-1 bg-gray-100">
      {/* Top Bar (Desktop only) */}
      <View className="hidden md:flex flex-col xl:flex-row xl:justify-between xl:items-center px-4 py-3 gap-3 ">
        <View className="flex-1">
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

        <View className="flex-row items-center gap-2">
          <TextInput
            className="flex-1 bg-white rounded-full px-4 py-2 mr-2 outline-none focus:border-transparent focus:ring-0"
            value={query}
            onChangeText={setQuery}
            placeholder="Search events..."
            placeholderTextColor="#6B7280"
            returnKeyType="search"
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity
            onPress={handleSearch}
            activeOpacity={0.85}
            className="bg-black px-4 py-2 rounded-full"
          >
            <Text className="text-white text-sm font-medium">Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation buttons */}
      <View className="flex-row justify-between items-center px-4 py-3 rounded-xl">
        <TouchableOpacity className="flex-row items-center gap-1">
          <Ionicons name="chevron-back" size={16} color="#666" />
          <Text className="text-sm text-gray-600 font-medium">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center gap-1">
          <Text className="text-sm text-gray-600 font-medium">Next Device</Text>
          <Ionicons name="chevron-forward" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Video Player container */}
      <View className="flex-1 relative rounded-2xl overflow-hidden mx-3 my-3">
        <Image
          source={{
            uri: selectedEvent.thumbnail,
          }}
          className="w-full h-full bg-black"
          resizeMode="contain"
        />

        {/* Overlay Top */}
        <View className="absolute top-0 left-0 right-0 flex-row justify-between items-start p-4">
          <View className="flex-1">
            <View className="flex-row items-center mb-1">
              <Ionicons name="wifi" size={16} color="#fff" />
            </View>
            <Text className="text-white text-base font-semibold mb-1">
              {selectedEvent.camera}
            </Text>
            <Text className="text-white text-xs opacity-80">
              {selectedEvent.time}
            </Text>
          </View>

          <View className="flex-row gap-2">
            <TouchableOpacity className="p-2">
              <Ionicons name="calendar" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2">
              <Ionicons name="expand" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Overlay Bottom */}
        <View className="absolute bottom-0 left-0 right-0 bg-black/50 flex-row flex-1 justify-between items-center p-4">
          <View className="flex-1 flex-row items-center justify-center md:gap-12 gap-4">
            <TouchableOpacity className="p-2">
              <Ionicons name="volume-high" size={20} color="#fff" />
            </TouchableOpacity>
            <Text className="text-white text-sm font-medium">
              {currentTime}/{totalTime}
            </Text>
            <TouchableOpacity className="p-2">
              <Ionicons name="play-skip-back" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white/20 p-2 rounded-full"
              onPress={() => setIsPlaying(!isPlaying)}
            >
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity className="p-2">
              <Ionicons name="play-skip-forward" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2">
              <Ionicons name="refresh" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center gap-2 hidden md:flex">
            <View className="w-2 h-2 rounded-full bg-red-500" />
            <Text className="text-white text-xs font-medium">Live Video</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
