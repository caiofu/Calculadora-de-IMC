import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, } from "react-native";
import ResultadoImc from './ResultadoImc/';
import styles from './style';


export default function Form()
{
    //Propriedades
    const [altura, setaAltura] = useState(null)
    const [peso, setaPeso] = useState(null)
    const [mensagemIMC, setaMensagemIMC] = useState("Preencha o peso e a altura") //Ja vem preenchido
    const [imc, setaImc] = useState(null)
    const [textBotao, setaTextBotao] = useState("Calcular")
    const [erroMensagem, setaErroMensagem] = useState(null)

    //Funçoes
    function verficaErroImc()
    {
        if(imc == null)
        {
            Vibration.vibrate();
            setaErroMensagem("Campo obrigatório*")
        }
    }

    function CalcularImc()
    {
        let alturaFormatada = altura.replace(",",".")
        return setaImc((peso/(alturaFormatada * alturaFormatada)).toFixed(2)) //Altera o valor a hora que aciona a função (toFixed(2) para duas casas decimais)
    }

    function ValidaIMC()
    {
        
        if(peso != null && altura != null)
        {
            CalcularImc();
            setaPeso(null)
            setaAltura(null)
            setaMensagemIMC("Seu imc é igual: ");
            setaTextBotao("Calcular novamente"); 
            setaErroMensagem(null)
            return
        }
        verficaErroImc()
        setaImc(null)
        setaTextBotao("Calcular");
        setaMensagemIMC("Preencha o peso e altura")
    

    }
    return(
        //Pressable para se tornar uma area clicavel
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}> 
            <View style={styles.formulario}>
                <Text style={styles.formLabel}>Altura</Text>
                 <Text style={styles.erroMensagem}>{erroMensagem}</Text>
                    <TextInput
                        style={styles.inpunt}
                        onChangeText={setaAltura}
                        value={altura}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                    />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.erroMensagem}>{erroMensagem}</Text>
                    <TextInput 
                          style={styles.inpunt}
                        onChangeText={setaPeso}
                        value={peso}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric" 
                    />
                    <TouchableOpacity
                        style={styles.btnCalcular}
                        onPress={() =>{
                            ValidaIMC()
                        }}
                    >
                     <Text style={styles.textBtnCalcular}>{textBotao}</Text>   
                    </TouchableOpacity>
                  
            </View>
          
            <ResultadoImc mensagemResultadoIMC={mensagemIMC} resultadoIMC={imc}/>
        </Pressable>
    );
}