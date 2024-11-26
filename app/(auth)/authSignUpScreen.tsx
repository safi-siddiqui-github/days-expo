import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Images from "@/constants/images"
import { router } from "expo-router";
import { Image } from "expo-image"
import { useRef, useState } from "react";
import { KeyboardAwareScrollView, KeyboardToolbar } from "react-native-keyboard-controller";

export default function Page() {

    const [name, setName] = useState('');
    const nameRef = useRef<TextInput>(null);

    const [email, setEmail] = useState('');
    const emailRef = useRef<TextInput>(null);

    const [password, setPassword] = useState('');
    const [showPassword, setshowPassword] = useState(false);
    const passwordRef = useRef<TextInput>(null);

    return (
        <>
            <ScrollView className="bg-blue-700">
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>

                    <View className="flex-1 flex px-2 pb-10 pt-16">

                        <View className="h-52 px-5 flex-1 mb-10">
                            <Image source={Images.authImageOne} contentFit="contain" style={{ flex: 1 }} />
                        </View>

                        <View className="flex flex-col gap-y-10 px-5 pb-5 pt-10 bg-white rounded-lg mt-5">

                            <Text className="text-3xl text-center font-semibold">Sign Up With Email</Text>

                            <View className="flex gap-y-5">

                                <View className="border p-2 rounded-md flex flex-row items-center gap-x-2">

                                    <View className="w-8 h-8">
                                        <Image source={Images.authUserIcon} contentFit="contain" style={{ flex: 1 }} />
                                    </View>

                                    <View className="flex border-l pl-2 flex-1">
                                        <Text className="text-xs font-medium">Name</Text>
                                        <TextInput
                                            onChangeText={setName}
                                            ref={nameRef}
                                            placeholder="Happy Days"
                                            className="font-medium text-xl"
                                        />
                                    </View>

                                    {
                                        name &&
                                        <TouchableOpacity
                                            className="w-7 h-7"
                                            onPress={() => {
                                                nameRef?.current?.clear();
                                                setName('');
                                                nameRef?.current?.focus();
                                            }}
                                        >
                                            <Image source={Images.authCrossIcon} contentFit="contain" style={{ flex: 1 }} />
                                        </TouchableOpacity>
                                    }

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

                                <View className="border p-2 rounded-md flex flex-row items-center gap-x-2">

                                    <View className="w-8 h-8">
                                        <Image source={Images.authPasswordIcon} contentFit="contain" style={{ flex: 1 }} />
                                    </View>

                                    <View className="flex border-l pl-2 flex-1">
                                        <Text className="text-xs font-medium">Password</Text>
                                        <TextInput
                                            onChangeText={setPassword}
                                            ref={passwordRef}
                                            secureTextEntry={showPassword ? false : true}
                                            placeholder="**********"
                                            className="font-medium text-xl"
                                        />
                                    </View>

                                    {
                                        password &&
                                        <TouchableOpacity
                                            className="w-7 h-7"
                                            onPress={() => {
                                                setshowPassword(!showPassword);
                                            }}
                                        >
                                            <Image source={showPassword ? Images.authEyeIcon : Images.authEyeSlashIcon} contentFit="contain" style={{ flex: 1 }} />
                                        </TouchableOpacity>
                                    }

                                </View>

                            </View>

                            <View>
                                <TouchableOpacity onPress={() => { router.navigate('/(auth)/authEmailVerificationScreenOne') }}>
                                    <View className="p-2 bg-blue-700 rounded-md flex items-center">
                                        <Text className="font-medium text-xl text-white">Sign Up</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { router.navigate('/(auth)/authSignInScreen') }}>
                                    <View className="p-2 rounded-md flex flex-row items-center gap-x-1 justify-center">
                                        <Text className="font-medium text-xl">Already have an account?</Text>
                                        <Text className="font-medium text-xl text-blue-700">Sign In</Text>
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
