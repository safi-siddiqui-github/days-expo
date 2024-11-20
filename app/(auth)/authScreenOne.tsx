import { View, Text, TouchableOpacity } from "react-native";
import Images from "@/constants/images"
import { router } from "expo-router";
import { Image } from "expo-image"

export default function Page() {
    return (
        <View className="flex px-5 py-5 flex-1 gap-y-10 justify-between bg-blue-700">

            <Image source={Images.authImageOne} contentFit="contain" style={{ flex: 1 }} />

            <View className="flex flex-col gap-y-5">

                <Text className="text-xl text-white text-center font-medium">Continue With Social</Text>

                <TouchableOpacity onPress={() => { }}>
                    <View className="p-2 bg-white rounded-md">
                        <View className="flex flex-row gap-x-2 items-center justify-center">
                            <View className="w-8 h-8">
                                <Image source={Images.authFacebookIcon} contentFit="contain" style={{ flex: 1 }} />
                            </View>
                            <Text className="font-medium text-xl">Continue With Facebook</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <View className="p-2 bg-white rounded-md">
                        <View className="flex flex-row gap-x-2 items-center justify-center">
                            <View className="w-8 h-8">
                                <Image source={Images.authGoogleIcon} contentFit="contain" style={{ flex: 1 }} />
                            </View>
                            <Text className="font-medium text-xl">Continue With Google</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <View className="p-2 bg-white rounded-md">
                        <View className="flex flex-row gap-x-2 items-center justify-center">
                            <View className="w-8 h-8">
                                <Image source={Images.authAppleIcon} contentFit="contain" style={{ flex: 1 }} />
                            </View>
                            <Text className="font-medium text-xl">Continue With Apple</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>

            <View className="flex flex-col gap-y-5">

                <Text className="text-xl text-white text-center font-medium">Continue With Personal</Text>

                <TouchableOpacity onPress={() => { router.navigate('/(auth)/authSignInScreen') }}>
                    <View className="p-2 bg-white rounded-md">
                        <View className="flex flex-row gap-x-2 items-center justify-center">
                            <View className="w-8 h-8">
                                <Image source={Images.authEmailIcon} contentFit="contain" style={{ flex: 1 }} />
                            </View>
                            <Text className="font-medium text-xl">Continue With Email</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <View className="p-2 bg-white rounded-md">
                        <View className="flex flex-row gap-x-2 items-center justify-center">
                            <View className="w-8 h-8">
                                <Image source={Images.authPhoneIcon} contentFit="contain" style={{ flex: 1 }} />
                            </View>
                            <Text className="font-medium text-xl">Continue With Phone</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}