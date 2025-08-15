import { EventItemProps, FEED_MENU_WIDTH } from "@/constants";
import { useWindowSizeClass } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EventItem } from "../eventItem";

export type EventFeedProps = {
  events: EventItemProps[];
  handleSelectedEvent: (item: EventItemProps) => void;
  selectedEventId: string;
  onAddCamera: (item: EventItemProps) => void;
  onDeleteCamera: (id: string) => void;
  onClose: () => void;
};

export default function EventFeed({
  events,
  handleSelectedEvent,
  selectedEventId,
  onAddCamera,
  onDeleteCamera,
  onClose,
}: EventFeedProps) {
  const { isExpanded } = useWindowSizeClass();

  const [showMore, setShowMore] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  // 🔹 Debounce
  const [cameraQueryInput, setCameraQueryInput] = useState("");
  const [cameraQuery, setCameraQuery] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setCameraQuery(cameraQueryInput.trim()), 300);
    return () => clearTimeout(t);
  }, [cameraQueryInput]);

  const filtered = useMemo(() => {
    if (!cameraQuery) return events;
    const q = cameraQuery.toLowerCase();
    return events.filter((e) => e.camera.toLowerCase().includes(q));
  }, [events, cameraQuery]);

  const addCamera = () => {
    // plantillas para el random (thumbnail + type)
    const templates: Array<Pick<EventItemProps, "thumbnail" | "type">> = [
      {
        thumbnail:
          "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
        type: "motion",
      },
      {
        thumbnail:
          "https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg",
        type: "motion",
      },
      {
        thumbnail:
          "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
        type: "doorbell",
      },
    ];
    const pick = templates[Math.floor(Math.random() * templates.length)];

    const nextId = (
      Math.max(0, ...events.map((e) => Number(e.id))) + 1
    ).toString();

    const time = new Date().toLocaleTimeString("en-US", { hour12: true });

    const newItem: EventItemProps = {
      id: nextId,
      camera: `New Camera ${nextId}`,
      time,
      thumbnail: pick.thumbnail,
      type: pick.type,
    };

    onAddCamera(newItem);
    setShowMore(false);
  };

  return (
    <View
      className="bg-white flex-1"
      style={{ maxWidth: FEED_MENU_WIDTH, minWidth: FEED_MENU_WIDTH }}
    >
      {/* Header */}
      <View className="px-4 py-3">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-base font-semibold text-black">Feed</Text>
          <View className="flex-row items-center gap-2">
            {/* Filtro */}
            <TouchableOpacity
              className="p-2"
              onPress={() => setShowFilter(true)}
            >
              <Ionicons name="filter" size={20} color="#666" />
            </TouchableOpacity>
            {/* Más */}
            <TouchableOpacity className="p-2" onPress={() => setShowMore(true)}>
              <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
            </TouchableOpacity>
            {!isExpanded && (
              <TouchableOpacity onPress={onClose} className="p-2">
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {/* Events List */}

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventItem
            isActive={item.id === selectedEventId}
            event={item}
            onPress={() => handleSelectedEvent(item)}
            onDelete={(id) => onDeleteCamera(id)}
          />
        )}
        ItemSeparatorComponent={() => (
          // separador fino, sin generar “bloques” altos
          <View className="h-px bg-gray-100 ml-6" />
        )}
        contentContainerStyle={{
          paddingBottom: 24,
          flexGrow: 1, // 🔹 Mantiene altura para centrar vacío
        }}
        showsVerticalScrollIndicator
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center px-6">
            <Ionicons name="search" size={36} color="#9CA3AF" />
            <Text className="mt-3 text-sm text-gray-500 text-center">
              No results for “{cameraQuery}”.
            </Text>
            <Text className="text-xs text-gray-400 mt-1">
              Adjust the filter or clear the search.
            </Text>
          </View>
        )}
      />

      {/* ---------- Menú "Más" ---------- */}
      <Modal
        transparent
        visible={showMore}
        animationType="fade"
        onRequestClose={() => setShowMore(false)}
      >
        <Pressable
          className="flex-1 bg-black/30"
          onPress={() => setShowMore(false)}
        >
          <Pressable
            className="absolute right-3 top-12 rounded-2xl bg-white p-2 shadow-lg"
            onPress={(e) => {
              // @ts-ignore RN Web
              e.stopPropagation?.();
            }}
          >
            <Pressable
              onPress={addCamera}
              className="flex-row items-center gap-3 px-3 py-2.5 rounded-xl active:bg-gray-100"
            >
              <Ionicons name="camera-outline" size={18} color="#111" />
              <Text className="text-sm font-medium text-neutral-900">
                Add camera
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>

      {/* ---------- Menú Filtro (con debounce) ---------- */}
      <Modal
        transparent
        visible={showFilter}
        animationType="fade"
        onRequestClose={() => setShowFilter(false)}
      >
        {/* Backdrop */}
        <Pressable
          className="flex-1 bg-black/30"
          onPress={() => setShowFilter(false)}
        >
          {/* Panel (detiene propagación en web) */}
          <Pressable
            className="absolute right-3 top-12 w-60 rounded-2xl bg-white p-3 shadow-lg"
            onPress={(e) => {
              // @ts-ignore
              e.stopPropagation?.();
            }}
          >
            <Text className="mb-2 text-xs font-semibold text-neutral-700">
              Filter by name
            </Text>

            <View className="flex-row items-center rounded-full bg-gray-100 px-3 py-2">
              <Ionicons name="search" size={16} color="#9CA3AF" />
              <TextInput
                className="ml-2 flex-1 text-sm text-black"
                placeholder="Ej: Front Door 1"
                placeholderTextColor="#9CA3AF"
                value={cameraQueryInput}
                onChangeText={setCameraQueryInput}
                returnKeyType="done"
              />
              {cameraQueryInput.length > 0 && (
                <Pressable onPress={() => setCameraQueryInput("")}>
                  <Ionicons name="close-circle" size={16} color="#9CA3AF" />
                </Pressable>
              )}
            </View>

            <View className="mt-3 flex-row justify-end gap-2">
              <Pressable
                onPress={() => {
                  setCameraQueryInput("");
                  setShowFilter(false);
                }}
                className="rounded-full px-3 py-2 active:bg-gray-100"
              >
                <Text className="text-sm text-red-700">Clear</Text>
              </Pressable>
              <Pressable
                onPress={() => setShowFilter(false)}
                className="rounded-full px-3 py-2 active:bg-gray-100"
              >
                <Text className="text-sm text-neutral-700">Close</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
