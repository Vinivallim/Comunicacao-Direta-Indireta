import React from 'react'
import { Text } from 'react-native'

import estilo from '../estilo'

export default Comp => {
    let x = 20
    let y = 100

    return ( 
        <>
        <Text style={estilo.FontGrande}>{Comp.a}</Text>
        <Text style={estilo.FontGrande}>{Comp.b}</Text>
        </>
    )
}