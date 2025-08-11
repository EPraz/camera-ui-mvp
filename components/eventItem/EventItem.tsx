import { EventItemProps } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import DeleteMenuModal from "./DeleteMenuModal";

type Props = {
  event: EventItemProps;
  isActive?: boolean;
  onPress?: () => void;
  onDelete?: (id: string) => void;
};

export default function EventItem({
  event,
  isActive,
  onPress,
  onDelete,
}: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [menuPos, setMenuPos] = useState<{ top: number; right: number }>({
    top: 0,
    right: 8,
  });

  const ellipsisRef = useRef<View>(null);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "person":
        return "#007AFF";
      case "doorbell":
        return "#FF6B35";
      case "motion":
      default:
        return "#34C759";
    }
  };

  const openMenu = () => {
    // Medimos posición del botón para ubicar el popover
    ellipsisRef.current?.measureInWindow((x, y, width, height) => {
      const screenW = Dimensions.get("window").width;
      const top = y + height + 4; // un poco debajo del botón
      const right = Math.max(8, screenW - (x + width) + 8); // margen a la derecha
      setMenuPos({ top, right });
      setShowMenu(true);
    });
  };

  return (
    <View
      className={`relative flex-row items-center bg-white ${isActive ? "bg-gray-50" : ""}`}
    >
      {/* Timeline (altura fija) */}
      <View className="w-6 items-center justify-center relative py-3">
        <View className="w-0.5 h-[64px] bg-gray-300" />
        <View
          className="w-1 h-1 bg-neutral-800 rounded-full absolute"
          style={{ top: "50%", marginTop: -2 }}
        />
      </View>

      {/* Contenido */}
      <TouchableOpacity
        className="flex-1 flex-row items-center py-3 pr-2"
        onPress={onPress}
        activeOpacity={0.85}
      >
        <View className="relative mr-3">
          <Image
            source={{ uri: event.thumbnail }}
            className="w-[128px] h-[64px] rounded-md bg-gray-300"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-black/25 rounded-md items-center justify-center">
            <Ionicons name="play" size={16} color="#fff" />
          </View>
          <View
            className="absolute -top-0.5 -right-0.5 w-[6px] h-[6px] rounded-full border-2 border-white"
            style={{ backgroundColor: getEventTypeColor(event.type) }}
          />
        </View>

        <View className="flex-1">
          <Text className="text-[15px] font-medium text-black mb-0.5">
            {event.camera}
          </Text>
          <Text className="text-xs text-gray-500">{event.time}</Text>
        </View>
      </TouchableOpacity>

      {/* Ellipsis (referencia para medir) */}
      <View className="relative">
        <Pressable
          ref={ellipsisRef}
          onPress={openMenu}
          className="p-2 pr-3"
          hitSlop={8}
        >
          <Ionicons name="ellipsis-horizontal" size={18} color="#6b7280" />
        </Pressable>
      </View>

      {/* ---------- POPUP MENÚ en MODAL (PORTAL) ---------- */}
      <DeleteMenuModal
        menuPos={menuPos}
        setShowConfirm={setShowConfirm}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />

      {/* ---------- CONFIRMACIÓN ---------- */}
      <DeleteConfirmationModal
        event={event}
        setShowConfirm={setShowConfirm}
        showConfirm={showConfirm}
        onDelete={onDelete}
      />
    </View>
  );
}
