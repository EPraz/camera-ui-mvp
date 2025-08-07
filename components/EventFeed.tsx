import { EventItemProps, events } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { EventItem } from "./EventItem";

const today = new Date();

const timeHeaders = Array.from({ length: 7 }, (_, i) => {
  const date = new Date(today);
  date.setDate(today.getDate() + i);
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  const day = date.getDate().toString().padStart(2, "0");
  return { weekday, day };
});

// --- CAMBIO 1: Agrega 'onClose' a las props ---
// Esta es la función que cerrará el panel del menú.
type EventFeedProps = {
  handleSelectedEvent: (item: EventItemProps) => void;
  selectedEventId: string;
  onClose: () => void; // Prop para recibir la función de cierre
};

export function EventFeed({
  handleSelectedEvent,
  selectedEventId,
  onClose, // Recibe la prop aquí
}: EventFeedProps) {
  return (
    // He quitado el ancho fijo y los bordes, ya que el panel contenedor se encarga de eso.
    <View className="flex-1 bg-white"> 
      {/* Header */}
      <View className="px-4 py-3 border-b border-gray-200">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-base font-semibold text-black">Feed</Text>
          <View className="flex-row items-center gap-2">
            <TouchableOpacity className="p-2">
              <Ionicons name="filter" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2">
              <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
            </TouchableOpacity>

            {/* --- CAMBIO 2: Agrega el botón 'X' --- */}
            {/* Su 'onPress' llama a la función que recibimos por props. */}
            <TouchableOpacity onPress={onClose} className="p-2">
              <Ionicons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Date headers */}
        <View className="flex-row justify-between">
          {timeHeaders.map(({ weekday, day }, index) => (
            <View key={index} className="items-center">
              <Text className="text-xs font-medium text-gray-500">
                {weekday}
              </Text>
              <Text className="text-xs font-medium text-gray-400">{day}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Events List */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={true}
      >
        {events.map((event) => (
          <EventItem
            key={event.id}
            isActive={event.id === selectedEventId}
            event={event}
            onPress={() => handleSelectedEvent(event)}
          />
        ))}
      </ScrollView>
    </View>
  );
}