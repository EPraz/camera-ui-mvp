import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";
import { OperationRow } from "./OperationRow";
import { SignalNode } from "./SignalNode";

type OperationsPanelProps = {
  alerts: number;
  online: number;
  total: number;
  compact?: boolean;
  tablet?: boolean;
};

export function OperationsPanel({
  alerts,
  online,
  total,
  compact = false,
  tablet = false,
}: OperationsPanelProps) {
  const { theme } = useCameraTheme();
  const expanded = compact || tablet;

  return (
    <View
      className={`rounded-[26px] p-4 ${
        expanded ? "w-full" : "md:w-[340px]"
      }`}
      style={{ backgroundColor: theme.colors.panel }}
    >
      <View className="flex-row items-start justify-between gap-3">
        <View>
          <Text
            className="text-lg font-black"
            style={{ color: theme.colors.panelText }}
          >
            Operations
          </Text>
          <Text
            className="mt-1 text-xs font-semibold"
            style={{ color: theme.colors.panelMuted }}
          >
            Health, alerts, and gateway signal.
          </Text>
        </View>
        <View
          className="h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: theme.colors.primary }}
        >
          <Ionicons
            name="radio"
            size={20}
            color={theme.colors.primaryText}
          />
        </View>
      </View>

      <View className={`mt-4 ${tablet ? "flex-row gap-3" : "gap-2"}`}>
        <OperationRow
          label="Online streams"
          value={`${online}/${total}`}
          tone={theme.colors.success}
        />
        <OperationRow
          label="Open alerts"
          value={alerts.toString()}
          tone={alerts ? theme.colors.danger : theme.colors.success}
        />
        <OperationRow label="Avg signal" value="90%" tone={theme.colors.info} />
      </View>

      <View
        className="mt-4 rounded-[22px] border p-3"
        style={{
          backgroundColor: theme.colors.railItem,
          borderColor: theme.colors.borderInverse,
        }}
      >
        <View className="flex-row items-center justify-between gap-3">
          <SignalNode label="Aurora" value="96%" tone={theme.colors.success} />
          <SignalNode label="Nomad" value="82%" tone={theme.colors.warning} />
          <SignalNode label="Villa" value="91%" tone={theme.colors.info} />
        </View>
      </View>
    </View>
  );
}
