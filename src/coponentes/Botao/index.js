import React from "react";
import { TouchableOpacity, Text } from "react-native";
import estilos from "./estilos";

import funcaoEstilosPadrao from "./estilos";

export default function Botao({pequeno = false, invertido = false, valor, acao}) {
    const estilosPadrao = funcaoEstilosPadrao()
    return <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}>
        <Text style={estilosPadrao.valor} >{valor}</Text>
    </TouchableOpacity>
}