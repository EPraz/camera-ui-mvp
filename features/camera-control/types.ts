export type SiteStatus = "Secure" | "Attention";
export type CameraStatus = "Live" | "Idle" | "Alert";
export type FeedTone = "green" | "amber" | "red";

export type Site = {
  id: string;
  name: string;
  kind: "Yacht" | "Sailboat" | "Residence";
  location: string;
  status: SiteStatus;
  signal: number;
  risk: string;
  cameras: Camera[];
};

export type Camera = {
  id: string;
  siteId: string;
  name: string;
  zone: string;
  status: CameraStatus;
  image: string;
  timestamp: string;
  temperature: string;
};

export type FeedEvent = {
  id: string;
  cameraId: string;
  title: string;
  detail: string;
  time: string;
  image: string;
  tone: FeedTone;
};
