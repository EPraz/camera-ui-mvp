import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";

type RoundActionProps = {
  icon: string;
  light?: boolean;
  glass?: boolean;
  compact?: boolean;
  onPress?: () => void;
  accessibilityLabel?: string;
};

export function RoundAction({
  icon,
  light = false,
  glass = false,
  compact = false,
  onPress,
  accessibilityLabel,
}: RoundActionProps) {
  const { theme } = useCameraTheme();
  const backgroundColor = glass
    ? theme.colors.glass
    : light
      ? theme.colors.surface
      : theme.colors.primary;
  const color = glass
    ? theme.colors.railIcon
    : light
      ? theme.colors.text
      : theme.colors.primaryText;

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      className={`${compact ? "h-12 w-12 rounded-[18px]" : "h-12 w-12 rounded-2xl"} items-center justify-center`}
      style={{ backgroundColor }}
    >
      <Ionicons name={icon as any} size={19} color={color} />
    </Pressable>
  );
}
