export type CameraThemeId = "light" | "dark" | "neon";

export type CameraThemeTokenGroup = {
  id: CameraThemeId;
  label: string;
  colors: {
    appBg: string;
    shellBg: string;
    surface: string;
    surfaceMuted: string;
    text: string;
    textMuted: string;
    textSubtle: string;
    textInverse: string;
    onLight: string;
    railBg: string;
    railItem: string;
    railIcon: string;
    panel: string;
    panelRaised: string;
    panelText: string;
    panelMuted: string;
    border: string;
    borderInverse: string;
    overlay: string;
    overlaySoft: string;
    glass: string;
    primary: string;
    primaryText: string;
    statusText: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
    green: string;
    amber: string;
    red: string;
    blue: string;
    white: string;
    whiteSoft: string;
    shellGradient: readonly [string, string, string];
    heroGradient: readonly [string, string, string];
    skeletonGradient: readonly [string, string, string];
  };
};

export const cameraThemeTokens = {
  light: {
    id: "light",
    label: "Light",
    colors: {
      appBg: "#07100f",
      shellBg: "#e9eee8",
      surface: "#fbfcf8",
      surfaceMuted: "#eef4ef",
      text: "#07100f",
      textMuted: "#3f4b45",
      textSubtle: "#65716b",
      textInverse: "#ffffff",
      onLight: "#07100f",
      railBg: "#07100f",
      railItem: "rgba(255,255,255,0.08)",
      railIcon: "#dce7e2",
      panel: "#15211e",
      panelRaised: "#101b18",
      panelText: "#ffffff",
      panelMuted: "rgba(255,255,255,0.68)",
      border: "rgba(8,18,16,0.16)",
      borderInverse: "rgba(255,255,255,0.16)",
      overlay: "rgba(0,0,0,0.58)",
      overlaySoft: "rgba(7,16,15,0.06)",
      glass: "rgba(0,0,0,0.45)",
      primary: "#45e1a5",
      primaryText: "#07100f",
      statusText: "#07100f",
      success: "#45e1a5",
      warning: "#ffc567",
      danger: "#ff645f",
      info: "#7ab7ff",
      green: "#45e1a5",
      amber: "#ffc567",
      red: "#ff645f",
      blue: "#7ab7ff",
      white: "#ffffff",
      whiteSoft: "rgba(255,255,255,0.74)",
      shellGradient: ["#edf3ed", "#e7eee8", "#f4f5ef"],
      heroGradient: ["rgba(7,16,15,0.75)", "rgba(7,16,15,0.06)", "rgba(7,16,15,0.82)"],
      skeletonGradient: ["#10211e", "#244f47", "#07100f"],
    },
  },
  dark: {
    id: "dark",
    label: "Dark",
    colors: {
      appBg: "#020706",
      shellBg: "#081210",
      surface: "#111b18",
      surfaceMuted: "#15231f",
      text: "#eef8f2",
      textMuted: "#9aac9f",
      textSubtle: "#6f8176",
      textInverse: "#07100f",
      onLight: "#07100f",
      railBg: "#020706",
      railItem: "rgba(255,255,255,0.08)",
      railIcon: "#dce7e2",
      panel: "#0d1714",
      panelRaised: "#111f1b",
      panelText: "#f5fff9",
      panelMuted: "rgba(245,255,249,0.48)",
      border: "rgba(255,255,255,0.08)",
      borderInverse: "rgba(255,255,255,0.12)",
      overlay: "rgba(0,0,0,0.62)",
      overlaySoft: "rgba(0,0,0,0.14)",
      glass: "rgba(0,0,0,0.52)",
      primary: "#45e1a5",
      primaryText: "#07100f",
      statusText: "#07100f",
      success: "#45e1a5",
      warning: "#ffd36f",
      danger: "#ff6b64",
      info: "#82bdff",
      green: "#45e1a5",
      amber: "#ffd36f",
      red: "#ff6b64",
      blue: "#82bdff",
      white: "#ffffff",
      whiteSoft: "rgba(255,255,255,0.58)",
      shellGradient: ["#081210", "#0a1714", "#050a09"],
      heroGradient: ["rgba(2,7,6,0.78)", "rgba(2,7,6,0.16)", "rgba(2,7,6,0.88)"],
      skeletonGradient: ["#07100f", "#12332b", "#020706"],
    },
  },
  neon: {
    id: "neon",
    label: "Neon",
    colors: {
      appBg: "#02040d",
      shellBg: "#070a13",
      surface: "#121820",
      surfaceMuted: "#1a2230",
      text: "#eafcff",
      textMuted: "#9fb0c1",
      textSubtle: "#6f8296",
      textInverse: "#030711",
      onLight: "#030711",
      railBg: "#090d16",
      railItem: "rgba(21,244,255,0.1)",
      railIcon: "#c7fbff",
      panel: "#101720",
      panelRaised: "#131b29",
      panelText: "#f4fdff",
      panelMuted: "rgba(244,253,255,0.56)",
      border: "rgba(21,244,255,0.16)",
      borderInverse: "rgba(255,255,255,0.12)",
      overlay: "rgba(0,0,0,0.72)",
      overlaySoft: "rgba(21,244,255,0.08)",
      glass: "rgba(5,10,18,0.68)",
      primary: "#15f4ff",
      primaryText: "#030711",
      statusText: "#030711",
      success: "#38f8b1",
      warning: "#ffd166",
      danger: "#ff4d6d",
      info: "#6ea8ff",
      green: "#38f8b1",
      amber: "#ffd166",
      red: "#ff4d6d",
      blue: "#6ea8ff",
      white: "#ffffff",
      whiteSoft: "rgba(234,252,255,0.7)",
      shellGradient: ["#050813", "#101029", "#031321"],
      heroGradient: ["rgba(2,4,13,0.86)", "rgba(21,244,255,0.08)", "rgba(84,16,126,0.28)"],
      skeletonGradient: ["#050813", "#142745", "#3a1058"],
    },
  },
} as const satisfies Record<CameraThemeId, CameraThemeTokenGroup>;

export const cameraTokens = {
  ...cameraThemeTokens.light,
  radius: {
    sm: 12,
    md: 18,
    lg: 24,
    xl: 30,
    pill: 999,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    "2xl": 30,
  },
  shadow: {
    panel: {
      shadowColor: "#07100f",
      shadowOffset: { width: 0, height: 18 },
      shadowOpacity: 0.16,
      shadowRadius: 34,
      elevation: 10,
    },
  },
} as const;

export type CameraTokens = typeof cameraTokens;
