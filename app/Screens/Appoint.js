import React, { useContext } from "react";
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
import { DoctorsContext } from "../hook/docsContext";

const Appoint = () => {
  const { selectedDoc } = useContext(DoctorsContext);

  const currentDate = new Date();
  const { img, name, role, time } = selectedDoc || {};

  const defaultImageSource =
    "https://media.istockphoto.com/id/981306794/vector/default-placeholder-doctor-half-length-portrait.jpg?s=612x612&w=0&k=20&c=Mo2O-4kvF02A18nGleF-an5xY6heTJPh0By5A-naf3g=";

  const imageUrl = img ? img : defaultImageSource;
  return (
    <View style={styles.container}>
      <View style={styles.appointContainer}>
        <View style={styles.appointImgCon}>
          <View style={styles.appointImageWrapper}>
            <Image
              source={imageUrl}
              resizeMode="contain"
              style={styles.appointImg}
            />
          </View>
        </View>
        <View style={styles.appointDoc}>
          <Text style={styles.appointDocName}>
            {name || "No doctor selected"}
          </Text>
          <Text style={styles.appointDocRole}>{role || "Role"}</Text>
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
  noDoctorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noDoctorImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  noDoctorText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
});
