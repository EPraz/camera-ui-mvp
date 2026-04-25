import { Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";

type SignalNodeProps = {
  label: string;
  value: string;
  tone: string;
};

export function SignalNode({ label, value, tone }: SignalNodeProps) {
  const { theme } = useCameraTheme();

  return (
    <View
      className="flex-1 rounded-2xl px-3 py-2"
      style={{ backgroundColor: theme.colors.overlaySoft }}
    >
      <Text
        className="text-[10px] font-black uppercase"
        style={{ color: theme.colors.panelMuted }}
      >
        {label}
      </Text>
      <Text className="text-sm font-black" style={{ color: tone }}>
        {value}
      </Text>
    </View>
  );
}
