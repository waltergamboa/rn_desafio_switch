import React, { useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cee0dc',
  },
});

export default function App() {
  const [loaded] = useFonts({
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Light": require("./assets/fonts/Raleway-Light.ttf"),
    "Raleway-Italic": require("./assets/fonts/Raleway-Italic.ttf")
  })

  if (!loaded){
    return <ActivityIndicator/>
  }

  return (
    <AppNavigator/>
  );
}

