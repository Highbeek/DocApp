import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { DocAppointment } from "../Constants";
import {
  Octicons,
  SimpleLineIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import DateComponent from "../components/Date";
import { useRouter, useSearchParams } from "expo-router";

export const DocCard = () => {
  const router = useRouter();
  const { uid } = useSearchParams();

  const goBack = () => {
    router.back();
  };

  const handleDoctorPress = (uid) => {
    navigation.navigate("DocCard", { uid });
  };

  // Find the selected doctor by uid
  const selectedDoctor = DocAppointment.find((doctor) => doctor.uid === uid);

  if (!selectedDoctor) {
    return (
      <SafeAreaView>
        <Text>Doctor not found!</Text>
      </SafeAreaView>
    );
  }
  const { img, name, role, star, rate, time, about } = selectedDoctor;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.docContainer}>
        <View style={styles.imgCon}>
          <View style={styles.imageWrapper}>
            <Image source={img} resizeMode="cover" style={styles.image} />
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.aboutHeader}>
            <Text style={styles.text}>{name}</Text>
            <Octicons name="bookmark" size={20} color="black" />
          </View>
          <Text>{role}</Text>
          <Text style={styles.aboutText}>{about}</Text>
          <View style={styles.rating}>
            <View style={styles.star}>{star}</View>
            <Text style={styles.starText}>{rate}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <SimpleLineIcons name="clock" size={12} color="black" />
            <Text>{time}</Text>
          </View>
          <View style={styles.appointment}>
            <Text style={{ fontWeight: "700", fontSize: 24 }}>Appointment</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>January 2023</Text>
              <Entypo name="select-arrows" size={12} color="black" />
            </View>
          </View>
          <View>
            <DateComponent />
          </View>
        </View>
        <Pressable onPress={goBack} style={styles.back}>
          <AntDesign name="left" size={20} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  docContainer: {
    flex: 1,
    backgroundColor: "#e7ebee",
  },
  imgCon: {
    height: "65%",
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  imageWrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#e7ebee",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  section: {
    flex: 1,
    height: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "#F9FBFC",
    paddingHorizontal: 20,
    position: "absolute",
    top: "55%",
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
  },
  aboutHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
  },
  rating: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  aboutText: {
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 5,
  },
  star: {
    flexDirection: "row",
  },
  starText: {
    fontWeight: "600",
  },
  appointment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  back: {
    backgroundColor: "#fff",
    borderRadius: 100,
    position: "absolute",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    bottom: 20,
    left: 20,
  },
  backText: {
    marginLeft: 10,
  },
});

export default DocCard;
