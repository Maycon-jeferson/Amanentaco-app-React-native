import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import Agenda from '../../components/Agenda';

export default function index() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.tittle}>Hora da Acao</Text>

          <View style={styles.buttonConteiner}>
            <Pressable style={styles.button}>
              <Text>Graficos</Text>
            </Pressable>

            <Pressable style={styles.button}>
              <Text>Amanentear</Text>
            </Pressable>

            <Pressable style={styles.button}>
              <Text>Meu bebe</Text>
            </Pressable>
          </View>

          <View style={styles.buttonUtilidadesConteiner}>
            <Pressable style={styles.buttonUtilidades}>
              <Text>fraldas</Text>
            </Pressable>

            <Pressable style={styles.buttonUtilidades}>
              <Text>Mamadeiras</Text>
            </Pressable>

            <Pressable style={styles.buttonUtilidades}>
              <Text>sono</Text>
            </Pressable>
          </View>
      </View>

      <Agenda/>
    </>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },

  tittle: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 10,
  },

  buttonConteiner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  button: {
    backgroundColor: '#b82bb8',
    borderRadius: 50,

    padding: 20,
    margin: 5,

    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonUtilidadesConteiner:{
    margin: 10,
  },

  buttonUtilidades:{
    backgroundColor: '#F3E5F5',
    borderRadius: 50,
    

    height: 60,
    width: 350,
    margin: 5,

    alignItems: 'center',
    justifyContent: 'center'
  }
});
