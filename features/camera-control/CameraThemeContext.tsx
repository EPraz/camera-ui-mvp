import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { CameraThemeId } from "@/constants/designTokens";
import {
  cameraThemes,
  defaultCameraThemeId,
  getNextCameraThemeId,
  type CameraTheme,
} from "./theme";

type CameraThemeContextValue = {
  themeId: CameraThemeId;
  theme: CameraTheme;
  setThemeId: (themeId: CameraThemeId) => void;
  cycleTheme: () => void;
};

const CameraThemeContext = createContext<CameraThemeContextValue | null>(null);

export function CameraThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<CameraThemeId>(defaultCameraThemeId);

  const value = useMemo<CameraThemeContextValue>(
    () => ({
      themeId,
      theme: cameraThemes[themeId],
      setThemeId,
      cycleTheme: () => setThemeId((current) => getNextCameraThemeId(current)),
    }),
    [themeId],
  );

  return (
    <CameraThemeContext.Provider value={value}>
      {children}
    </CameraThemeContext.Provider>
  );
}

export function useCameraTheme() {
  const context = useContext(CameraThemeContext);
  if (!context) {
    throw new Error("useCameraTheme must be used within CameraThemeProvider");
  }
  return context;
}
