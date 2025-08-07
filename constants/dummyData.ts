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

export interface EventItemProps {
  id: string;
  camera: string;
  time: string;
  thumbnail: string;
  type: "motion" | "person" | "doorbell";
}
export const events: EventItemProps[] = [
  {
    id: "1",
    camera: "Front Door 2",
    time: "10:56:18 AM",
    thumbnail:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    type: "motion",
  },
  {
    id: "2",
    camera: "Front Door 2",
    time: "10:54:13 PM",
    thumbnail:
      "https://images.pexels.com/photos/1029391/pexels-photo-1029391.jpeg",
    type: "person",
  },
  {
    id: "3",
    camera: "Front Door 2",
    time: "10:52:36 AM",
    thumbnail:
      "https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg",
    type: "motion",
  },
  {
    id: "4",
    camera: "Front Door 1",
    time: "10:50:44 AM",
    thumbnail:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    type: "doorbell",
  },
  {
    id: "5",
    camera: "Front Door 1",
    time: "10:48:20 AM",
    thumbnail:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    type: "motion",
  },
  {
    id: "6",
    camera: "Front Door 1",
    time: "10:46:12 AM",
    thumbnail:
      "https://images.pexels.com/photos/1029391/pexels-photo-1029391.jpeg",
    type: "person",
  },
  {
    id: "7",
    camera: "Front Door 2",
    time: "10:44:05 AM",
    thumbnail:
      "https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg",
    type: "motion",
  },
  {
    id: "8",
    camera: "Front Door 2",
    time: "10:42:18 AM",
    thumbnail:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    type: "doorbell",
  },
  {
    id: "9",
    camera: "Front Door 2",
    time: "10:40:33 AM",
    thumbnail:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    type: "motion",
  },
  {
    id: "10",
    camera: "Front Door 2",
    time: "10:38:27 AM",
    thumbnail:
      "https://images.pexels.com/photos/1029391/pexels-photo-1029391.jpeg",
    type: "person",
  },
];
