import type { FeedEvent, Site } from "./types";

export const sites: Site[] = [
  {
    id: "aurora",
    name: "M/Y Aurora",
    kind: "Yacht",
    location: "Marina Casa de Campo",
    status: "Secure",
    signal: 96,
    risk: "Low risk",
    cameras: [
      {
        id: "aurora-aft",
        siteId: "aurora",
        name: "Aft Deck",
        zone: "Exterior",
        status: "Live",
        image:
          "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1400",
        timestamp: "12:49 PM",
        temperature: "31 C",
      },
      {
        id: "aurora-bridge",
        siteId: "aurora",
        name: "Bridge",
        zone: "Command",
        status: "Idle",
        image:
          "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1400",
        timestamp: "12:48 PM",
        temperature: "24 C",
      },
      {
        id: "aurora-engine",
        siteId: "aurora",
        name: "Engine Room",
        zone: "Restricted",
        status: "Alert",
        image:
          "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1400",
        timestamp: "12:46 PM",
        temperature: "36 C",
      },
    ],
  },
  {
    id: "nomad",
    name: "S/V Nomad",
    kind: "Sailboat",
    location: "Nassau Harbour",
    status: "Attention",
    signal: 82,
    risk: "Dock activity",
    cameras: [
      {
        id: "nomad-dock",
        siteId: "nomad",
        name: "Port Dock",
        zone: "Exterior",
        status: "Alert",
        image:
          "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1400",
        timestamp: "12:44 PM",
        temperature: "29 C",
      },
      {
        id: "nomad-salon",
        siteId: "nomad",
        name: "Main Salon",
        zone: "Interior",
        status: "Live",
        image:
          "https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&w=1400",
        timestamp: "12:41 PM",
        temperature: "23 C",
      },
    ],
  },
  {
    id: "villa",
    name: "Villa Norte",
    kind: "Residence",
    location: "Santo Domingo",
    status: "Secure",
    signal: 91,
    risk: "Clear",
    cameras: [
      {
        id: "villa-gate",
        siteId: "villa",
        name: "Main Gate",
        zone: "Entrance",
        status: "Live",
        image:
          "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1400",
        timestamp: "12:39 PM",
        temperature: "30 C",
      },
      {
        id: "villa-pool",
        siteId: "villa",
        name: "Pool Deck",
        zone: "Exterior",
        status: "Idle",
        image:
          "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1400",
        timestamp: "12:33 PM",
        temperature: "32 C",
      },
    ],
  },
];

export const allCameras = sites.flatMap((site) => site.cameras);

export const feedEvents: FeedEvent[] = allCameras.map((camera, index) => ({
  id: `${camera.id}-event`,
  cameraId: camera.id,
  title:
    camera.status === "Alert"
      ? "Perimeter motion"
      : camera.status === "Idle"
        ? "Snapshot archived"
        : "Live heartbeat",
  detail: `${camera.name} - ${camera.zone}`,
  time: `${12 - Math.floor(index / 3)}:${index % 3 === 0 ? "49" : index % 3 === 1 ? "36" : "18"} PM`,
  image: camera.image,
  tone:
    camera.status === "Alert"
      ? "red"
      : camera.status === "Idle"
        ? "amber"
        : "green",
}));

export const clipTimes = ["12:49 PM", "11:39 AM", "10:56 AM", "10:25 AM", "09:34 AM"];
