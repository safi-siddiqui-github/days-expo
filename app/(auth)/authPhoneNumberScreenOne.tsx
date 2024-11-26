import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Images from "@/constants/images"
import { Link, router } from "expo-router";
import { Image } from "expo-image"
import { useRef, useState } from "react";
import { KeyboardAwareScrollView, KeyboardToolbar } from "react-native-keyboard-controller";

export default function Page() {

    const [countryCode, setCountryCode] = useState('');
    const countryCodeRef = useRef<TextInput>(null);

    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneNumberRef = useRef<TextInput>(null);

    return (
        <>
            <ScrollView className="bg-blue-700">
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>

                    <View className="flex-1 flex px-2 pb-10 pt-20">

                        <View className="h-52 px-5 flex-1 mb-10">
                            <Image source={Images.authImageOne} contentFit="contain" style={{ flex: 1 }} />
                        </View>

                        <View className="flex flex-col gap-y-10 px-5 pb-5 pt-10 bg-white rounded-lg mt-5">

                            <Text className="text-3xl text-center font-semibold">Sign In With Phone</Text>

                            <View className="flex gap-y-5">

                                <View className="border p-2 rounded-md flex flex-row items-center gap-x-2">

                                    <View className="w-8 h-8">
                                        <Image source={Images.authCountryCodeIcon} contentFit="contain" style={{ flex: 1 }} />
                                    </View>

                                    <View className="flex border-l pl-2 flex-1">
                                        <Text className="text-xs font-medium">Country Code</Text>
                                        <TextInput
                                            onChangeText={setCountryCode}
                                            ref={countryCodeRef}
                                            placeholder="0092"
                                            className="font-medium text-xl"
                                        />
                                    </View>

                                    {
                                        countryCode &&
                                        <TouchableOpacity
                                            className="w-7 h-7"
                                            onPress={() => {
                                                countryCodeRef?.current?.clear();
                                                setCountryCode('');
                                                countryCodeRef?.current?.focus();
                                            }}
                                        >
                                            <Image source={Images.authCrossIcon} contentFit="contain" style={{ flex: 1 }} />
                                        </TouchableOpacity>
                                    }

                                </View>

                                <View className="border p-2 rounded-md flex flex-row items-center gap-x-2">

                                    <View className="w-8 h-8">
                                        <Image source={Images.authPhoneIcon} contentFit="contain" style={{ flex: 1 }} />
                                    </View>

                                    <View className="flex border-l pl-2 flex-1">
                                        <Text className="text-xs font-medium">Phone Number</Text>
                                        <TextInput
                                            onChangeText={setPhoneNumber}
                                            ref={phoneNumberRef}
                                            placeholder="3117737230"
                                            className="font-medium text-xl"
                                        />
                                    </View>

                                    {
                                        phoneNumber &&
                                        <TouchableOpacity
                                            className="w-7 h-7"
                                            onPress={() => {
                                                phoneNumberRef?.current?.clear();
                                                setPhoneNumber('');
                                                phoneNumberRef?.current?.focus();
                                            }}
                                        >
                                            <Image source={Images.authCrossIcon} contentFit="contain" style={{ flex: 1 }} />
                                        </TouchableOpacity>
                                    }

                                </View>

                            </View>

                            <View>
                                <TouchableOpacity onPress={() => { router.navigate('/(auth)/authPhoneNumberScreenTwo') }}>
                                    <View className="p-2 bg-blue-700 rounded-md flex items-center">
                                        <Text className="font-medium text-xl text-white">Sign In</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { router.navigate('/(auth)/authSignUpScreen') }}>
                                    <View className="p-2 rounded-md flex flex-row items-center gap-x-1 justify-center">
                                        <Text className="font-medium text-xl">Don't have an account?</Text>
                                        <Text className="font-medium text-xl text-blue-700">Sign Up</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </KeyboardAwareScrollView>
            </ScrollView >
        </>
    )
}
