import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { format } from "date-fns";

const generateDates = () => {
  const startDate = new Date(2023, 0, 1);
  const dates = [];

  for (let i = 0; i < 15; i++) {
    const date = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + i
    );
    dates.push(date);
  }

  return dates;
};

const DateComponent = () => {
  const dates = generateDates();

  return (
    <View style={styles.container}>
      {dates.map((date, index) => (
        <View
          key={index}
          style={[
            styles.dateContainer,
            index % 3 === 0 ? { backgroundColor: "#02685a" } : null,
          ]}
        >
          <Text style={styles.dateText}>{format(date, "d")}</Text>
          <Text style={styles.dayText}>{format(date, "EEE")}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: 100,
    marginBottom: 20,
    backgroundColor: "#CDE1DF",
    borderRadius: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dayText: {
    fontSize: 14,
    fontWeight: "normal",
  },
});

export default DateComponent;
