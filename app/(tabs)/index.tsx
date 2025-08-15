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
import { Text, View } from "react-native";
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
    setAllEvents((prev) => {
      const i = prev.findIndex((e) => e.id === item.id);
      if (i >= 0) {
        setSelectedIndex(i);
        return prev;
      }
      // si no existe, lo agregamos y seleccionamos el nuevo
      const next = [...prev, item];
      setSelectedIndex(next.length - 1);
      return next;
    });
  };

  const handleAddCamera = (newItem: EventItemProps) => {
    setAllEvents((prev) => {
      const next = [...prev, newItem];
      setSelectedIndex(next.length - 1); // seleccionar el recién agregado
      return next;
    });
  };

  const handleDeleteCamera = (id: string) => {
    setAllEvents((prev) => {
      const idxToDelete = prev.findIndex((e) => e.id === id);
      if (idxToDelete === -1) return prev;

      const next = prev.filter((e) => e.id !== id);

      if (next.length === 0) {
        setSelectedIndex(0);
        return next;
      }

      // si borramos el seleccionado, elegir vecino “más cercano”
      if (idxToDelete === selectedIndex) {
        const newIdx = Math.min(idxToDelete, next.length - 1); // mismo índice si existe, si no el anterior
        setSelectedIndex(newIdx);
      } else if (idxToDelete < selectedIndex) {
        // si se borró un elemento antes del seleccionado, el índice se corre -1
        setSelectedIndex((prevIdx) => Math.max(prevIdx - 1, 0));
      } // si se borró después, el índice actual sigue válido

      return next;
    });
  };

  const handleNext = () => {
    setSelectedIndex((prev) => {
      const len = Math.max(allEvents.length, 1);
      return allEvents.length ? (prev + 1) % len : 0;
    });
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => {
      const len = Math.max(allEvents.length, 1);
      return allEvents.length ? (prev - 1 + len) % len : 0;
    });
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
              {selectedEvent ? (
                <>
                  <VideoPlayer
                    selectedEvent={selectedEvent}
                    onNext={handleNext}
                    onPrev={handlePrev}
                  />
                  <Timeline />
                </>
              ) : (
                <View className="flex-1 items-center justify-center">
                  <Text className="text-gray-500">No cameras available</Text>
                </View>
              )}
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
