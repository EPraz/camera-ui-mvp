import {
  BottomNavigationBar,
  EventFeed,
  Header,
  VideoPlayer,
} from "@/components";
import Timeline from "@/components/timeline/TimeLine";
import {
  BASE_BOTTOM_BAR_HEIGHT,
  EventItemProps,
  events as seedEvents,
} from "@/constants";
import { useWindowSizeClass } from "@/hooks";
import React, { useState } from "react";
import { View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const HomeScreen: React.FC = () => {
  const [allEvents, setAllEvents] = useState(seedEvents);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedEvent = allEvents[selectedIndex];

  const { isExpanded } = useWindowSizeClass();
  const insets = useSafeAreaInsets();
  const mobileBottomPad = BASE_BOTTOM_BAR_HEIGHT + insets.bottom;

  const handleSelectedEvent = (item: EventItemProps) => {
    const i = allEvents.findIndex((e) => e.id === item.id);
    if (i >= 0) setSelectedIndex(i);
    else {
      setAllEvents((prev) => [...prev, item]);
      setSelectedIndex(allEvents.length - 1);
    }
  };

  const handleAddCamera = (newItem: EventItemProps) => {
    setAllEvents((prev) => [...prev, newItem]);
    setSelectedIndex(allEvents.length - 1); // opcional: seleccionar la nueva (ultima)
  };

  const handleDeleteCamera = (id: string) => {
    setAllEvents((prev) => {
      const next = prev.filter((e) => e.id !== id);
      // reajusta selección si borraste el seleccionado
      if (prev[selectedIndex]?.id === id) {
        return next.length
          ? (setSelectedIndex(allEvents.length - 1), next)
          : (setSelectedIndex(allEvents.length - 1), next);
      }
      // mantiene índice coherente
      const idx = next.findIndex((e) => e.id === selectedEvent?.id);
      if (idx >= 0) setSelectedIndex(idx);
      return next;
    });
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % Math.max(allEvents.length, 1));
  };
  const handlePrev = () => {
    setSelectedIndex(
      (prev) =>
        (prev - 1 + Math.max(allEvents.length, 1)) %
        Math.max(allEvents.length, 1)
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white rounded-[12px]">
        <Header
          events={allEvents}
          handleSelectedEvent={handleSelectedEvent}
          selectedEventId={selectedEvent?.id}
          onAddCamera={handleAddCamera}
          onDeleteCamera={handleDeleteCamera}
          onClose={() => {}}
        />

        <View className="flex-1 flex-row">
          {isExpanded && <BottomNavigationBar />}

          <View
            className="flex-1 p-4"
            style={!isExpanded ? { paddingBottom: mobileBottomPad } : undefined}
          >
            <View
              className="flex-1 bg-white rounded-[12px] overflow-hidden shadow-md"
              style={{ elevation: 4 }}
            >
              <VideoPlayer
                selectedEvent={selectedEvent}
                onNext={handleNext}
                onPrev={handlePrev}
              />
              <Timeline />
            </View>
          </View>

          {isExpanded && (
            <EventFeed
              events={allEvents}
              handleSelectedEvent={handleSelectedEvent}
              selectedEventId={selectedEvent?.id}
              onAddCamera={handleAddCamera}
              onDeleteCamera={handleDeleteCamera}
              onClose={() => {}}
            />
          )}
        </View>
      </View>

      {!isExpanded && <BottomNavigationBar />}
    </SafeAreaView>
  );
};

export default HomeScreen;
