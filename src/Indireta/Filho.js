import React from 'react'
import { Button } from 'react-native'

export default Comp => {
    function GerarNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }
    return (
        <Button
            title= "Executar"
            onPress={function(){
                const n = GerarNumero(Comp.min, Comp.max)
                Comp.funcao(n, "O Valor é: ")
            }}
        />
    )
}