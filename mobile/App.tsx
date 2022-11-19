import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import Explore from './src/screens/Explore';
import { useFonts,
   Ubuntu_300Light,
   Ubuntu_400Regular,
   Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'

import { THEME } from './src/style/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_700Bold })
  return (
    
    <NativeBaseProvider theme={THEME} config={config}>
      <Explore/>
      
      
    </NativeBaseProvider>
  );
}

const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};
