import { BASE_BOTTOM_BAR_HEIGHT, bottomNavitationBarMenu } from "@/constants";
import { useWindowSizeClass } from "@/hooks";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BottomNavigationBar() {
  const insets = useSafeAreaInsets();
  const { isExpanded } = useWindowSizeClass();
  const router = useRouter();
  const pathname = usePathname();

  const barHeight = BASE_BOTTOM_BAR_HEIGHT + insets.bottom;

  const isActiveHref = (href: string) => {
    // marca activo si la ruta actual empieza con el href
    // (útil para sub-rutas)
    return pathname?.startsWith(href);
  };

  // Sidebar (tablet/desktop)
  if (isExpanded) {
    return (
      <View
        className="w-[185px] bg-white py-4 border-r border-transparent rounded-[12px]"
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        {/* Header */}
        <View className="px-5 py-4 border-b border-gray-100">
          <Text className="text-xl font-bold text-neutral-900">CamViewer</Text>
          <Text className="text-[11px] text-neutral-500 mt-1">
            Monitor & playback
          </Text>
        </View>

        {/* Menu */}
        <View className="flex-1 px-3 py-3">
          {bottomNavitationBarMenu
            .filter((x) => x.label !== "Settings")
            .map((tab) => {
              const active = isActiveHref(tab.href);
              return (
                <Pressable
                  key={tab.label}
                  onPress={() => router.push(tab.href as any)}
                  className="relative my-1"
                >
                  {active && (
                    <View className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full bg-black" />
                  )}
                  <View
                    className={[
                      "ml-3 flex-row items-center gap-3 rounded-xl px-4 py-2.5",
                      active ? "bg-black/5" : "bg-transparent",
                    ].join(" ")}
                  >
                    <Ionicons
                      name={
                        active ? (tab.iconSelected as any) : (tab.icon as any)
                      }
                      size={24}
                      color={active ? "#111" : "#6b7280"}
                    />
                    <Text
                      className={
                        active
                          ? "text-black font-semibold text-base"
                          : "text-gray-500 text-base"
                      }
                    >
                      {tab.label}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
        </View>

        {/* Footer */}
        <View className="px-4 pt-3 pb-2 border-t border-gray-100">
          <Pressable
            onPress={() => router.push("/coming-soon" as any)}
            className="flex-row items-center gap-3 rounded-xl px-3 py-2 active:bg-black/5"
          >
            <Ionicons name="settings-outline" size={22} color="#6b7280" />
            <Text className="text-gray-700 font-medium">Settings</Text>
          </Pressable>

          <View className="mt-3 flex-row items-center justify-between">
            <Text className="text-[11px] text-gray-400">v0.1.0 • Beta</Text>
          </View>
        </View>
      </View>
    );
  }

  // Bottom bar (móvil)
  return (
    <View
      className="absolute left-0 right-0 bottom-0 flex-row w-full bg-white border-t border-gray-50 z-50"
      style={{ height: barHeight, paddingBottom: insets.bottom }}
    >
      {bottomNavitationBarMenu.map((tab) => {
        const active = isActiveHref(tab.href);
        return (
          <Pressable
            key={tab.label}
            onPress={() => router.push(tab.href as any)}
            className="flex-1 items-center justify-center"
          >
            <View
              className={`items-center w-full pt-2 pb-1 ${active ? "border-t-2 border-[#000]" : ""}`}
            >
              <Ionicons
                name={active ? (tab.iconSelected as any) : (tab.icon as any)}
                size={22}
                color={active ? "#000" : "#555"}
              />
              <Text
                className={`text-xs mt-1 ${active ? "text-[#000] font-semibold" : "text-gray-500"}`}
              >
                {tab.label}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
