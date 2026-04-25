import { Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";

type HeroBadgeProps = {
  label: string;
  value: string;
  tone: string;
  compact?: boolean;
};

export function HeroBadge({
  label,
  value,
  tone,
  compact = false,
}: HeroBadgeProps) {
  const { theme } = useCameraTheme();

  return (
    <View
      className={`rounded-full border ${
        compact ? "px-3 py-1.5" : "px-3 py-2"
      }`}
      style={{
        backgroundColor: theme.colors.glass,
        borderColor: theme.colors.borderInverse,
      }}
    >
      <Text
        className="text-[10px] font-black uppercase"
        style={{ color: theme.colors.whiteSoft }}
      >
        {label}
      </Text>
      <Text className="text-xs font-black" style={{ color: tone }}>
        {value}
      </Text>
    </View>
  );
}
