import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

type TimerProps = {
  onSaveTime: (time: number) => void;  // Função de callback passada via prop
};

const Timer: React.FC<TimerProps> = ({ onSaveTime }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervaloRef.current = setInterval(() => {
        setSeconds(prevSecond => prevSecond + 1);
      }, 1000);
    } else if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }

    return () => {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
      }
    };
  }, [isRunning]);

  const toggleTimer = () => {
    if (isRunning) {
      onSaveTime(seconds);  // Salva o tempo no componente pai
      setSeconds(0);        // Reseta o timer
    }
    setIsRunning(prevState => !prevState); // Alterna o estado de "isRunning"
  };

  return (
    <View>
      <Text style={styles.text}>{seconds}s</Text>
      <Pressable onPress={toggleTimer}>
        <Text style={styles.text}>{isRunning ? 'Parar' : 'Iniciar'}</Text>
      </Pressable>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text : {
    color: '#fff'
  }


})

export default Timer;
