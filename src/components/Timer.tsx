import { View, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

type TimerProps = {
  isRunning: boolean;  // Correção para o tipo boolean
};

const Timer: React.FC<TimerProps> = ({ isRunning }) => {
  const [seconds, setSeconds] = useState(0);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervaloRef.current = setInterval(() => {
        setSeconds(prevSecond => prevSecond + 1);
      }, 1000);
    } else if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null
    }

    return () => {
      if (intervaloRef.current){
        clearInterval(intervaloRef.current)
      }
    };
  }, [isRunning]);


  return (
    <View>
      <Text>{seconds}s</Text>
    </View>
  );
};

export default Timer;
