import { BASE_BOTTOM_BAR_HEIGHT } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabs = [
  { label: "Home", icon: "home-outline", iconSelected: "home" },
  { label: "Search", icon: "search-outline", iconSelected: "search" },
  { label: "Analytics", icon: "pie-chart-outline", iconSelected: "pie-chart" },
  { label: "History", icon: "time-outline", iconSelected: "time" },
  { label: "Profile", icon: "person-outline", iconSelected: "person" },
];

export default function BottomNavigationBar() {
  const [activeTab, setActiveTab] = useState("Home");
  const insets = useSafeAreaInsets();
  const barHeight = BASE_BOTTOM_BAR_HEIGHT + insets.bottom;

  return (
    <View
      className="absolute left-0 right-0 bottom-0 flex-row w-full bg-white border-t border-gray-200 z-50"
      style={{
        height: barHeight,
        paddingBottom: insets.bottom,
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;

        return (
          <Pressable
            key={tab.label}
            onPress={() => setActiveTab(tab.label)}
            className="flex-1 items-center justify-center"
          >
            <View
              className={`items-center w-full pt-2 pb-1 ${
                isActive ? "border-t-2 border-[#6C2BD9]" : ""
              }`}
            >
              <Ionicons
                name={isActive ? (tab.iconSelected as any) : (tab.icon as any)}
                size={22}
                color={isActive ? "#6C2BD9" : "#555"}
              />
              <Text
                className={`text-xs mt-1 ${
                  isActive ? "text-[#6C2BD9] font-semibold" : "text-gray-500"
                }`}
              >
                {tab.label}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
