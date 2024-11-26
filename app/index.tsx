import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Page() {
  return (
    <View className="p-5 flex gap-y-5">
      <Text className="text-xl">Home</Text>
      <Link href={"/(onBoarding)/onBoardingScreenOne"}>On Boarding</Link>
      <Link href={"/(auth)/authScreenOne"}>Auth</Link>
    </View>
  )
}