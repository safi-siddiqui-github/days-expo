import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import 'react-native-reanimated';
import "@/global.css"

export default function RootLayout() {

  return (
    <KeyboardProvider>
      <SafeAreaView className='bg-white antialiased flex-1'>
        <Slot />
      </SafeAreaView>
      <StatusBar style="dark" />
    </KeyboardProvider>
  );
}
