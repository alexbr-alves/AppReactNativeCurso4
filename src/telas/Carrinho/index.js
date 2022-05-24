import React from "react";
import { FlatList} from "react-native";

import Item from "./item";
import StatusCarrinho from "../../coponentes/statusCarrinho";
import TelaPadrao from "../../coponentes/TelaPadrao";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: 'NÃO DE BANHO EM SEU GATO! Mas se precisar, nós damos.',
        quantidade: 1
        
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: 'UMA DOSE DE VACINA V4, Seu gato precisa.',
        quantidade: 2
    },
]

export default function Carrinho() {
    const total = servicos.reduce((soma, {preco, quantidade})  => soma + (preco * quantidade), 0 )
    
    return <TelaPadrao> 
        <StatusCarrinho total={total}/>
        <FlatList
            data={servicos}
            removeClippedSubviews={false}
            renderItem={({item}) => <Item {...item}/>}
            keyExtractor={({id}) => String(id)}
            />
            </TelaPadrao>
}