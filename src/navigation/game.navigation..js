import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Game from "../../screens/game";
import PlayGame from "../../screens/play-game";
import EndGame from "../../screens/end-game";

const Stack = createNativeStackNavigator();

const GameNavigator = ()=>{
    return (
        <Stack.Navigator initialRouteName="Game">
            <Stack.Screen name="Juego" component={Game}/>
            <Stack.Screen name="Jugar" component={PlayGame}/>
            <Stack.Screen name="Fin" component={EndGame}/>            
        </Stack.Navigator>
    )
}

export default GameNavigator;