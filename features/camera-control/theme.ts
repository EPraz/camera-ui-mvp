import {
  cameraThemeTokens,
  type CameraThemeId,
  type CameraThemeTokenGroup,
} from "@/constants/designTokens";
import type { CameraStatus, SiteStatus } from "./types";

export const cameraThemes = cameraThemeTokens;
export const defaultCameraThemeId: CameraThemeId = "neon";
export const cameraThemeOrder: CameraThemeId[] = ["neon", "dark", "light"];

export type CameraTheme = CameraThemeTokenGroup;

export const getNextCameraThemeId = (current: CameraThemeId) => {
  const index = cameraThemeOrder.indexOf(current);
  return cameraThemeOrder[(index + 1) % cameraThemeOrder.length];
};

export const getStatusColor = (
  theme: CameraTheme,
  status: CameraStatus | SiteStatus,
) => {
  switch (status) {
    case "Idle":
    case "Attention":
      return theme.colors.warning;
    case "Alert":
      return theme.colors.danger;
    case "Live":
    case "Secure":
    default:
      return theme.colors.success;
  }
};
