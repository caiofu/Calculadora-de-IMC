import React from "react";
import {View, Text, TouchableOpacity, Share} from "react-native";
import styles from "./style";

export default function ResultadoImc(props)
{
    //Funcção de compartilhar
    const Compartilhar = async () =>
    {
        const result = await Share.share(
            {
                message: "Meu imc hoje é: "+props.resultadoIMC,
            })
    }
    return (
    <View style={styles.resultadoImc}>
            <View style={styles.boxCompartilhar}>
                <Text style={styles.informacao}>
                    {props.mensagemResultadoIMC}
                </Text>

                <Text style={styles.numeroImc}>
                    {props.resultadoIMC}
                </Text>
                    
                    <TouchableOpacity 
                        style={styles.compartilhar}
                        onPress={Compartilhar}
                        >
                        <Text style={styles.textCompartilhar}>Compartilhar</Text>
                    </TouchableOpacity>
 
            </View>
            
    </View> 
    );
   
}