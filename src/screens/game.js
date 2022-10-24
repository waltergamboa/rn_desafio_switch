import { React, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
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
    button: {
        borderRadius: 100
    }
})

const Game = ({ navigation })=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Prguntas sobre capitales del mundo</Text>
            <View style={styles.buttonContainer}>
            <Button color={colors.secondary} title="Jugar" onPress={()=>navigation.navigate("Jugar")}></Button>  
            </View>
        </View>
    )
}

export default Game;