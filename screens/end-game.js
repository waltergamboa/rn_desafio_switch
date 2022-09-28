import { React, useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: "Raleway-Bold"
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    respuestaContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",        
        width: "100%",
        marginTop: 70, 
        marginLeft: 7
    },
    imagen: {
    }    
})

const EndGame = ({ route, navigation  })=>{
const { correctoIncorrecto } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Validar Respuesta</Text>
            <View style={styles.respuestaContainer}>
            {correctoIncorrecto ? (
            <>
            <Image source={require("../assets/correcto.png")} 
                style={{width: 40, height: 40}}
                />
            <Text>Correcto</Text>
            </>)
            :
            (<>
                <Image source={require("../assets/incorrecto.png")} 
                style={{width: 40, height: 40}}
                />
            <Text>Incorrecto</Text>
            </>)
}
            </View>
         <View style={styles.buttonContainer}>
            <Button title="Volver a Jugar" onPress={()=>navigation.navigate("Juego")} color={colors.tertiary}></Button>
            </View>
        </View>
    )
}

export default EndGame;