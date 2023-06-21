import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { format } from "date-fns";
import Modal from "react-native-modal";
import { styles } from "../styles.js/styles";

const generateDates = () => {
  const dates = [];
  const numDays = 30; // Generate dates for the next 30 days

  for (let i = 0; i < numDays; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }

  return dates;
};

const DateComponent = () => {
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const dates = generateDates(); // Generate dates for the next 30 days

  const handleDatePress = (index) => {
    if (bookedDates.includes(index)) {
      setSelectedDate(index);
    } else {
      const updatedBookedDates = [...bookedDates, index];
      setBookedDates(updatedBookedDates);
    }
  };

  const closeModal = () => {
    setSelectedDate(null);
  };

  return (
    <View style={styles.dateContain}>
      {dates.map((date, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dateContainer,
            bookedDates.includes(index) ? { backgroundColor: "#02685a" } : null,
          ]}
          onPress={() => handleDatePress(index)}
          disabled={bookedDates.includes(index)}
        >
          {bookedDates.includes(index) ? (
            <Text style={styles.bookedText}>Booked</Text>
          ) : (
            <>
              <Text style={styles.dateText}>{format(date, "d")}</Text>
              <Text style={styles.dayText}>{format(date, "EEE")}</Text>
            </>
          )}
        </TouchableOpacity>
      ))}

      {selectedDate !== null && (
        <Modal isVisible={true} onBackdropPress={closeModal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              The date {format(dates[selectedDate], "d EEE")} is already booked.
              Please select another date.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}

      {selectedDate !== null && (
        <Modal isVisible={true} onBackdropPress={closeModal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              The date {format(dates[selectedDate], "d EEE")} is already booked.
              Please select another date.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};



export default DateComponent;
