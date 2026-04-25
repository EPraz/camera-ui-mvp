import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";
import { getStatusColor } from "../theme";
import type { Camera } from "../types";
import { HeroBadge } from "./HeroBadge";
import { RoundAction } from "./RoundAction";
import { SmartImage } from "./SmartImage";

type HeroPlayerProps = {
  camera: Camera;
  siteName: string;
  compact?: boolean;
};

export function HeroPlayer({
  camera,
  siteName,
  compact = false,
}: HeroPlayerProps) {
  const { theme } = useCameraTheme();

  return (
    <View
      className={`overflow-hidden shadow-lg ${
        compact ? "rounded-[26px]" : "rounded-[30px]"
      }`}
      style={{ backgroundColor: theme.colors.panelRaised }}
    >
      <SmartImage
        uri={camera.image}
        label={camera.name}
        className={compact ? "h-[520px] w-full" : "h-[430px] w-full md:h-[640px]"}
      />
      <LinearGradient
        colors={theme.colors.heroGradient}
        locations={[0, 0.46, 1]}
        className="absolute inset-0"
      />
      <View className="absolute inset-0 justify-between p-4 md:p-6">
        <View className={compact ? "gap-3" : "flex-row flex-wrap items-start justify-between gap-3"}>
          <View
            className={`border ${
              compact ? "self-start rounded-[20px] px-3 py-3" : "rounded-[22px] px-4 py-3"
            }`}
            style={{
              backgroundColor: theme.colors.glass,
              borderColor: theme.colors.borderInverse,
            }}
          >
            <Text
              className="text-xs font-black uppercase tracking-normal"
              style={{ color: theme.colors.whiteSoft }}
            >
              {siteName} - {camera.zone}
            </Text>
            <Text
              className={`mt-1 font-black ${
                compact ? "text-[34px]" : "text-3xl md:text-4xl"
              }`}
              style={{ color: theme.colors.white }}
            >
              {camera.name}
            </Text>
          </View>

          <View className="flex-row gap-2">
            <RoundAction icon="mic-outline" glass compact={compact} />
            <RoundAction icon="camera-outline" glass compact={compact} />
            <RoundAction icon="scan-outline" glass compact={compact} />
          </View>
        </View>

        <View className={compact ? "gap-3" : "gap-4"}>
          <View className="flex-row flex-wrap gap-2">
            <HeroBadge
              label="Status"
              value={camera.status}
              tone={getStatusColor(theme, camera.status)}
              compact={compact}
            />
            <HeroBadge
              label="Temperature"
              value={camera.temperature}
              tone={theme.colors.warning}
              compact={compact}
            />
            <HeroBadge
              label="Last sync"
              value={camera.timestamp}
              tone={theme.colors.info}
              compact={compact}
            />
          </View>

          <View
            className={`border ${
              compact ? "rounded-[22px] p-3" : "rounded-[24px] p-4"
            }`}
            style={{
              backgroundColor: theme.colors.glass,
              borderColor: theme.colors.borderInverse,
            }}
          >
            <View
              className={`${compact ? "mb-3" : "mb-4"} h-1.5 overflow-hidden rounded-full`}
              style={{ backgroundColor: theme.colors.borderInverse }}
            >
              <View
                className="h-full w-[58%] rounded-full"
                style={{ backgroundColor: theme.colors.primary }}
              />
            </View>
            <View className="flex-row flex-wrap items-center justify-between gap-4">
              <View className="flex-row items-center gap-3">
                <Ionicons name="volume-high" size={18} color={theme.colors.white} />
                <Text
                  className="text-sm font-black"
                  style={{ color: theme.colors.white }}
                >
                  01:03 / 02:08
                </Text>
              </View>
              <View className="flex-row items-center gap-5">
                <Ionicons
                  name="play-skip-back"
                  size={18}
                  color={theme.colors.white}
                />
                <View
                  className={`${compact ? "h-12 w-12" : "h-14 w-14"} items-center justify-center rounded-full`}
                  style={{ backgroundColor: theme.colors.white }}
                >
                  <Ionicons
                    name="pause"
                    size={compact ? 20 : 23}
                    color={theme.colors.onLight}
                  />
                </View>
                <Ionicons
                  name="play-skip-forward"
                  size={18}
                  color={theme.colors.white}
                />
              </View>
              <View className="flex-row items-center gap-2">
                <View
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: theme.colors.success }}
                />
                <Text
                  className="text-xs font-black uppercase"
                  style={{ color: theme.colors.white }}
                >
                  Live
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
