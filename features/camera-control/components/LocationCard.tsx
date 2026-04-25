import { Pressable, Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";

type LocationCardProps = {
  active: boolean;
  label: string;
  meta: string;
  detail: string;
  signal: number;
  tone: string;
  onPress: () => void;
  compact?: boolean;
};

export function LocationCard({
  active,
  label,
  meta,
  detail,
  signal,
  tone,
  onPress,
  compact = false,
}: LocationCardProps) {
  const { theme } = useCameraTheme();
  const backgroundColor = active ? theme.colors.panel : theme.colors.surface;
  const primaryText = active ? theme.colors.panelText : theme.colors.text;
  const mutedText = active ? theme.colors.panelMuted : theme.colors.textMuted;

  return (
    <Pressable
      onPress={onPress}
      className={`${compact ? "w-[184px] p-3" : "w-[220px] p-4"} rounded-[22px] border`}
      style={{
        backgroundColor,
        borderColor: active ? theme.colors.primary : theme.colors.border,
      }}
    >
      <View className="flex-row items-start justify-between gap-3">
        <View className="flex-1">
          <View className="mb-2 flex-row items-center gap-2">
            <View
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: tone }}
            />
            <Text
              className="text-sm font-black"
              numberOfLines={1}
              style={{ color: primaryText }}
            >
              {label}
            </Text>
          </View>
          <Text
            className="text-xs font-semibold"
            numberOfLines={compact ? 1 : 2}
            style={{ color: mutedText }}
          >
            {meta}
          </Text>
        </View>
        <Text
          className="text-[11px] font-black"
          style={{ color: primaryText }}
        >
          Signal {signal}%
        </Text>
      </View>
      <View
        className="mt-3 h-1.5 overflow-hidden rounded-full"
        style={{
          backgroundColor: active
            ? theme.colors.borderInverse
            : theme.colors.overlaySoft,
        }}
      >
        <View
          className="h-full rounded-full"
          style={{ width: `${signal}%`, backgroundColor: tone }}
        />
      </View>
      <Text
        className="mt-2 text-xs font-black"
        style={{ color: mutedText }}
      >
        {detail}
      </Text>
    </Pressable>
  );
}
