import React from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView } from "react-native";

import estilosGlobal from '../../estilos'
import { cores } from "../../estilos";
import estilos from "./estilos";

export default function TelaPadrao({ children }) {
    return <><SafeAreaView style={estilosGlobal.preencher}>
    <StatusBar backgroundColor={cores.roxo}/>
    <KeyboardAvoidingView>
        {children}
    </KeyboardAvoidingView> 
    </SafeAreaView>
    </>
}