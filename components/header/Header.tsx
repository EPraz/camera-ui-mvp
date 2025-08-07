import { TabProps, tabs } from "@/constants";
import { useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AnimatedSegment } from "../ui";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [query, setQuery] = useState("");

  const { width } = useWindowDimensions();
  const isExpanded = width >= 1024;
  const isMedium = width >= 768 && width < 1024;

  const handleSearch = () => {
    console.log("Searching:", query, "tab:", activeTab);
  };

  
  if (isExpanded) return null;

  return (
    <View className="bg-white border-b border-gray-200">
      <View className="w-full px-4 py-3">
        {isMedium ? (
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-bold text-black">Camera Viewer</Text>
            <TouchableOpacity onPress={() => console.log("Open menu")}>
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          
          <View className="w-full flex-col gap-3">
            {/* Título + icono */}
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-bold text-black">Camera Viewer</Text>
              <TouchableOpacity onPress={() => console.log("Open menu")}>
                <Ionicons name="menu" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {/* Tabs */}
            <AnimatedSegment<TabProps>
              items={tabs}
              activeId={activeTab}
              onChange={setActiveTab}
              orientation="horizontal"
              scrollable
              containerClassName="-mx-4 px-4"
              itemClassName="px-4 py-2 rounded-full"
              itemsGapClassName="gap-2"
              renderItem={(tab, isActive) => (
                <Text
                  className={`text-sm font-medium ${
                    isActive ? "text-white" : "text-gray-600"
                  }`}
                >
                  {tab.label}
                </Text>
              )}
            />

            {/* Search */}
            <View className="flex-row items-center">
              <TextInput
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 mr-2"
                value={query}
                onChangeText={setQuery}
                placeholder="Search events..."
                placeholderTextColor="#9CA3AF"
                returnKeyType="search"
                onSubmitEditing={handleSearch}
              />
              <TouchableOpacity
                className="px-3 py-2 rounded-full bg-black"
                activeOpacity={0.85}
                onPress={handleSearch}
              >
                <Text className="text-white text-sm font-medium">Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;
