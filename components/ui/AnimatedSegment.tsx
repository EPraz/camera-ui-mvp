// components/ui/AnimatedSegment.tsx
import React from "react";
import {
  Animated,
  LayoutChangeEvent,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

type Orientation = "horizontal" | "vertical";
type Item = { id: string };

export type AnimatedSegmentProps<T extends Item> = {
  items: T[];
  activeId: string;
  onChange: (id: string) => void;
  orientation?: Orientation; // "horizontal" for tabs, "vertical" for sidebar
  containerClassName?: string; // wrapper classes
  itemClassName?: string; // touchable pill classes
  itemsGapClassName?: string; // gap between items (e.g., "gap-6" or "gap-[28px]")
  renderItem: (item: T, isActive: boolean) => React.ReactNode;
  scrollable?: boolean; // use horizontal ScrollView (mobile tabs)
  duration?: number; // animation duration
};

/**
 * AnimatedSegment: sliding pill indicator for horizontal tabs or vertical menus.
 * - Measures each item via onLayout and animates indicator position/size accordingly.
 * - Works with Tailwind/NativeWind classes for layout, spacing, and shapes.
 */
export const AnimatedSegment = <T extends Item>({
  items,
  activeId,
  onChange,
  orientation = "horizontal",
  containerClassName = "",
  itemClassName = "px-4 py-2 rounded-full",
  itemsGapClassName = "gap-2",
  renderItem,
  scrollable = false,
  duration = 220,
}: AnimatedSegmentProps<T>) => {
  const [measures, setMeasures] = React.useState<
    Record<string, { x: number; y: number; width: number; height: number }>
  >({});

  // Animated values for indicator position & size
  const indicatorPos = React.useRef(new Animated.Value(0)).current; // left or top
  const indicatorSize = React.useRef(new Animated.Value(0)).current; // width or height
  const scrollRef = React.useRef<ScrollView | null>(null);

  const isHorizontal = orientation === "horizontal";

  // Capture layout for each item
  const onItemLayout =
    (id: string) =>
    (e: LayoutChangeEvent): void => {
      const { x, y, width, height } = e.nativeEvent.layout;
      setMeasures((prev) => ({ ...prev, [id]: { x, y, width, height } }));
    };

  // Animate indicator to the active item
  const animateTo = React.useCallback(
    (id: string) => {
      const m = measures[id];
      if (!m) return;
      const toPos = isHorizontal ? m.x : m.y;
      const toSize = isHorizontal ? m.width : m.height;

      Animated.parallel([
        Animated.timing(indicatorPos, {
          toValue: toPos,
          duration,
          useNativeDriver: false,
        }),
        Animated.timing(indicatorSize, {
          toValue: toSize,
          duration,
          useNativeDriver: false,
        }),
      ]).start();

      // Auto-scroll for horizontal lists (mobile)
      if (scrollable && isHorizontal && scrollRef.current) {
        scrollRef.current.scrollTo({
          x: Math.max(toPos - 24, 0),
          animated: true,
        });
      }
    },
    [duration, indicatorPos, indicatorSize, isHorizontal, measures, scrollable]
  );

  React.useEffect(() => {
    animateTo(activeId);
  }, [activeId, measures, animateTo]);

  const Indicator = (
    <Animated.View
      // Inline styles for broad compatibility (RN + web)
      style={[
        {
          position: "absolute",
          backgroundColor: "black",
          borderRadius: 9999,
        },
        isHorizontal
          ? { left: indicatorPos, width: indicatorSize, top: 0, bottom: 0 }
          : { top: indicatorPos, height: indicatorSize, left: 0, right: 0 },
      ]}
    />
  );

  const ItemRow = (
    <View
      className={`relative ${isHorizontal ? "flex-row" : "flex-col"} ${itemsGapClassName}`}
    >
      {Indicator}
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <TouchableOpacity
            key={item.id}
            className={itemClassName}
            activeOpacity={0.85}
            onLayout={onItemLayout(item.id)}
            onPress={() => onChange(item.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
          >
            {renderItem(item, isActive)}
          </TouchableOpacity>
        );
      })}
    </View>
  );

  if (scrollable && isHorizontal) {
    return (
      <ScrollView
        ref={scrollRef}
        horizontal
        className={containerClassName}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
      >
        {ItemRow}
      </ScrollView>
    );
  }

  return <View className={containerClassName}>{ItemRow}</View>;
};

// Default export + named export for flexible imports
export default AnimatedSegment;
