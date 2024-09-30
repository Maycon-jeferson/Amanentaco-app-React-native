import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import Agenda from '../../components/Agenda';
import { Image } from 'react-native';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.tittle}>Hora da Acao</Text>

          <View style={styles.buttonConteiner}>
            <Pressable style={styles.button}>
              <Image source={require('../../source/icons/table.png')} style={{width: 70, height: 70}}/>{/* Graphic screnn */}
            </Pressable>

            <Pressable style={styles.button}>
              <Image source={require('../../source/icons/breastfeeding.png')} style={{width: 70, height: 70}}/>{/* Breastfeeding screnn */}
            </Pressable>

            <Pressable style={styles.button}>
              <Image source={require('../../source/icons/baby-line.png')} style={{width: 70, height: 70}}/>{/* MyBaby screnn */}
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
    width: 100,
    height: 100,

    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonUtilidadesConteiner:{
    marginTop: 10,
  },

  buttonUtilidades:{
    backgroundColor: '#F3E5F5',
    borderRadius: 50,
    

    height: 40,
    width: 350,
    margin: 5,

    alignItems: 'center',
    justifyContent: 'center'
  }
});
