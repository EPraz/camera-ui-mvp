import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";

type SmartImageProps = {
  uri: string;
  label: string;
  className: string;
  compact?: boolean;
};

export function SmartImage({
  uri,
  label,
  className,
  compact = false,
}: SmartImageProps) {
  const { theme } = useCameraTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [uri]);

  return (
    <View
      className={`overflow-hidden ${className}`}
      style={{ backgroundColor: theme.colors.panelRaised }}
    >
      {!loaded && (
        <LinearGradient
          colors={theme.colors.skeletonGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0 items-center justify-center"
        >
          <View
            className="absolute inset-x-0 top-1/2 h-px"
            style={{ backgroundColor: theme.colors.borderInverse }}
          />
          <View
            className="h-9 w-9 items-center justify-center rounded-full"
            style={{ backgroundColor: theme.colors.railItem }}
          >
            <Ionicons
              name="videocam-outline"
              size={compact ? 14 : 18}
              color={theme.colors.white}
            />
          </View>
          {!compact && (
            <Text
              className="mt-3 text-xs font-black uppercase tracking-normal"
              style={{ color: theme.colors.whiteSoft }}
            >
              Loading {label}
            </Text>
          )}
        </LinearGradient>
      )}
      <Image
        source={{ uri }}
        className={`h-full w-full ${loaded ? "opacity-100" : "opacity-0"}`}
        resizeMode="cover"
        onLoadEnd={() => setLoaded(true)}
      />
    </View>
  );
}
