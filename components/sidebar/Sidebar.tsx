// components/Sidebar.tsx
import {
  BASE_BOTTOM_BAR_HEIGHT,
  SidebarItemProps,
  sidebarItems,
} from "@/constants";
import { useWindowSizeClass } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedSegment } from "../ui"; // assumes ../ui/index exports AnimatedSegment

/**
 * Sidebar:
 * - Mobile: bottom bar (absolute fixed).
 * - Tablet/Desktop: left vertical rail.
 */
const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<SidebarItemProps["id"]>("home");
  const { isExpanded } = useWindowSizeClass();
  const insets = useSafeAreaInsets();

  if (!isExpanded) {
    // Mobile: render a bottom bar (absolute). Does not consume layout width.
    const barHeight = BASE_BOTTOM_BAR_HEIGHT + insets.bottom;

    return (
      <View
        className="absolute left-0 right-0 bg-white border-t border-gray-200"
        style={{
          bottom: 0,
          height: barHeight,
          paddingBottom: insets.bottom,
          // Improve touchability & layering
          zIndex: 50,
          elevation: 8,
        }}
      >
        <View className="flex-1 items-center justify-center px-4">
          <AnimatedSegment<SidebarItemProps>
            items={sidebarItems}
            activeId={activeItem}
            onChange={setActiveItem}
            orientation="horizontal"
            itemsGapClassName="gap-6"
            itemClassName="w-10 h-10 rounded-lg items-center justify-center"
            renderItem={(item, isActive) => (
              <Ionicons
                name={item.icon}
                size={20}
                color={isActive ? "#ffffff" : "#666666"}
              />
            )}
          />
        </View>
      </View>
    );
  }

  // Tablet/Desktop: left vertical sidebar (in-flow)
  return (
    <View className="w-[120px] bg-white py-4 items-center justify-between border-r border-transparent rounded-[12px]">
      <AnimatedSegment<SidebarItemProps>
        items={sidebarItems}
        activeId={activeItem}
        onChange={setActiveItem}
        orientation="vertical"
        containerClassName="mt-48"
        itemsGapClassName="gap-7"
        itemClassName="w-10 h-10 rounded-lg items-center justify-center"
        renderItem={(item, isActive) => (
          <Ionicons
            name={item.icon}
            size={20}
            color={isActive ? "#ffffff" : "#666666"}
          />
        )}
      />

      {/* You can add a user/avatar button here if needed */}
      {/* <View className="w-10 h-10 rounded-lg items-center justify-center" /> */}
    </View>
  );
};
export default Sidebar;
