export type TabProps = { id: string; label: string };

export const tabs: TabProps[] = [
  { id: "all", label: "All Events" },
  { id: "doorbell", label: "Doorbell Call" },
  { id: "detection", label: "Intelligent Detection" },
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
    camera: "Front Door 1",
    time: "10:56:18 AM",
    thumbnail:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    type: "motion",
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
    camera: "Front Door 3",
    time: "10:50:44 AM",
    thumbnail:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    type: "doorbell",
  },
];

type BottomNavitationBarMenuProps = {
  label: string;
  icon: string;
  iconSelected: string;
  href: string;
};
export const bottomNavitationBarMenu: BottomNavitationBarMenuProps[] = [
  { label: "Home", icon: "home-outline", iconSelected: "home", href: "/" },
  {
    label: "Search",
    icon: "search-outline",
    iconSelected: "search",
    href: "/coming-soon",
  },
  {
    label: "Profile",
    icon: "person-outline",
    iconSelected: "person",
    href: "/coming-soon",
  },
  {
    label: "Settings",
    icon: "settings-outline",
    iconSelected: "settings",
    href: "/coming-soon",
  },
];

export const timelineData = [
  {
    time: "09:00 AM",
    clips: 2,
    thumbnail:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop",
  },
  {
    time: "10:56 AM",
    clips: 1,
    thumbnail:
      "https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop",
    isActive: true,
  },
  {
    time: "11:00 AM",
    clips: 4,
    thumbnail:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop",
  },
  {
    time: "12:00 PM",
    clips: 6,
    thumbnail:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop",
  },
];
