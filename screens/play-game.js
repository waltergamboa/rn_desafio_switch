import { React, useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { generateRandomNumberBetween } from "../utils/functions";
import { paises, capitales } from "../utils/preguntas-respuestas";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        height: "40%"
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
    label: {
        fontSize: 14,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 5, 
        fontFamily: 'Raleway-Regular',
    },
    inputContainer: {
        width: 320,
        maxWidth: '80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    input: {
        width: '100%',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        maxWidth: 270,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
        fontFamily: 'Raleway-Regular',
    },    
})

const PlayGame = ({ handleEstado, setCorrectoIncorrecto })=>{
    const [texto, setTexto] = useState("");
    const [indice, setIndice] = useState(generateRandomNumberBetween(0, 11))

    const onHandleChange = (text) => {
        setTexto(String(text).toLowerCase());
    }

    const onHandleVerificar = ()=>{
        if(texto !== ""){
            handleEstado("fin");
        }

        if(texto !== capitales[indice].toLowerCase()){
            setCorrectoIncorrecto(false);
        } else {
            setCorrectoIncorrecto(true);
        }
    }

    const onHandlePreguntasRespuestas = ()=>{

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jugando</Text>
            <View>
                <Text style={styles.label}>Pregunta</Text>
                <Text style={styles.label}>Cual es la capital de {paises[indice]}</Text>
                <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    keyboardType="default"
                    maxLength={20}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text)}
                    value={texto}
                />
                </View>
            </View>
            <View style={styles.buttonContainer}>
            <Button title="Volver" onPress={()=>handleEstado("juego")} color={colors.tertiary}></Button>
            <Button title="Verificar" onPress={()=>onHandleVerificar()} color={colors.secondary}></Button>            
            </View>
        </View>
    )
}

export default PlayGame;