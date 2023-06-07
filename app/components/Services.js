import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  MaterialIcons,
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Services = ({ item }) => {
  const { icon, name, color } = item;
  return (
    <View style={styles.service}>
      <Pressable style={[styles.optionRow, { backgroundColor: item.color }]}>
        <View style={styles.icon}>{icon}</View>
        <View>
          <Text>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  service: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  optionRow: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 100,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 9,
    width: "100%",
  },
  icon:{
    fontSize:20
  }
});
