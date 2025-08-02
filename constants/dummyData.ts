import { Ionicons } from "@expo/vector-icons";

export type TabProps = { id: string; label: string };

export const tabs: TabProps[] = [
  { id: "all", label: "All Events" },
  { id: "doorbell", label: "Doorbell Call" },
  { id: "detection", label: "Intelligent Detection" },
];

export type SidebarItemProps = {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export const sidebarItems: SidebarItemProps[] = [
  { id: "home", icon: "home" },
  { id: "video", icon: "videocam" },
  { id: "bell", icon: "notifications" },
  { id: "add", icon: "add" },
  //   { id: "search", icon: "search" }, // lo puse en el header
];
