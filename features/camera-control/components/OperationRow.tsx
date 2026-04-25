import { Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";

type OperationRowProps = {
  label: string;
  value: string;
  tone: string;
};

export function OperationRow({ label, value, tone }: OperationRowProps) {
  const { theme } = useCameraTheme();

  return (
    <View
      className="flex-1 flex-row items-center justify-between rounded-2xl px-3 py-3"
      style={{ backgroundColor: theme.colors.railItem }}
    >
      <Text
        className="text-sm font-semibold"
        style={{ color: theme.colors.panelMuted }}
      >
        {label}
      </Text>
      <Text className="text-lg font-black" style={{ color: tone }}>
        {value}
      </Text>
    </View>
  );
}
