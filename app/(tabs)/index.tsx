// app/HomeScreen.tsx
import { Header, Sidebar } from "@/components";
import { EventFeed } from "@/components/EventFeed";
import { Timeline } from "@/components/TimeLine";
import { VideoPlayer } from "@/components/VideoPlayer";
import { BASE_BOTTOM_BAR_HEIGHT } from "@/constants";
import { useWindowSizeClass } from "@/hooks";
import React from "react";
import { View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const HomeScreen: React.FC = () => {
  const { isExpanded } = useWindowSizeClass();
  const insets = useSafeAreaInsets();

  const mobileBottomPad = BASE_BOTTOM_BAR_HEIGHT + insets.bottom;
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-gray-100 rounded-[12px]">
        <Header />
        <View className="flex-1 flex-row">
          {/* Left sidebar only takes layout space on md+ */}
          {isExpanded && <Sidebar />}

          <View
            className="flex-1 p-4"
            // Add bottom padding on mobile so content isn't hidden behind bottom bar
            style={!isExpanded ? { paddingBottom: mobileBottomPad } : undefined}
          >
            <View
              className="flex-1 bg-white rounded-[12px] overflow-hidden shadow-md"
              style={{ elevation: 4 }}
            >
              <VideoPlayer />
              <Timeline />
            </View>
          </View>

          {/* Event feed (you may decide to hide this on small screens if needed) */}
          {isExpanded && <EventFeed />}
        </View>
      </View>

      {/* Mobile bottom bar is absolutely positioned; render Sidebar here too */}
      {!isExpanded && <Sidebar />}
    </SafeAreaView>
  );
};

export default HomeScreen;
