// hooks/useWindowSizeClass.ts
import { useWindowDimensions } from "react-native";

/**
 * Window size classes (Material-style):
 * - compact:  < 600
 * - medium:   600–1023
 * - expanded: >= 1024
 */
export const useWindowSizeClass = () => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  let sizeClass: "compact" | "medium" | "expanded";
  if (width >= 1024) sizeClass = "expanded";
  else if (width >= 600) sizeClass = "medium";
  else sizeClass = "compact";

  return {
    width,
    height,
    isPortrait,
    sizeClass,
    isCompact: sizeClass === "compact",
    isMedium: sizeClass === "medium",
    isExpanded: sizeClass === "expanded",
  };
};
