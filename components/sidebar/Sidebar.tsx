// components/Sidebar.tsx
import {
  BASE_BOTTOM_BAR_HEIGHT,
  SidebarItemProps,
  sidebarItems,
} from "@/constants";
import { useWindowSizeClass } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedSegment } from "../ui";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<SidebarItemProps["id"]>("home");
  const { isExpanded } = useWindowSizeClass();
  const insets = useSafeAreaInsets();

  if (!isExpanded) {
    const barHeight = BASE_BOTTOM_BAR_HEIGHT + insets.bottom;

    return (
      <View
        className="absolute left-0 right-0 bg-white border-t border-gray-200"
        style={{
          bottom: 0,
          height: barHeight,
          paddingBottom: insets.bottom,
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

  // Tablet/Desktop layout
  return (
    <View className="w-[120px] bg-white py-4 border-r border-transparent rounded-[12px]">
      {/* Título fijo en la parte superior */}
      <View style={{ alignItems: 'center', paddingTop: 16 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#111",
          }}
        >
          CamViewer
        </Text>
      </View>

      {/* Contenedor para centrar el menú verticalmente */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AnimatedSegment<SidebarItemProps>
          items={sidebarItems}
          activeId={activeItem}
          onChange={setActiveItem}
          orientation="vertical"
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
      </View>
    </View>
  );
};

export default Sidebar;