import { Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";
import { RoundAction } from "./RoundAction";

type DashboardHeaderProps = {
  compact: boolean;
  showMenuButton: boolean;
  onMenuPress: () => void;
};

export function DashboardHeader({
  compact,
  showMenuButton,
  onMenuPress,
}: DashboardHeaderProps) {
  const { cycleTheme, theme } = useCameraTheme();

  return (
    <View
      className={
        compact
          ? "gap-4"
          : "flex-row flex-wrap items-start justify-between gap-4"
      }
    >
      <View className={compact ? "w-full" : ""}>
        <View className="mb-2 flex-row items-center gap-2">
          <View
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: theme.colors.primary }}
          />
          <Text
            className="text-[11px] font-black uppercase tracking-normal"
            style={{ color: theme.colors.textMuted }}
          >
            Command layer online
          </Text>
        </View>
        <Text
          className={`font-black ${
            compact ? "text-[40px] leading-[43px]" : "text-4xl md:text-5xl"
          }`}
          style={{ color: theme.colors.text }}
        >
          Harbor Command
        </Text>
        <Text
          className="mt-1 text-sm font-semibold leading-5"
          style={{ color: theme.colors.textMuted }}
          numberOfLines={compact ? 2 : undefined}
        >
          Unified cameras across vessels, residences, docks, and crew zones.
        </Text>
      </View>

      <View className="flex-row items-center gap-2">
        {showMenuButton && (
          <RoundAction
            icon="menu-outline"
            light
            compact={compact}
            onPress={onMenuPress}
            accessibilityLabel="Open command menu"
          />
        )}
        <RoundAction
          icon="color-palette-outline"
          light
          compact={compact}
          onPress={cycleTheme}
          accessibilityLabel={`Switch theme. Current theme is ${theme.label}`}
        />
        <RoundAction icon="search" light compact={compact} />
        <RoundAction icon="options-outline" light compact={compact} />
        <RoundAction icon="add" compact={compact} />
      </View>
    </View>
  );
}
