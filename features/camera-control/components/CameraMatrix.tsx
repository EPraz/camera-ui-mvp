import { ScrollView, Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";
import type { Camera } from "../types";
import { CameraCard } from "./CameraCard";

type CameraMatrixProps = {
  cameras: Camera[];
  selectedCameraId: string;
  mobile: boolean;
  onSelectCamera: (cameraId: string) => void;
};

export function CameraMatrix({
  cameras,
  selectedCameraId,
  mobile,
  onSelectCamera,
}: CameraMatrixProps) {
  const { theme } = useCameraTheme();

  return (
    <View className="gap-3">
      <View className="flex-row items-end justify-between">
        <View>
          <Text
            className="text-xl font-black"
            style={{ color: theme.colors.text }}
          >
            Camera matrix
          </Text>
          <Text
            className="text-xs font-semibold"
            style={{ color: theme.colors.textMuted }}
          >
            Click any stream to promote it to the command viewer.
          </Text>
        </View>
        <Text
          className="text-xs font-black"
          style={{ color: theme.colors.textMuted }}
        >
          {cameras.length} streams
        </Text>
      </View>

      {mobile ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingRight: 8 }}
        >
          {cameras.map((camera) => (
            <CameraCard
              key={camera.id}
              camera={camera}
              active={camera.id === selectedCameraId}
              compact={false}
              carousel
              onPress={() => onSelectCamera(camera.id)}
            />
          ))}
        </ScrollView>
      ) : (
        <View className="flex-row flex-wrap gap-3">
          {cameras.map((camera) => (
            <CameraCard
              key={camera.id}
              camera={camera}
              active={camera.id === selectedCameraId}
              compact={false}
              onPress={() => onSelectCamera(camera.id)}
            />
          ))}
        </View>
      )}
    </View>
  );
}
