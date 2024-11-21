import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-reanimated';
import "@/global.css"
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function RootLayout() {

  return (
    <>
      <KeyboardProvider>
        <SafeAreaView className='bg-white antialiased flex-1'>
          <Slot />
        </SafeAreaView>
      </KeyboardProvider>
      <StatusBar style="dark" />
    </>
  );
}
