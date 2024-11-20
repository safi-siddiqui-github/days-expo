import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import "@/global.css"

export default function RootLayout() {

  return (
    <>
      <SafeAreaView className='bg-white antialiased flex-1'>
        <Slot />
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}
