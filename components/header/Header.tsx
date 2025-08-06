import { TabProps, tabs } from "@/constants";
import { useWindowSizeClass } from "@/hooks";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AnimatedSegment } from "../ui";

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [query, setQuery] = useState("");
  const { isExpanded } = useWindowSizeClass();

  const handleSearch = () => {
    console.log("Searching:", query, "tab:", activeTab);
  };

  return (
    <View className="bg-white border-b border-gray-200 md:hidden ">
      <View className="w-full px-4 py-3 ">
        {isExpanded ? (
          // Expanded (>=1024): single row, search pinned right
          <View className="w-full flex-row items-center justify-between hidden">
            {/* Left: Logo + inline tabs (flex-1 to keep search visible) */}
            <View className="flex-1 flex-row items-center">
              <Text className="text-2xl font-bold text-black mr-8">
                Camera Viewer
              </Text>

              <AnimatedSegment<TabProps>
                items={tabs}
                activeId={activeTab}
                onChange={setActiveTab}
                orientation="horizontal"
                itemClassName="px-4 py-2 rounded-full"
                itemsGapClassName="gap-3"
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
            </View>

            {/* Right: compact search with fixed width */}
            <View className="flex-row items-center ml-4">
              <TextInput
                className="bg-gray-100 rounded-full px-4 py-2 mr-2"
                style={{ width: 288 }} // ~ w-72
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
        ) : (
          // Compact/Medium (<1024): stacked layout
          // only one showing // change to mobile design name
          <View className="w-full flex-col gap-3">
            {/* Logo */}
            <Text className="text-xl font-bold text-black">Camera Viewer</Text>

            {/* Tabs: horizontal & scrollable */}
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

            {/* Search: full width */}
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
