import { View, Text, Image, TouchableOpacity } from "react-native";
import Images from "@/constants/images"
import { router } from "expo-router";

export default function Page() {
    return (
        <View className="flex px-5 py-5 flex-1 gap-y-10 justify-between">

            <View className="flex-1">
                <Image source={Images.onBoardingTwoImage} className="flex-1 w-full h-full object-contain" />
            </View>

            <View className="flex gap-y-5">
                <Text className="text-4xl font-bold text-center text-blue-700">Secure Shopping</Text>
                <Text className="text-center text-base">
                    Fast, secure checkout and easy returns. Enjoy a smooth shopping experience with secure payments and hassle-free returns
                </Text>
            </View>

            <View className="flex gap-y-2">
                <TouchableOpacity onPress={() => { router.navigate("/(onBoarding)/screenThree") }}>
                    <View className="p-2 bg-blue-700 rounded-md">
                        <Text className="text-white text-center font-medium text-xl">Next</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { router.navigate("/(onBoarding)/screenOne") }}>
                    <View className="p-2 border border-blue-700 rounded-md">
                        <Text className="text-blue-700 text-center font-medium text-xl">Skip</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}