import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";
import { commandNavItems } from "../navigation";

type CommandMenuDrawerProps = {
  visible: boolean;
  onClose: () => void;
};

export function CommandMenuDrawer({ visible, onClose }: CommandMenuDrawerProps) {
  const { theme } = useCameraTheme();

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1">
        <Pressable
          className="absolute inset-0"
          onPress={onClose}
          style={{ backgroundColor: theme.colors.overlay }}
        />

        <View
          className="absolute bottom-3 left-3 top-3 w-[292px] justify-between rounded-[28px] p-4 shadow-lg"
          style={{ backgroundColor: theme.colors.railBg }}
        >
          <View>
            <View className="mb-7 flex-row items-center justify-between">
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
              <Pressable
                accessibilityLabel="Close command menu"
                onPress={onClose}
                className="h-11 w-11 items-center justify-center rounded-2xl"
                style={{ backgroundColor: theme.colors.railItem }}
              >
                <Ionicons name="close" size={20} color={theme.colors.railIcon} />
              </Pressable>
            </View>

            <Text
              className="mb-3 text-[11px] font-black uppercase tracking-normal"
              style={{ color: theme.colors.panelMuted }}
            >
              Command menu
            </Text>

            <View className="gap-2">
              {commandNavItems.map((item, index) => (
                <Pressable
                  key={item.label}
                  onPress={onClose}
                  className="flex-row items-center gap-3 rounded-2xl px-3 py-3"
                  style={{
                    backgroundColor:
                      index === 0 ? theme.colors.primary : theme.colors.railItem,
                  }}
                >
                  <Ionicons
                    name={item.icon as any}
                    size={19}
                    color={
                      index === 0
                        ? theme.colors.primaryText
                        : theme.colors.railIcon
                    }
                  />
                  <Text
                    className="text-sm font-black"
                    style={{
                      color:
                        index === 0
                          ? theme.colors.primaryText
                          : theme.colors.panelText,
                    }}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View
            className="rounded-[22px] border p-4"
            style={{
              backgroundColor: theme.colors.railItem,
              borderColor: theme.colors.borderInverse,
            }}
          >
            <Text
              className="text-xs font-black uppercase"
              style={{ color: theme.colors.panelMuted }}
            >
              Session
            </Text>
            <Text
              className="mt-1 text-base font-black"
              style={{ color: theme.colors.panelText }}
            >
              7 streams online
            </Text>
            <Text
              className="mt-1 text-xs font-semibold"
              style={{ color: theme.colors.panelMuted }}
            >
              Fleet command shell v0.2
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}
