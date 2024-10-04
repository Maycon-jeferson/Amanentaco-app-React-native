import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import Agenda from '../components/Agenda';
import { Image } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.tittle}>Hora da Acao</Text>

          <View style={styles.buttonConteiner}>
            <Pressable style={styles.button}>
              <Link href={"/Table"} style={styles.linkbutton}>
                <Image source={require('../source/icons/table.png')} style={{width: 40, height: 40}}/>{/* Table screnn */}
              </Link>
            </Pressable>

            <Pressable style={styles.button}>
              <Link href={"/Breastfeeding"} style={styles.linkbutton}>
                <Image source={require('../source/icons/breastfeeding.png')} style={{width: 70, height: 70}}/>{/* Breastfeeding screnn */}
              </Link>
            </Pressable>

            <Pressable style={styles.button}>
              <Link href={"/Baby"} style={styles.linkbutton}>
                <Image source={require('../source/icons/baby-line.png')} style={{width: 40, height: 40}}/>{/* Baby screnn */}
              </Link>
            </Pressable>
          </View>

          <View style={styles.buttonUtilidadesConteiner}>
            
            <Pressable style={styles.buttonUtilidades}>
              <Link href={"/Fraudas"} style={styles.link}>fraldas</Link>
            </Pressable>

            <Pressable style={styles.buttonUtilidades}>
              <Link href={"/Mamadeira"} style={styles.link}>Mamadeiras</Link>
            </Pressable>

            <Pressable style={styles.buttonUtilidades}>
              <Link href={"/Sono"} style={styles.link}>Sono</Link>
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
    marginTop: 30,
  },

  tittle: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 10,
    backgroundColor: '#400'
  },

  buttonConteiner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  button: {
    padding: 5,

    alignItems: 'center',
    justifyContent: 'center'
  },

  linkbutton:{
    display: 'flex',
    height: 100,
  },

  buttonUtilidadesConteiner:{
    marginTop: 5,
  },

  buttonUtilidades:{
    backgroundColor: '#F3E5F5',
    borderRadius: 50,
    

    height: 40,
    width: 350,
    margin: 5,

    justifyContent: 'center'
  },

  link:{
    width: '100%',
    
    textAlign: 'center'
  }
});
