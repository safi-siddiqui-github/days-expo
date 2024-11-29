import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Page() {
  return (
    <View className="p-5 flex gap-y-2">
      <Text className="text-xl">Home</Text>
      <Link className="border p-2 rounded" href={"/(onBoarding)/onBoardingScreenOne"}>On Boarding</Link>
      <Link className="border p-2 rounded" href={"/(auth)/authScreenOne"}>Auth</Link>
      <Link className="border p-2 rounded" href={"/(home)/homeScreenOne"}>Home</Link>
    </View>
  )
}