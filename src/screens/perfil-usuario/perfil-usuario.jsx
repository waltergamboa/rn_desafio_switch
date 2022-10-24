import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import SelectorImagen from "../../components/selector-imagen";
import { styles } from "./styles";
import { useSelector, useDispatch} from "react-redux"
import { selectJugador } from "../../store/actions";

const PerfilUsuario = () => {
    const dispatch = useDispatch();

    const [nombreJugador, setNombreJugador] = useState("");
    const [imagen, setImagen] = useState(null);

    //const result = useSelector((state)=>state.jugadores);

    const onHandleNombreJugador = (texto)=>{
        setNombreJugador(texto);
    }

    const onHandleImagen = (imagen)=>{
        setImagen(imagen);
    }

    const test = ()=>{
      //  dispatch(selectJugador());
      //  console.log(result);
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
                onPress={test}>
            </Button>
        </View>
        <Image style={{width: "10%", heigth: "10%"}} source={{ uri: imagen }}></Image>  
    </View>
  );
};

export default PerfilUsuario;
