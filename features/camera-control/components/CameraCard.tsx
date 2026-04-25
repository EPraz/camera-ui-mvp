import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";
import { getStatusColor } from "../theme";
import type { Camera } from "../types";
import { SmartImage } from "./SmartImage";

type CameraCardProps = {
  camera: Camera;
  active: boolean;
  compact: boolean;
  carousel?: boolean;
  onPress: () => void;
};

export function CameraCard({
  camera,
  active,
  compact,
  carousel = false,
  onPress,
}: CameraCardProps) {
  const { theme } = useCameraTheme();
  const statusTone = getStatusColor(theme, camera.status);

  return (
    <Pressable
      onPress={onPress}
      className={`overflow-hidden rounded-[22px] ${
        carousel ? "w-[232px]" : compact ? "w-full" : "w-[23.8%] min-w-[230px] flex-1"
      } border`}
      style={{
        backgroundColor: theme.colors.panelRaised,
        borderColor: active ? theme.colors.primary : theme.colors.border,
        borderWidth: active ? 2 : 1,
      }}
    >
      <SmartImage
        uri={camera.image}
        label={camera.name}
        className={carousel ? "h-[140px] w-full" : "h-[150px] w-full"}
        compact
      />
      <LinearGradient
        colors={["rgba(0,0,0,0.05)", "rgba(0,0,0,0.82)"]}
        className="absolute inset-0"
      />
      <View className="absolute inset-0 justify-between p-3">
        <View className="flex-row justify-between">
          <View
            className="rounded-full px-2.5 py-1"
            style={{ backgroundColor: theme.colors.glass }}
          >
            <Text
              className="text-[11px] font-black"
              style={{ color: theme.colors.white }}
            >
              {camera.temperature}
            </Text>
          </View>
          <View
            className="rounded-full px-2.5 py-1"
            style={{ backgroundColor: statusTone }}
          >
            <Text
              className="text-[11px] font-black"
              style={{ color: theme.colors.statusText }}
            >
              {camera.status}
            </Text>
          </View>
        </View>
        <View>
          <Text
            className="text-base font-black"
            style={{ color: theme.colors.white }}
          >
            {camera.name}
          </Text>
          <Text
            className="text-xs font-semibold"
            style={{ color: theme.colors.whiteSoft }}
          >
            {camera.zone} - {camera.timestamp}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
