import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from './src/style/theme'

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>

    </NativeBaseProvider>
  );
}
