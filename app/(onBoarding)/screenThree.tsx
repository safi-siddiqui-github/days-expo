import { View, Text, Image, TouchableOpacity } from "react-native";
import Images from "@/constants/images"
import { router } from "expo-router";

export default function Page() {
    return (
        <View className="flex px-5 py-5 flex-1 gap-y-10 justify-between">

            <View className="flex-1">
                <Image source={Images.onBoardingThreeImage} className="flex-1 w-full h-full object-contain" />
            </View>

            <View className="flex gap-y-5">
                <Text className="text-4xl font-bold text-center text-blue-700">Enjoy Best Picks</Text>
                <Text className="text-center text-base">
                    Tailored picks based on your style and preferences. Get customized suggestions that make shopping faster and more enjoyable.
                </Text>
            </View>

            <View className="flex gap-y-2">
                <TouchableOpacity onPress={() => { }}>
                    <View className="p-2 bg-blue-700 rounded-md">
                        <Text className="text-white text-center font-medium text-xl">Get Started</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { router.navigate("/(onBoarding)/screenTwo") }}>
                    <View className="p-2 border border-blue-700 rounded-md">
                        <Text className="text-blue-700 text-center font-medium text-xl">Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}