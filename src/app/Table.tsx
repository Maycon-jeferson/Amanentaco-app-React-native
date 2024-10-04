import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Fraudas() {
  return (
    <View style={styles.conteiner}>
      <Text>Table</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 10,

    backgroundColor: '#800'
  }

})