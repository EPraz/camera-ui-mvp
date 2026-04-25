import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";
import { commandNavItems } from "../navigation";

export function CommandRail() {
  const { theme } = useCameraTheme();

  return (
    <View
      className="w-[86px] justify-between px-3 py-5"
      style={{ backgroundColor: theme.colors.railBg }}
    >
      <View className="items-center gap-6">
        <View
          className="h-12 w-12 items-center justify-center rounded-2xl"
          style={{ backgroundColor: theme.colors.surface }}
        >
          <Text
            className="text-sm font-black"
            style={{ color: theme.colors.text }}
          >
            HC
          </Text>
        </View>
        <View className="gap-3">
          {commandNavItems.map((item, index) => (
            <Pressable
              key={item.label}
              className="h-12 w-12 items-center justify-center rounded-2xl"
              style={{
                backgroundColor:
                  index === 0 ? theme.colors.primary : theme.colors.railItem,
              }}
            >
              <Ionicons
                name={item.icon as any}
                size={19}
                color={
                  index === 0 ? theme.colors.primaryText : theme.colors.railIcon
                }
              />
            </Pressable>
          ))}
        </View>
      </View>

      <View className="items-center gap-3">
        <View
          className="h-12 w-12 items-center justify-center rounded-2xl"
          style={{ backgroundColor: theme.colors.railItem }}
        >
          <Ionicons
            name="person-outline"
            size={18}
            color={theme.colors.railIcon}
          />
        </View>
        <Text
          className="text-[10px] font-black uppercase"
          style={{ color: theme.colors.panelMuted }}
        >
          v0.2
        </Text>
      </View>
    </View>
  );
}
