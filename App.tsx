import React from 'react';

import {
  useFonts,
  Khula_400Regular,
  Khula_600SemiBold,
  Khula_700Bold,
  Khula_800ExtraBold
} from '@expo-google-fonts/khula';

import Routes from './src/routes';
import { Load } from './src/components/Load';

export default function App() {
  const [fontsLoaded] = useFonts({
    Khula_400Regular,
    Khula_600SemiBold,
    Khula_700Bold,
    Khula_800ExtraBold
  });

  if(!fontsLoaded) return <Load />

  return <Routes />;

}