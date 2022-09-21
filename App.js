import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import Header from "./components/header";
import Game from "./screens/game";
import PlayGame from "./screens/play-game";
import EndGame from "./screens/end-game";

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

  const [estado, setEstado] = useState("juego");
  const [correctoIncorrecto, setCorrectoIncorrecto] = useState(true);

  const onHandleEstado = (estado)=>{
    setEstado(String(estado).toLowerCase());
  }

  let content;
  switch (String(estado).toLowerCase()) {
    case "juego":
      content = <Game handleEstado={onHandleEstado}></Game>
      break;    
    case "jugar":
      content = <PlayGame handleEstado={onHandleEstado} setCorrectoIncorrecto={setCorrectoIncorrecto} ></PlayGame>
      break;
    case "fin":
      content = <EndGame handleEstado={onHandleEstado} correctoIncorrecto={correctoIncorrecto}></EndGame>
        break;
    default:
      content = <Game></Game>
      break;
  }

  return (
    <View style={styles.container}>
      <Header title="Bienvenido"></Header>
      {content}
    </View>
  );
}

