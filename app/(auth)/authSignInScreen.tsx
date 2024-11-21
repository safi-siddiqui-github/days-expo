import { View, Text, TouchableOpacity, TextInput, TouchableHighlight } from "react-native";
import Images from "@/constants/images"
import { router } from "expo-router";
import { Image } from "expo-image"
import { KeyboardAwareScrollView, KeyboardToolbar } from 'react-native-keyboard-controller';
import { useRef, useState } from "react";

export default function Page() {

    const [email, setEmail] = useState('');
    const emailRef = useRef<TextInput>(null);

    const [password, setPassword] = useState('');
    const passwordRef = useRef<TextInput>(null);

    return (
        <>
            <KeyboardAwareScrollView
                bottomOffset={62}
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                className="bg-blue-700"
            >
                <View className="flex p-2">

                    <View className="p-10 h-52">
                        <Image source={Images.authImageOne} contentFit="contain" style={{ flex: 1 }} />
                    </View>

                    <View className="flex flex-col gap-y-10 px-5 py-10 bg-white rounded-3xl">

                        <Text className="text-2xl text-center font-semibold">Sign In With Email</Text>

                        <View className="flex gap-y-5">

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
                                            // emailRef?.current?.focus();
                                        }}
                                    >
                                        <Image source={Images.authCrossIcon} contentFit="contain" style={{ flex: 1 }} />
                                    </TouchableOpacity>
                                }

                            </View>

                            <View className="border p-2 rounded-md flex flex-row items-center gap-x-2">

                                <View className="w-8 h-8">
                                    <Image source={Images.authPasswordIcon} contentFit="contain" style={{ flex: 1 }} />
                                </View>

                                <View className="flex border-l pl-2 flex-1">
                                    <Text className="text-xs font-medium">Password</Text>
                                    <TextInput
                                        onChangeText={setPassword}
                                        placeholder="password"
                                        secureTextEntry={true}
                                        className="font-medium text-xl"
                                    />
                                </View>

                                {
                                    password &&
                                    <TouchableOpacity
                                        className="w-7 h-7"
                                        onPress={() => {
                                            // passwordRef?.current?.clear();
                                            setPassword('');
                                            // passwordRef?.current?.focus();
                                        }}
                                    >
                                        <Image source={Images.authCrossIcon} contentFit="contain" style={{ flex: 1 }} />
                                    </TouchableOpacity>
                                }

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
            </KeyboardAwareScrollView >
            {/* <KeyboardToolbar /> */}
        </>
    )
}
