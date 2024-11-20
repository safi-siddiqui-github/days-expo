import { View, Text, TouchableOpacity } from "react-native";
import Images from "@/constants/images"
import { router } from "expo-router";
import { Image } from "expo-image"

export default function Page() {
    return (
        <View className="flex flex-1 gap-y-10 justify-between bg-blue-700">

            <View className="flex-1 px-5">
                <Image source={Images.authImageOne} contentFit="contain" style={{ flex: 1 }} />
            </View>



            <View className="flex flex-col gap-y-10 px-5 pb-5 pt-10 bg-white rounded-t-3xl">

                <Text className="text-2xl text-center font-semibold">Sign In With Email</Text>


                <View className="flex gap-x-5">

                    <View className="border p-2 rounded-md flex flex-row items-center gap-x-2">

                        <View className="w-8 h-8">
                            <Image source={Images.authEmailIcon} contentFit="contain" style={{ flex: 1 }} />
                        </View>

                        <View className="flex gap-y-0 border-l pl-2">
                            <Text className="text-xs font-medium">Email Address</Text>
                            <Text className="font-medium text-xl">days@gmail.com</Text>
                            
                        </View>

                    </View>

                </View>

                <View>
                    <TouchableOpacity onPress={() => { }}>
                        <View className="p-2 bg-blue-700 rounded-md flex items-center">
                            <Text className="font-medium text-xl text-white">Sign In</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <View className="p-2 rounded-md flex flex-row items-center gap-x-1 justify-center">
                            <Text className="font-medium text-xl">Don't have an account?</Text>
                            <Text className="font-medium text-xl text-blue-700">Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}