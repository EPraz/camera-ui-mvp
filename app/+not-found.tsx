import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not found" }} />
      <View className="flex-1 items-center justify-center bg-white px-6">
        <Text className="text-2xl font-black text-black">Screen not found</Text>
        <Link href="/" className="mt-4 text-sm font-bold text-black/60">
          Return to camera control
        </Link>
      </View>
    </>
  );
}
