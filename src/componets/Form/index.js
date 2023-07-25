import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native";
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
    const [imcLista, setaImcLista] = useState([]) //[] -> array

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
        let totalImc = ((peso/(alturaFormatada * alturaFormatada)).toFixed(2)) //Altera o valor a hora que aciona a função (toFixed(2) para duas casas decimais)
        setaImcLista((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])//Setando array 
        setaImc(totalImc)
    }

    function ValidaIMC()
    {
        console.log(imcLista)
        if(peso != null && altura != null)
        {
            CalcularImc();
            setaPeso(null)
            setaAltura(null)
            setaMensagemIMC("Seu imc é igual: ");
            setaTextBotao("Calcular novamente"); 
            setaErroMensagem(null)
        }
        else
        {
            verficaErroImc()
            setaImc(null)
            setaTextBotao("Calcular");
            setaMensagemIMC("Preencha o peso e altura")
        }
        
    

    }
    return(
        //Pressable para se tornar uma area clicavel
        
            <View style={styles.formContext}>
                {
                    imc == null ?
                        <Pressable onPress={Keyboard.dismiss} style={styles.formulario}> 
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
                        
                    
                    </Pressable>
            : 
                    <View style={styles.exibiResultadoImc}>
                        <ResultadoImc mensagemResultadoIMC={mensagemIMC} resultadoIMC={imc}/>
                        <TouchableOpacity
                                style={styles.btnCalcular}
                                onPress={() =>{
                                    ValidaIMC()
                                }}
                            >
                            <Text style={styles.textBtnCalcular}>{textBotao}</Text>   
                            </TouchableOpacity>        
                    </View>
            }
                <FlatList 
                    style={styles.listaImcs}
                    data={imcLista.reverse()}
                    renderItem={({item}) =>{
                        return(
                            <Text style={styles.resultadoImcItem} key={item.id}>
                                <Text style={styles.textResultadoImcItemList} key={item.id}>Resultado IMC =  </Text>
                                {item.imc}
                            </Text>
                               
                        )
                    }}
                    keyExtractor={(item) => {
                        item.id
                    }}
                    />

             
            </View>
       
    );
}