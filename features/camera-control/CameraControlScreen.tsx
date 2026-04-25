import { LinearGradient } from "expo-linear-gradient";
import { Image, LogBox, ScrollView, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useMemo, useState } from "react";
import { CameraThemeProvider, useCameraTheme } from "./CameraThemeContext";
import { CameraMatrix } from "./components/CameraMatrix";
import { CommandMenuDrawer } from "./components/CommandMenuDrawer";
import { CommandRail } from "./components/CommandRail";
import { DashboardHeader } from "./components/DashboardHeader";
import { FeedPanel } from "./components/FeedPanel";
import { FleetStrip } from "./components/FleetStrip";
import { HeroPlayer } from "./components/HeroPlayer";
import { OperationsPanel } from "./components/OperationsPanel";
import { PlaybackStrip } from "./components/PlaybackStrip";
import { allCameras, feedEvents, sites } from "./mockData";

LogBox.ignoreLogs(["props.pointerEvents is deprecated. Use style.pointerEvents"]);

export function CameraControlScreen() {
  return (
    <CameraThemeProvider>
      <CameraControlView />
    </CameraThemeProvider>
  );
}

function CameraControlView() {
  const { theme } = useCameraTheme();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1100;
  const isMobile = width < 820;
  const isTablet = width >= 820 && width < 1100;
  const [activeSiteId, setActiveSiteId] = useState("all");
  const [selectedCameraId, setSelectedCameraId] = useState(allCameras[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    allCameras.forEach((camera) => Image.prefetch(camera.image));
  }, []);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  const visibleCameras = useMemo(() => {
    if (activeSiteId === "all") return allCameras;
    return allCameras.filter((camera) => camera.siteId === activeSiteId);
  }, [activeSiteId]);

  const selectedCamera =
    allCameras.find((camera) => camera.id === selectedCameraId) ?? allCameras[0];
  const selectedSite = sites.find((site) => site.id === selectedCamera.siteId);
  const activeEvents = feedEvents.filter((event) =>
    visibleCameras.some((camera) => camera.id === event.cameraId),
  );

  const alertCount = visibleCameras.filter((camera) => camera.status === "Alert").length;
  const onlineCount = visibleCameras.filter((camera) => camera.status !== "Idle").length;

  const selectSite = (siteId: string) => {
    setActiveSiteId(siteId);
    const firstCamera =
      siteId === "all"
        ? allCameras[0]
        : allCameras.find((camera) => camera.siteId === siteId);
    if (firstCamera) setSelectedCameraId(firstCamera.id);
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: theme.colors.appBg }}>
      <View className={`flex-1 ${isMobile ? "p-2" : "p-3 md:p-5"}`}>
        <View
          className={`flex-1 overflow-hidden ${
            isMobile ? "rounded-[26px]" : "rounded-[30px]"
          }`}
          style={{ backgroundColor: theme.colors.shellBg }}
        >
          <LinearGradient
            colors={theme.colors.shellGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="absolute inset-0"
          />
          <View className="flex-1 flex-row">
            {isDesktop && <CommandRail />}

            <ScrollView
              className="flex-1"
              contentContainerStyle={{
                padding: isMobile ? 12 : 24,
                paddingBottom: isMobile ? 20 : 30,
                gap: isMobile ? 14 : 18,
              }}
              showsVerticalScrollIndicator={false}
            >
              <DashboardHeader
                compact={isMobile}
                showMenuButton={!isDesktop}
                onMenuPress={() => setMenuOpen(true)}
              />

              <FleetStrip
                activeSiteId={activeSiteId}
                onSelectSite={selectSite}
                compact={isMobile}
              />

              <View className={`${isDesktop ? "flex-row" : "flex-col"} gap-4`}>
                <View className="flex-1 gap-4">
                  <HeroPlayer
                    camera={selectedCamera}
                    siteName={selectedSite?.name ?? "All locations"}
                    compact={isMobile}
                  />
                </View>

                <View className={`${isDesktop ? "w-[340px]" : "w-full"} gap-4`}>
                  <FeedPanel events={activeEvents} onSelectCamera={setSelectedCameraId} />
                </View>
              </View>

              <View className={`${isDesktop ? "flex-row" : "flex-col"} gap-4`}>
                <PlaybackStrip cameras={visibleCameras} compact={isMobile} />
                <OperationsPanel
                  alerts={alertCount}
                  online={onlineCount}
                  total={visibleCameras.length}
                  compact={isMobile}
                  tablet={isTablet}
                />
              </View>

              <CameraMatrix
                cameras={visibleCameras}
                selectedCameraId={selectedCamera.id}
                mobile={isMobile}
                onSelectCamera={setSelectedCameraId}
              />
            </ScrollView>
          </View>
        </View>
      </View>

      <CommandMenuDrawer visible={menuOpen} onClose={() => setMenuOpen(false)} />
    </SafeAreaView>
  );
}
