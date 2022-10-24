import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Score from "../screens/score";

const Stack = createNativeStackNavigator();

const ScoreNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Score"
            screenOptions={{
                headerStyle: {
                },
                headerTitleStyle: {
                    fontFamily: 'Raleway-Bold',
                },
            }}
        >
            <Stack.Screen
                name="Puntaje"
                component={Score}
            />
        </Stack.Navigator>
    )
}

export default ScoreNavigator;