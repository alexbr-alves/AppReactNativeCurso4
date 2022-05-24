import React from "react";
import { TextInput } from "react-native";
import estilosPadrao from "./estilos";


export default function CampoInteiro({valor, acao}) {
    const atualiza = (novoValor, acaoRetorno) => {
        const verificarInteiro = novoValor.match(/^[0-9]*$/);
        if(!verificarInteiro) return

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2'); 

        acaoRetorno(removeZeroEsquerda);
    }

    const numeroEmTexto = String(valor)

    return <TextInput 
    style={[estilosPadrao.campo]}
    keyboardType="number-pad" 
    selectTextOnFocus
    onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
    value={numeroEmTexto}
    />
}