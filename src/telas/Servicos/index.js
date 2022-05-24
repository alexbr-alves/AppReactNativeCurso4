import React from "react";
import { FlatList} from "react-native";
import TelaPadrao from "../../coponentes/TelaPadrao";
import Item from "./item";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: 'NÃO DE BANHO EM SEU GATO! Mas se precisar, nós damos.'
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: 'UMA DOSE DE VACINA V4, Seu gato precisa.'
    },
    {
        id: 3,
        nome: "Vacina antirrábica",
        preco: 99.9,
        descricao: 'UMA DOSE DE VACINA ANTIRRÁBICA, Seu gato precisa de uma por ano.'
    },
    
]

export default function Servicos() {
    return <TelaPadrao>
        <FlatList
            data={servicos}
            removeClippedSubviews={false}
            renderItem={({item}) => <Item {...item}/>}
            keyExtractor={({id}) => String(id)}
            />
        </TelaPadrao>
}
