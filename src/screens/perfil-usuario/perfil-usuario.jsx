import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import SelectorImagen from "../../components/selector-imagen";
import { styles } from "./styles";
import { useSelector, useDispatch} from "react-redux"
import { selectJugador, datosJugador } from "../../store/actions";
import { useFocusEffect } from "@react-navigation/native";

const PerfilUsuario = () => {
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.jugadores.jugador);
    
    const [nombreJugador, setNombreJugador] = useState(result[0]?.name);
    const [imagen, setImagen] = useState(null);

    useEffect(
        () => {
            dispatch(selectJugador());
            setNombreJugador(result[0]?.name)
            if (result[0]?.image !== ""){
                setImagen(result[0]?.image);
            }
        }, [dispatch, result]
    );

    const onHandleNombreJugador = (texto)=>{
        setNombreJugador(texto);
    }

    const onHandleImagen = (imagen)=>{
        setImagen(imagen);
    }

    const guardar = ()=>{
        dispatch(datosJugador(nombreJugador, imagen, "a", "b"));
    }

  return (
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.title}>Para que te conozcan...</Text>
        <TextInput
          style={styles.input}
          placeholder="Tu nombre para jugar"
          onChangeText={onHandleNombreJugador}
          value={nombreJugador}
        />
        </View>
        <SelectorImagen onHandleImagen={onHandleImagen}></SelectorImagen>
        <View style={styles.containerButton}>
            <Button
                title="Guardar"
                onPress={guardar}>
            </Button>
        </View>
        <Image style={{width: "10%", heigth: "10%"}} source={{ uri: imagen }}></Image> 
    </View>
  );
};

export default PerfilUsuario;
