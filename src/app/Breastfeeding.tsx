import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function BreastFeeding() {
  return (

    <View style={styles.conteiner}>

      <View style={styles.perfil}>
        <Text style={{justifyContent: 'flex-end', fontSize: 30}}>Baby</Text>
        <Text style={{justifyContent: 'flex-end', margin: 5}}>Idade</Text>
        <Text style={{position: 'absolute', left: 280, backgroundColor: '#f8f', width: 60, height: 60, margin: 10 }}>Image</Text>
      </View>

      <View style={styles.lrDirection}>
        <Pressable style={styles.lrDirectionBlock}>
          <Text>L</Text>
        </Pressable>

        <Pressable style={styles.lrDirectionBlock}>
          <Text>R</Text>
        </Pressable>
      </View>

      <View style={styles.timerDirection}>
        <Text>Play</Text>
        <Text>00:00:00</Text>
      </View>

      <View >
        <Pressable style={styles.areaText}>
          <Text> Timer since last feed</Text>
          <Text>00:00:00</Text>
        </Pressable>
      </View>

      
      <View style={styles.areaText}>
        <Text>Next feed is due</Text>
        <Text>Date</Text>
      </View>

    </View>
    
    
  )
}

const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 2,
  },
  
  perfil:{
    flexDirection: 'column',
    margin: 10,
    height: 80,
    

    backgroundColor: '#400',
  },

  perfilBlock:{
    justifyContent: 'flex-end',
    margin: 5
  },

  lrDirection:{
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    height: 400,

    backgroundColor: '#900',

    justifyContent: 'space-around',
    alignItems: 'center'
  },

  lrDirectionBlock:{
    width: '45%',
    height: '90%',
    backgroundColor: '#700'
  },

  timerDirection:{
    flexDirection: 'row',
    margin: 10,
    height: 50,

    backgroundColor: '#400',
    justifyContent: 'center',
    alignItems: 'center'
  },

  areaText:{
    flexDirection: 'column',
    margin: 10,
    height: 70,

    backgroundColor: '#400',
    justifyContent: 'center',
    alignItems: 'center'
  }
})