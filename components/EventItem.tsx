import { EventItemProps } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  event: EventItemProps;
  isActive?: boolean;
  onPress?: () => void;
};

export function EventItem({ event, isActive, onPress }: Props) {
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "person":
        return "#007AFF"; // azul
      case "doorbell":
        return "#FF6B35"; // naranja
      case "motion":
      default:
        return "#34C759"; // verde
    }
  };

  return (
    <View
      className={`relative flex-row items-center min-h-[90px] bg-transparent ${isActive ? "bg-gray-100" : ""}`}
    >
      {/* Línea de tiempo */}
      <View className="w-6 h-full items-center justify-center relative">
        <View className="absolute top-0 bottom-0 w-0.5 bg-gray-300 left-[11px]" />
        <View className="w-1 h-1 bg-neutral-800 rounded-full z-10" />
      </View>

      {/* Contenido del evento */}
      <TouchableOpacity
        className="flex-1 flex-row items-center py-4 pr-4 border-b border-gray-100"
        onPress={onPress}
      >
        <View className="relative mr-3">
          <Image
            source={{ uri: event.thumbnail }}
            className="w-[140px] h-[70px] rounded-md bg-gray-300"
            resizeMode="cover"
          />

          {/* Overlay Play */}
          <View className="absolute inset-0 bg-black/30 rounded-md items-center justify-center">
            <Ionicons name="play" size={16} color="#fff" />
          </View>

          {/* Indicador tipo de evento */}
          <View
            className="absolute -top-0.5 -right-0.5 w-[6px] h-[6px] rounded-full border-2 border-white"
            style={{ backgroundColor: getEventTypeColor(event.type) }}
          />
        </View>

        <View className="flex-1">
          <Text className="text-base font-medium text-black mb-0.5">
            {event.camera}
          </Text>
          <Text className="text-xs text-gray-500">{event.time}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
