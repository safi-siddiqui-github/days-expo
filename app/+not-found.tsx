import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View className='flex flex-1 items-center justify-center gap-y-2'>
      <Text className='text-3xl'>404</Text>
      <Text className='text-2xl'>Page Not found</Text>
      <Link href={'/'} className='font-medium text-blue-500'>Go to home</Link>
    </View>
  );
}
