import { Pressable, ScrollView, Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";
import { clipTimes } from "../mockData";
import type { Camera } from "../types";
import { SmartImage } from "./SmartImage";

type PlaybackStripProps = {
  cameras: Camera[];
  compact?: boolean;
};

export function PlaybackStrip({
  cameras,
  compact = false,
}: PlaybackStripProps) {
  const { theme } = useCameraTheme();

  return (
    <View
      className="flex-1 rounded-[26px] p-4"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <View className="mb-4 flex-row items-center justify-between">
        <View className="flex-1">
          <Text
            className="text-lg font-black"
            style={{ color: theme.colors.text }}
          >
            24h playback
          </Text>
          <Text
            className="text-xs font-semibold leading-4"
            numberOfLines={compact ? 2 : undefined}
            style={{ color: theme.colors.textMuted }}
          >
            Confirm incidents without leaving live view.
          </Text>
        </View>
        <View
          className="flex-row items-center gap-2 rounded-full px-3 py-1.5"
          style={{ backgroundColor: theme.colors.primary }}
        >
          <View
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: theme.colors.primaryText }}
          />
          <Text
            className="text-xs font-black"
            style={{ color: theme.colors.primaryText }}
          >
            LIVE
          </Text>
        </View>
      </View>

      <View className="relative">
        <View
          className="absolute left-0 right-0 top-[45px] h-px"
          style={{ backgroundColor: theme.colors.border }}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 22, paddingRight: 12 }}
        >
          {clipTimes.map((time, index) => (
            <Pressable key={time} className={compact ? "w-[98px]" : "w-[118px]"}>
              <View className="mb-2 flex-row items-center justify-between">
                <Text
                  className="text-[11px] font-black"
                  style={{ color: theme.colors.textMuted }}
                >
                  {time}
                </Text>
                <View
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor:
                      index === 2 ? theme.colors.text : theme.colors.border,
                  }}
                />
              </View>
              <View
                className={`${compact ? "h-[64px]" : "h-[74px]"} overflow-hidden rounded-2xl border`}
                style={{
                  borderColor:
                    index === 2 ? theme.colors.text : theme.colors.border,
                  borderWidth: index === 2 ? 2 : 1,
                }}
              >
                <SmartImage
                  uri={cameras[index % cameras.length].image}
                  label={`${index + 2} clips`}
                  className="h-full w-full"
                  compact
                />
              </View>
              <Text
                className="mt-2 text-xs font-bold"
                style={{ color: theme.colors.textMuted }}
              >
                {index + 2} clips
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
