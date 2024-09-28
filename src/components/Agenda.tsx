import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Agenda = () => {
  return (
    <View style={styles.container}>
      <Calendar 
        onDayPress={(day: any) => {
          console.log('Selected day: ', day);
        }}
        markedDates={{
          '2024-09-15': { selected: true, marked: true, selectedColor: '#C8A2C8' },
          '2024-09-16': { marked: true },
          '2024-09-17': { marked: true, dotColor: '#C8A2C8', activeOpacity: 0 },
        }}
        theme={{
          selectedDayBackgroundColor: '#b82bb8',
          todayTextColor: '#b82bb8',
          arrowColor: '#b82bb8',
          monthTextColor: '#b82bb8',
          indicatorColor: '#b82bb8',
          textSectionTitleColor: '#b82bb8',
        }}

        style={styles.calendar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 350,
    
    marginBottom: 50

  },

  calendar: {
    padding: 10,
    backgroundColor: '#F3E5F5',
    borderRadius: 10, 
  }
});

export default Agenda;