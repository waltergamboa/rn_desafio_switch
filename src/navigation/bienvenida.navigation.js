import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bienvenida from "../screens/bienvenida";
import PerfilUsuario from "../screens/perfil-usuario/perfil-usuario";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const BienvenidaNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Bienvenida"
            screenOptions={{
                headerStyle: {
                },
                headerTitleStyle: {
                    fontFamily: 'Raleway-Bold',
                },
            }}
        >
            <Stack.Screen
                name="Bienvenida"
                component={Bienvenida}
                options={({ navigation }) => ({
                    title: "Inicio",
                    headerRight: () => (
                      <TouchableOpacity onPress={() => navigation.navigate("Jugador")}>
                        <IonicIcons name="person-add-outline" size={25} color={"#458333"} />
                      </TouchableOpacity>
                    ),
                  })}                
            />

            <Stack.Screen
                name="Jugador"
                component={PerfilUsuario}
            />

        </Stack.Navigator>
    )
}

export default BienvenidaNavigator;