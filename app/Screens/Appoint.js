import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { DocAppointment } from "../Constants";
import DateComponent from "../components/Date";
import { format, isToday } from "date-fns";
import {
  Octicons,
  SimpleLineIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";

const Appoint = () => {
  const currentDate = new Date();
  return (
    <View style={styles.container}>
      {DocAppointment.slice(0, 1).map(({ img, uid, name, role, time }) => (
        <View key={uid} style={styles.appointContainer}>
          <View style={styles.appointImgCon}>
            <View style={styles.appointImageWrapper}>
              <Image
                source={img}
                resizeMode="cover"
                style={styles.appointImg}
              />
            </View>
          </View>
          <View style={styles.appointDoc}>
            <Text style={styles.appointDocName}>{name}</Text>
            <Text style={styles.appointDocRole}>{role}</Text>
          </View>
          <View style={styles.appointDetails}>
            <View>
              <Text style={styles.appointmentTitle}>Appointment</Text>
              <View style={{ flexDirection: "row", gap: 6 }}>
                <SimpleLineIcons name="clock" size={12} color="black" />
                <Text>{time}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>{format(currentDate, "MMMM yyyy")}</Text>
              <Entypo name="select-arrows" size={12} color="black" />
            </View>
          </View>
          <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
            <DateComponent />
          </ScrollView>
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
  appointImgCon: {
    height: 100,
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  appointImageWrapper: {
    overflow: "hidden",
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  appointImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "#e7ebee",
  },
  appointDoc: {
    alignItems: "center",
  },
  appointDocName: {
    fontSize: 24,
    fontWeight: "700",
  },
  appointDocRole: {
    // Added this style
    fontSize: 16,
    fontWeight: "500",
  },
  appointDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  appointmentTitle: {
    fontWeight: "700",
    fontSize: 24,
  },
});
