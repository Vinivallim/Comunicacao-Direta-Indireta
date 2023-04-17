import React, { useState } from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Filho from './Filho'

export default Comp => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)


    function ExibirValor(GerarNumero, texto) {
        console.warn(GerarNumero)
        setNum(GerarNumero)
        setTexto(texto)
    }

    return (
        <>
            <Text style={estilo.FontGrande}>{texto} {num}</Text>
            <Filho
                min={1}
                max={100}
                funcao={ExibirValor}
            />
        </>
    )
}