
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import SignIn from './src/screens/SignIn';
import { useFonts, Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'
import { THEME } from './src/style/theme'
import Loading from './src/components/Loading';
import ExploreJapan from './src/screens/ExploreJapan';
import ExploreFrance from './src/screens/ExploreFrance';

export default function App() {
  const [fontsLoaded] = useFonts({ Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_700Bold })
  return (
    <NativeBaseProvider theme={THEME} config={config}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        style={'light'}
      />
      {fontsLoaded ? <ExploreFrance /> : <Loading/>}
      {/* <Loading/> */}
      
    </NativeBaseProvider>
  );
}
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};
