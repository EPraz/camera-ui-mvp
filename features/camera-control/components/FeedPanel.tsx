import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";
import type { CameraTheme } from "../theme";
import type { FeedEvent } from "../types";
import { SmartImage } from "./SmartImage";

type FeedPanelProps = {
  events: FeedEvent[];
  onSelectCamera: (cameraId: string) => void;
};

function getEventToneColor(theme: CameraTheme, event: FeedEvent) {
  if (event.tone === "red") return theme.colors.danger;
  if (event.tone === "amber") return theme.colors.warning;
  return theme.colors.success;
}

export function FeedPanel({ events, onSelectCamera }: FeedPanelProps) {
  const { theme } = useCameraTheme();

  return (
    <View
      className="rounded-[26px] p-4"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <View className="mb-4 flex-row items-center justify-between">
        <View>
          <Text
            className="text-xl font-black"
            style={{ color: theme.colors.text }}
          >
            Event queue
          </Text>
          <Text
            className="text-xs font-semibold"
            style={{ color: theme.colors.textMuted }}
          >
            Prioritized across selected locations.
          </Text>
        </View>
        <View className="flex-row gap-2">
          <Ionicons name="funnel-outline" size={18} color={theme.colors.text} />
          <Ionicons name="menu-outline" size={21} color={theme.colors.text} />
        </View>
      </View>

      <View className="mb-4 flex-row justify-between">
        {["Thu\n09", "Fri\n10", "Sat\n11", "Sun\n12", "Mon\n13", "Tue\n14"].map(
          (day, index) => (
            <View
              key={day}
              className="h-12 w-9 items-center justify-center rounded-2xl"
              style={{
                backgroundColor:
                  index === 5 ? theme.colors.text : theme.colors.surfaceMuted,
              }}
            >
              <Text
                className="text-center text-[10px] font-black"
                style={{
                  color:
                    index === 5
                      ? theme.colors.textInverse
                      : theme.colors.textMuted,
                }}
              >
                {day}
              </Text>
            </View>
          ),
        )}
      </View>

      <View className="gap-3">
        {events.map((event) => (
          <Pressable
            key={event.id}
            className="flex-row items-center gap-3 rounded-2xl"
            onPress={() => onSelectCamera(event.cameraId)}
          >
            <View
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: getEventToneColor(theme, event) }}
            />
            <View
              className="h-[58px] w-[86px] overflow-hidden rounded-xl"
              style={{ backgroundColor: theme.colors.overlaySoft }}
            >
              <SmartImage
                uri={event.image}
                label={event.title}
                className="h-full w-full"
                compact
              />
            </View>
            <View className="flex-1">
              <Text
                className="text-sm font-black"
                style={{ color: theme.colors.text }}
              >
                {event.title}
              </Text>
              <Text
                className="text-xs font-semibold"
                style={{ color: theme.colors.textMuted }}
              >
                {event.detail}
              </Text>
              <Text
                className="text-[11px] font-semibold"
                style={{ color: theme.colors.textSubtle }}
              >
                {event.time}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
