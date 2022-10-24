import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import BienvenidaNavigator from "./bienvenida.navigation";
import GameNavigator from "./game.navigation";
import ScoreNavigator from "./score.navigation";
import TopNavigator from "./top.navigation";
import { colors } from "../constants/colors";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="InicioTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Raleway-Bold',
                    color: colors.secondary,
                }
            }}
        >
            <BottomTab.Screen
                name="InicioTab"
                component={BienvenidaNavigator}
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'home' : 'home-outline'}
                            size={22}
                            color={colors.tertiary}
                        />
                    )
                }}
            /> 
            <BottomTab.Screen
                name="GameTab"
                component={GameNavigator}
                options={{
                    title: 'Juego',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'game-controller' : "game-controller-outline"}
                            size={22}
                            color={colors.tertiary}
                        />
                    ),
                }}
            />
             <BottomTab.Screen
                name="ScoreTab"
                component={ScoreNavigator}
                options={{
                    title: 'Puntaje',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'apps' : "apps-outline"}
                            size={22}
                            color={colors.tertiary}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="TopTab"
                component={TopNavigator}
                options={{
                    title: 'Mejores',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'body' : 'body-outline'}
                            size={22}
                            color={colors.tertiary}
                        />
                    )
                }}
            /> 
        </BottomTab.Navigator>
    )
}

export default Tabs;