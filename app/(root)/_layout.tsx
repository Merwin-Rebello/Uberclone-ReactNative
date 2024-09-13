
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';


const Layout = () => {
  

  return (
    
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      </Stack>
    
  );
}
export default Layout;