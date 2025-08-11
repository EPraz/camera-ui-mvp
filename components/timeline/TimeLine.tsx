import { timelineData } from "@/constants";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Timeline() {
  const DISABLED = true; // 👈 por ahora

  return (
    <View className="bg-gray-100 border-t border-transparent">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3">
        <Text className="text-base font-semibold text-black">Today</Text>

        <Pressable
          className={`rounded-full px-3 py-1.5 ${DISABLED ? "bg-gray-200" : "bg-black"}`}
          disabled
        >
          <Text
            className={`text-xs font-medium ${DISABLED ? "text-gray-400" : "text-white"}`}
          >
            24h
          </Text>
        </Pressable>
      </View>

      {/* Timeline */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-4"
        contentContainerStyle={{ gap: 24, paddingBottom: 16 }}
        // scrollEnabled={!DISABLED}
      >
        {timelineData.map((item, idx) => (
          <Pressable
            key={idx}
            className={`min-w-20 items-center ${DISABLED ? "opacity-60" : ""}`}
            disabled={DISABLED}
          >
            <Text
              className={`mb-2 text-xs font-medium ${DISABLED ? "text-gray-300" : "text-gray-600"}`}
            >
              {item.time}
            </Text>

            <View className="relative mb-1.5">
              <Image
                source={{ uri: item.thumbnail }}
                className={`w-[60px] h-[40px] rounded-md bg-gray-300 ${DISABLED ? "opacity-70" : ""}`}
                resizeMode="cover"
              />
              {/* Overlay activo solo si no está deshabilitado */}
              {item.isActive && !DISABLED && (
                <View className="absolute inset-0 rounded-md bg-black/30 border-2 border-[#007AFF]" />
              )}
            </View>

            <Text
              className={`text-[10px] font-medium ${DISABLED ? "text-gray-300" : "text-gray-400"}`}
            >
              {item.clips} clips
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {DISABLED && (
        <View className="items-center pb-3">
          <Text className="text-xs text-gray-400">
            Próximamente: explora clips de las últimas 24 h
          </Text>
        </View>
      )}
    </View>
  );
}
