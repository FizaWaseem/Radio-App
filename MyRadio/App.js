import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { AppLoading } from 'expo';
import {useFonts} from 'expo-font';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { Header } from './shared/Header';
import { StatusBar } from 'expo-status-bar';

import * as firebase from 'firebase'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDr4bYb8DhB_f9ckmVYIn4qUp_kILcNnRU",
    authDomain: "myradio-5fdbf.firebaseapp.com",
    databaseURL: "https://myradio-5fdbf.firebaseio.com",
    projectId: "myradio-5fdbf",
    storageBucket: "myradio-5fdbf.appspot.com",
    messagingSenderId: "944316052622",
    appId: "1:944316052622:web:85bb2e55cb4c57ee0545df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/font/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./assets/font/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./assets/font/Montserrat-Medium.ttf')
  });
  const scheme =useColorScheme();
  const MyTheme = {
   dark: false,
   colors: {
    
     card: 'rgb(61, 44, 112 )',
     text: 'white',
     border: 'rgb(61, 65, 98)',
     notification: 'rgb(255, 69, 58)',
   },
 };

 

if (!fontsLoaded) {
  return <AppLoading />;
} else {
  return (
 
<AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
      <StatusBar style="light" />
        <Header />
      </NavigationContainer>
      </AppearanceProvider>
    );
 
} 

}


