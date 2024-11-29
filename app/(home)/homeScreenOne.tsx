import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from "react-native";
import Images from "@/constants/images"
import { router } from "expo-router";
import { Image } from "expo-image"
import { useRef, useState } from "react";
import PagerView from 'react-native-pager-view';

export default function Page() {

    const categoryData = [
        {
            id: 'ab98ef47-02c4-4b98-bc76-08d58cf5ec24',
            title: 'Winter Specials',
            image: Images.homeCategoryWinter,
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Men',
            image: Images.homeCategoryMen,
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Women',
            image: Images.homeCategoryWomen,
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Kids',
            image: Images.homeCategoryKids,
        },
        {
            id: '12ecbfb2-1d4f-4b6d-b4e4-73bc47df7e5d',
            title: 'Shoes',
            image: Images.homeCategoryShoes,
        },
        {
            id: 'ac4efc9e-12d6-43c5-a4b6-67353abb28cf',
            title: 'Bags',
            image: Images.homeCategoryBags,
        },
        {
            id: '62e55ac7-654c-4c71-9f9e-d61267cd2e78',
            title: 'Electronics',
            image: Images.homeCategoryElectronics,
        },
        {
            id: 'd56c8b68-93cf-4937-a24b-4f89acbe35f2',
            title: 'Gadgets',
            image: Images.homeCategoryGadgets,
        },
        {
            id: 'a4e8c3f4-789b-46c8-8a53-1d2f34df89a6',
            title: 'Furniture',
            image: Images.homeCategoryFurniture,
        },
        {
            id: 'c498a8cf-3dbf-4234-b8f3-a45d89c3e85d',
            title: 'Skincare',
            image: Images.homeCategorySkincare,
        },
        {
            id: 'b134fc56-74c8-4f45-b8f3-d6f3bc45a28d',
            title: 'Makeup',
            image: Images.homeCategoryMakeup,
        },
    ];

    return (
        <ScrollView>

            <View className="flex-1 flex flex-col gap-y-8 p-5">

                {/* Header */}
                <View className="flex flex-row gap-x-2">

                    <TouchableOpacity onPress={() => { }} className="flex-1">
                        <View className="rounded-md flex flex-row items-center bg-slate-100">
                            <View className="w-11 h-11 p-2">
                                <Image source={Images.homeSearchIcon} contentFit="contain" style={{ flex: 1 }} />
                            </View>

                            <Text className="">Search for products</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }} className="">
                        <View className="relative h-11 w-11 p-1.5">
                            <Image source={Images.homeBellIcon} contentFit="contain" style={{ flex: 1 }} />
                            <View className="w-5 h-5 bg-blue-700 rounded-full absolute top-0 right-0 flex items-center justify-center border border-white">
                                <Text className="text-white font-medium text-xs text-center">99</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }} className="">
                        <View className="relative h-11 w-11 p-1.5">
                            <Image source={Images.homeCartIcon} contentFit="contain" style={{ flex: 1 }} />
                            <View className="w-5 h-5 bg-blue-700 rounded-full absolute top-0 right-0 flex items-center justify-center border border-white">
                                <Text className="text-white font-medium text-xs text-center">99</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

                {/* Banner */}
                <View className="h-56 bg-slate-50 rounded-md overflow-hidden">
                    <PagerView style={{ flex: 1 }} initialPage={0}>

                        <View key={1} className="flex-1">

                            <View className="flex-1 flex flex-row">

                                <View className="flex flex-col gap-y-1 flex-1 justify-center pl-1">
                                    <Text className="text-3xl font-semibold text-blue-700 text-center">Winter Sale</Text>
                                    <Text className="text-xl font-medium text-center">Up to 50% Off!</Text>
                                    <Text className="text-xs text-center">
                                        Hurry, these deals won't last forever. Refresh your wardrobe today.
                                    </Text>
                                </View>

                                <View className="flex-1">
                                    <Image source={Images.homeBannerOne} contentFit="contain" style={{ flex: 1 }} />
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => { }}>
                                <View className="bg-blue-700 py-2">
                                    <Text className="font-medium text-white text-center">Shop Now</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View key={2} className="flex-1">

                            <View className="flex-1 flex flex-row">

                                <View className="flex flex-col gap-y-1 flex-1 justify-center pl-1">
                                    <Text className="text-3xl font-semibold text-blue-700 text-center">Fresh Styles</Text>
                                    <Text className="text-xl font-medium text-center">Just for You!</Text>
                                    <Text className="text-xs text-center">
                                        Shop the latest trends and elevate your look with these exclusive designs.
                                    </Text>
                                </View>

                                <View className="flex-1">
                                    <Image source={Images.homeBannerTwo} contentFit="contain" style={{ flex: 1 }} />
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => { }}>
                                <View className="bg-blue-700 py-2">
                                    <Text className="font-medium text-white text-center">Explore Now</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View key={3} className="flex-1">

                            <View className="flex-1 flex flex-row">

                                <View className="flex flex-col gap-y-1 flex-1 justify-center pl-1">
                                    <Text className="text-3xl font-semibold text-blue-700 text-center">Days Deals</Text>
                                    <Text className="text-xl font-medium text-center">Best Awwards</Text>
                                    <Text className="text-xs text-center">
                                        Sign up today and make every shopping day special with your VIP pass.
                                    </Text>
                                </View>

                                <View className="flex-1">
                                    <Image source={Images.homeBannerThree} contentFit="contain" style={{ flex: 1 }} />
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => { }}>
                                <View className="bg-blue-700 py-2">
                                    <Text className="font-medium text-white text-center">Explore Now</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </PagerView>

                </View>

                {/* Category */}
                <View className="flex gap-y-5">
                    <View className="flex flex-row justify-between">
                        <Text className="font-medium text-lg">Shop By Category</Text>
                        <Text>View All</Text>
                    </View>

                    <FlatList
                        horizontal={true}
                        data={categoryData}
                        renderItem={({ item }) => (
                            <View className="flex items-center mr-2">
                                <View className="bg-slate-50 rounded-full w-20 h-20">
                                    <Image source={item.image} contentFit="contain" style={{ flex: 1 }} />
                                </View>
                                <Text className="font-medium text-sm">{item.title}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />

                </View>

                {/* Trending */}
                <View className="flex gap-y-5">
                    <View className="flex flex-row justify-between">
                        <Text className="font-medium text-lg">Trending Now</Text>
                        <Text>View All</Text>
                    </View>

                    <View className="border">
                        <View className="bg-slate-50 rounded-md w-44 h-44">
                            {/* <Image source={item.image} contentFit="contain" style={{ flex: 1 }} /> */}
                        </View>
                    </View>

                </View>

            </View>

        </ScrollView>
    )
}