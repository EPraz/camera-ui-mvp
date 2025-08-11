import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";

const ComingSoon = () => {
  const router = useRouter();
  return (
    <Animated.View
      entering={SlideInRight.duration(440)}
      exiting={SlideOutRight.duration(440)}
      className="flex-1 bg-white"
    >
      <View className="flex-1 bg-white items-center justify-center px-6">
        <Ionicons name="construct-outline" size={48} color="#9CA3AF" />
        <Text className="mt-4 text-xl font-semibold text-neutral-900">
          Página en construcción
        </Text>
        <Text className="mt-2 text-sm text-neutral-500 text-center">
          Estamos trabajando en esta sección. ¡Vuelve pronto!
        </Text>

        <Pressable
          onPress={() => router.back()}
          className="mt-6 rounded-full bg-black px-5 py-3 active:bg-neutral-800"
        >
          <Text className="text-white font-medium">Volver</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default ComingSoon;
