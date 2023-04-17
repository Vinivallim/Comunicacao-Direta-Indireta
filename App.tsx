import React from 'react'
import { View, StyleSheet } from 'react-native'
/* import Pai from './src/Direta/Pai' */
import Pai from './src/Indireta/Pai'

export default () => (
  <>
    <View style={style.App}>
      <Pai />
    </View>
  </>
)

const style = StyleSheet.create({
  App:{
    backgroundColor: '#AC9',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  App1: {
    backgroundColor: '#AC9',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})