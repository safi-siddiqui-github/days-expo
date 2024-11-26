import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Images from "@/constants/images"
import { router } from "expo-router";
import { Image } from "expo-image"
import { useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function Page() {

    const [email, setEmail] = useState('');
    const emailRef = useRef<TextInput>(null);

    return (
        <>
            <ScrollView className="">
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>

                    <View className="flex px-5 py-5 flex-1 gap-y-10">

                        <View className="h-72 px-5 flex-1 mb-10">
                            <Image source={Images.authForgotPasswordScreenOne} contentFit="contain" style={{ flex: 1 }} />
                        </View>

                        <View className="flex gap-y-5">
                            <Text className="text-4xl font-bold text-center text-blue-700">Forgot Password</Text>
                            <Text className="text-center text-base">
                                Enter your email and we will send you a code to reset your password.
                            </Text>
                        </View>

                        <View className="border p-2 rounded-md flex flex-row items-center gap-x-2">

                            <View className="w-8 h-8">
                                <Image source={Images.authEmailIcon} contentFit="contain" style={{ flex: 1 }} />
                            </View>

                            <View className="flex border-l pl-2 flex-1">
                                <Text className="text-xs font-medium">Email Address</Text>
                                <TextInput
                                    onChangeText={setEmail}
                                    ref={emailRef}
                                    placeholder="days@gmail.com"
                                    className="font-medium text-xl"
                                />
                            </View>

                            {
                                email &&
                                <TouchableOpacity
                                    className="w-7 h-7"
                                    onPress={() => {
                                        emailRef?.current?.clear();
                                        setEmail('');
                                        emailRef?.current?.focus();
                                    }}
                                >
                                    <Image source={Images.authCrossIcon} contentFit="contain" style={{ flex: 1 }} />
                                </TouchableOpacity>
                            }

                        </View>

                        <View>
                            <TouchableOpacity onPress={() => { router.navigate('/(auth)/authForgotPasswordScreenTwo') }}>
                                <View className="p-2 bg-blue-700 rounded-md flex items-center">
                                    <Text className="font-medium text-xl text-white">Send Code</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { router.navigate('/(auth)/authSignInScreen') }}>
                                <View className="p-2 rounded-md flex flex-row items-center gap-x-1 justify-center">
                                    <Text className="font-medium text-xl">Know your password?</Text>
                                    <Text className="font-medium text-xl text-blue-700">Sign In</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </KeyboardAwareScrollView>
            </ScrollView>

        </>
    )
}