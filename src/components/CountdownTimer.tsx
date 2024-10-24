import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState<number>(0); // Tempo inicial em segundos
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);

  // Efeito para gerenciar o temporizador
  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervaloRef.current = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    } else if (seconds === 0 || !isRunning) {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
        intervaloRef.current = null;
      }
    }

    return () => {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
      }
    };
  }, [isRunning, seconds]);

  const addTime = () => {
    setSeconds(prev => prev + 600); // Adiciona 10 minutos (600 segundos)
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopAndResetTimer = () => {
    setIsRunning(false);
    setSeconds(0); // Reseta o timer para 0
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>
        {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Adicionar 10 min" onPress={addTime} />
      </View>
      {seconds > 0 && !isRunning && (
        <Button title="Iniciar" onPress={startTimer} />
      )}
      {isRunning && (
        <Button title="Parar e Zerar" onPress={stopAndResetTimer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 15,
    margin: -10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default CountdownTimer;
