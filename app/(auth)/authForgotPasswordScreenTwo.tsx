import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Images from "@/constants/images"
import { router } from "expo-router";
import { Image } from "expo-image"
import { useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function Page() {

    const [code, setCode] = useState('');
    const codeRef = useRef<TextInput>(null);

    return (
        <>
            <ScrollView className="">
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>

                    <View className="flex px-5 py-5 flex-1 gap-y-10">

                        <View className="h-72 px-5 flex-1 mb-10">
                            <Image source={Images.authForgotPasswordScreenOne} contentFit="contain" style={{ flex: 1 }} />
                        </View>

                        <View className="flex gap-y-5">
                            <Text className="text-4xl font-bold text-center text-blue-700">Verify Code</Text>
                            <Text className="text-center text-base">
                                We have sent a verification code to your email, please enter it below to reset your password.
                            </Text>
                        </View>

                        <View className="border p-2 rounded-md flex flex-row items-center gap-x-2">

                            <View className="w-8 h-8">
                                <Image source={Images.authPasswordXIcon} contentFit="contain" style={{ flex: 1 }} />
                            </View>

                            <View className="flex border-l pl-2 flex-1">
                                <Text className="text-xs font-medium">Verify Code</Text>
                                <TextInput
                                    onChangeText={setCode}
                                    ref={codeRef}
                                    placeholder="**********"
                                    className="font-medium text-xl"
                                />
                            </View>

                            {
                                code &&
                                <TouchableOpacity
                                    className="w-7 h-7"
                                    onPress={() => {
                                        codeRef?.current?.clear();
                                        setCode('');
                                        codeRef?.current?.focus();
                                    }}
                                >
                                    <Image source={Images.authCrossIcon} contentFit="contain" style={{ flex: 1 }} />
                                </TouchableOpacity>
                            }

                        </View>

                        <View className="flex flex-row justify-center">
                            <Text>Code Expires in </Text>
                            <Text className="">00:45</Text>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => { router.replace('/(auth)/authForgotPasswordScreenThree') }}>
                                <View className="p-2 bg-blue-700 rounded-md flex items-center">
                                    <Text className="font-medium text-xl text-white">Verify Code</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { }}>
                                <View className="p-2 rounded-md flex flex-row items-center gap-x-1 justify-center">
                                    <Text className="font-medium text-xl">Didn't recieve code?</Text>
                                    <Text className="font-medium text-xl text-blue-700">Resend</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </KeyboardAwareScrollView>
            </ScrollView>

        </>
    )
}