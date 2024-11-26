import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Images from "@/constants/images"
import { router } from "expo-router";
import { Image } from "expo-image"
import { useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function Page() {

    const [password, setPassword] = useState('');
    const [showPassword, setshowPassword] = useState(false);
    const passwordRef = useRef<TextInput>(null);

    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [showPasswordConfirm, setshowPasswordConfirm] = useState(false);
    const passwordConfirmRef = useRef<TextInput>(null);

    return (
        <>
            <ScrollView className="">
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>

                    <View className="flex px-5 py-5 flex-1 gap-y-10">

                        <View className="h-72 px-5 flex-1 mb-10">
                            <Image source={Images.authForgotPasswordScreenOne} contentFit="contain" style={{ flex: 1 }} />
                        </View>

                        <View className="flex gap-y-5">
                            <Text className="text-4xl font-bold text-center text-blue-700">Reset Password</Text>
                            <Text className="text-center text-base">
                                Don't worry, we've got you covered. Create a new password to get back into your account.
                            </Text>
                        </View>

                        <View className="flex flex-col gap-y-2">

                            <View className="border p-2 rounded-md flex flex-row items-center gap-x-2">

                                <View className="w-8 h-8">
                                    <Image source={Images.authPasswordLockKeyholeIcon} contentFit="contain" style={{ flex: 1 }} />
                                </View>

                                <View className="flex border-l pl-2 flex-1">
                                    <Text className="text-xs font-medium">New Password</Text>
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

                            <View className="border p-2 rounded-md flex flex-row items-center gap-x-2">

                                <View className="w-8 h-8">
                                    <Image source={Images.authPasswordLockIcon} contentFit="contain" style={{ flex: 1 }} />
                                </View>

                                <View className="flex border-l pl-2 flex-1">
                                    <Text className="text-xs font-medium">Confirm Password</Text>
                                    <TextInput
                                        onChangeText={setPasswordConfirm}
                                        ref={passwordConfirmRef}
                                        secureTextEntry={showPasswordConfirm ? false : true}
                                        placeholder="**********"
                                        className="font-medium text-xl"
                                    />
                                </View>

                                {
                                    passwordConfirm &&
                                    <TouchableOpacity
                                        className="w-7 h-7"
                                        onPress={() => {
                                            setshowPasswordConfirm(!showPasswordConfirm);
                                        }}
                                    >
                                        <Image source={showPasswordConfirm ? Images.authEyeIcon : Images.authEyeSlashIcon} contentFit="contain" style={{ flex: 1 }} />
                                    </TouchableOpacity>
                                }

                            </View>



                        </View>

                        <View>
                            <TouchableOpacity onPress={() => { router.replace('/(auth)/authSignInScreen') }}>
                                <View className="p-2 bg-blue-700 rounded-md flex items-center">
                                    <Text className="font-medium text-xl text-white">Reset Password</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { router.replace('/(auth)/authSignInScreen') }}>
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