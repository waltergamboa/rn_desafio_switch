import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Top from "../../screens/top";

const Stack = createNativeStackNavigator();

const TopNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Top"
            screenOptions={{
                headerStyle: {
                },
                headerTitleStyle: {
                    fontFamily: 'Raleway-Bold',
                },
            }}
        >
            <Stack.Screen
                name="Mejores"
                component={Top}
            />
        </Stack.Navigator>
    )
}

export default TopNavigator;