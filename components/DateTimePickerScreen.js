// DateTimePickerScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import RNPickerSelect from 'react-native-picker-select';

export default function DateTimePickerScreen({ route, navigation }) {
  const { pricePerDay } = route.params;
  const [selectedDates, setSelectedDates] = useState({});
  const [pickUpTime, setPickUpTime] = useState('10:00 AM');
  const [returnTime, setReturnTime] = useState('9:00 PM');
  const [totalPrice, setTotalPrice] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onDayPress = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day.dateString);
      setEndDate(null);
      setSelectedDates({
        [day.dateString]: {
          startingDay: true,
          color: 'red',
          textColor: 'white',
        },
      });
    } else {
      const range = getDatesInRange(startDate, day.dateString);
      const newDates = {};
      range.forEach((date, index) => {
        newDates[date] = {
          color: 'red',
          textColor: 'white',
          startingDay: index === 0,
          endingDay: index === range.length - 1,
        };
      });
      setSelectedDates(newDates);
      setEndDate(day.dateString);
    }
  };

  const getDatesInRange = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const dates = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  useEffect(() => {
    if (startDate && endDate) {
      const daysSelected = Object.keys(selectedDates).length;
      setTotalPrice(daysSelected * Number(pricePerDay));
    }
  }, [selectedDates, pricePerDay]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Date & Time</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={selectedDates}
        markingType={'period'}
        theme={{
          selectedDayBackgroundColor: 'red',
          todayTextColor: 'red',
          arrowColor: 'red',
        }}
      />
      <View style={styles.pickerContainer}>
        <Text>Pick-up time</Text>
        <RNPickerSelect
          onValueChange={(value) => setPickUpTime(value)}
          items={[
            { label: '10:00 AM', value: '10:00 AM' },
            { label: '11:00 AM', value: '11:00 AM' },
          ]}
          value={pickUpTime}
        />
      </View>
      <View style={styles.pickerContainer}>
        <Text>Return time</Text>
        <RNPickerSelect
          onValueChange={(value) => setReturnTime(value)}
          items={[
            { label: '9:00 PM', value: '9:00 PM' },
            { label: '10:00 PM', value: '10:00 PM' },
          ]}
          value={returnTime}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.priceText}>₱{totalPrice}</Text>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation.navigate('Inquire', { totalPrice })}
        >
          <Text style={styles.bookButtonText}>Inquire Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  pickerContainer: {
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  bookButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});