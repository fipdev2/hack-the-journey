
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import SignIn from './src/screens/SignIn';
import { useFonts, Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'
import { THEME } from './src/style/theme'
import Loading from './src/components/Loading';
import React from 'react';
import AuthContextProvider from './src/contexts/Auth';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_700Bold })
  return (
    <NativeBaseProvider theme={THEME} config={config}>
      <AuthContextProvider>

      <StatusBar
        translucent
        backgroundColor={'transparent'}
        style={'light'}
        />
      {fontsLoaded ? <Routes /> : <Loading/>}
      {/* <Loading/> */}
      
        </AuthContextProvider>
    </NativeBaseProvider>
  );
}
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};
