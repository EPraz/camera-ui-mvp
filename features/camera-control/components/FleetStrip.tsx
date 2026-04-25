import { ScrollView, Text, View } from "react-native";
import { useCameraTheme } from "../CameraThemeContext";
import { allCameras, sites } from "../mockData";
import { getStatusColor } from "../theme";
import { LocationCard } from "./LocationCard";

type FleetStripProps = {
  activeSiteId: string;
  onSelectSite: (siteId: string) => void;
  compact?: boolean;
};

export function FleetStrip({
  activeSiteId,
  onSelectSite,
  compact = false,
}: FleetStripProps) {
  const { theme } = useCameraTheme();

  return (
    <View
      className={compact ? "rounded-[24px] p-3" : "rounded-[26px] p-3"}
      style={{ backgroundColor: theme.colors.surface }}
    >
      <View className="mb-3 flex-row items-start justify-between gap-3">
        <View className="flex-1">
          <Text
            className="text-base font-black"
            style={{ color: theme.colors.text }}
          >
            Fleet scope
          </Text>
          <Text
            className="text-xs font-semibold leading-4"
            numberOfLines={compact ? 2 : undefined}
            style={{ color: theme.colors.textMuted }}
          >
            Switch properties without changing the live command view.
          </Text>
        </View>
        <View
          className="rounded-full px-3 py-1.5"
          style={{ backgroundColor: theme.colors.surfaceMuted }}
        >
          <Text
            className="text-xs font-black"
            style={{ color: theme.colors.textMuted }}
          >
            {allCameras.length} streams
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, paddingRight: 8 }}
      >
        <LocationCard
          active={activeSiteId === "all"}
          label="All locations"
          meta="Unified view"
          detail={`${allCameras.length} cameras`}
          signal={90}
          tone={theme.colors.info}
          onPress={() => onSelectSite("all")}
          compact={compact}
        />
        {sites.map((site) => (
          <LocationCard
            key={site.id}
            active={activeSiteId === site.id}
            label={site.name}
            meta={`${site.kind} - ${site.location}`}
            detail={site.risk}
            signal={site.signal}
            tone={getStatusColor(theme, site.status)}
            onPress={() => onSelectSite(site.id)}
            compact={compact}
          />
        ))}
      </ScrollView>
    </View>
  );
}
