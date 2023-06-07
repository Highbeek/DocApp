import React from "react";
import { StyleSheet, View, Image, Text, role } from "react-native";
import { DocAppointment } from "../Constants";
import DateComponent from "../components/Date";
import {
  Octicons,
  SimpleLineIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";

const Appoint = () => {
  return (
    <View style={styles.container}>
      {DocAppointment.slice(0, 1).map(({ img, uid, name, role, time }) => (
        <View key={uid} style={styles.appointContainer}>
          <View style={styles.imgCon}>
            <View style={styles.imageWrapper}>
              <Image source={img} resizeMode="cover" style={styles.img} />
            </View>
          </View>
          <View style={styles.doc}>
            <Text style={styles.docName}>{name} </Text>
            <Text style={styles.docRole}>{role} </Text>
          </View>
          <View style={styles.appointment}>
            <View>
              <Text style={{ fontWeight: "700", fontSize: 24 }}>
                Appointment
              </Text>
              <View style={{ flexDirection: "row", gap: 6 }}>
                <SimpleLineIcons name="clock" size={12} color="black" />
                <Text>{time}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>January 2023</Text>
              <Entypo name="select-arrows" size={12} color="black" />
            </View>
          </View>
          <View>
            <DateComponent />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Appoint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  appointContainer: {
    paddingHorizontal: 20,
  },
  imgCon: {
    height: 100,
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  imageWrapper: {
    overflow: "hidden",
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "#e7ebee",
  },
  doc: {
    alignItems: "center",
  },
  docName: {
    fontSize: 24,
    fontWeight: 700,
  },
  appointment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom:10
  },
});
