import { View, Text, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function index() {

  const[secund, setSecund] = useState(0)
  const[minute, SetMinute] = useState(0)
  const[active, setActive] = useState(false)
  const[intervalTime, setIntervalTime] = useState<ReturnType<typeof setInterval> | null>(null)

  useEffect(()=>{
      if(active){
        const interval = setInterval(()=>{
          setSecund(prev => {
              if (prev === 59){
                  SetMinute(min => min + 1);
                  return 0;
              }else{
                return prev + 1
              }
            })
        },1000);

        setIntervalTime(interval);

      }else if(intervalTime) {
        clearInterval(intervalTime)
        setIntervalTime(null)
      }
  },[active]);

  const start = () => setActive(true)

  const zero = () => {

      setActive(false)
      setSecund(0)
      SetMinute(0)
    if (intervalTime) {
      clearInterval(intervalTime)
      setIntervalTime(null)
    }
  }

  return (
    <View>
      <Text>
          {`${minute < 10 ? '0' + minute : minute}:${secund < 10 ? '0' + secund : secund}`}
        </Text>
      <Button title='comecar' onPress={start}/>
      <Button title='zerar' onPress={zero}/>
    </View>
  )
}