import React, { useContext } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import {
  Octicons,
  SimpleLineIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import DateComponent from "../components/Date";
import { useRouter } from "expo-router";
import { DoctorsContext } from "../hook/docsContext";

const { width, height } = Dimensions.get("window");

const Doc = () => {
  const router = useRouter();
  const { selectedDoc } = useContext(DoctorsContext);

  const goBack = () => {
    router.back();
  };

  if (!selectedDoc) {
    return (
      <SafeAreaView style={styles.noDoctorContainer}>
        <View style={styles.noDocView}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/981306794/vector/default-placeholder-doctor-half-length-portrait.jpg?s=612x612&w=0&k=20&c=Mo2O-4kvF02A18nGleF-an5xY6heTJPh0By5A-naf3g=",
            }}
            resizeMode="cover"
            style={styles.noDoctorImage}
          />
          <Text style={styles.noDoctorText}>
            To proceed with booking appointments, kindly choose your preferred
            doctor.
          </Text>
        </View>
        <Pressable onPress={goBack} style={styles.back}>
          <AntDesign name="left" size={20} color="black" />
        </Pressable>
      </SafeAreaView>
    );
  }

  const { img, name, role, star, rate, time, about } = selectedDoc;

  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.notch} />
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
              <Text style={{ fontWeight: "700", fontSize: 24 }}>
                Appointment
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text>January 2023</Text>
                <Entypo name="select-arrows" size={12} color="black" />
              </View>
            </View>
            <View>
              <DateComponent />
            </View>
          </View>
        </View>
        <Pressable onPress={goBack} style={styles.back}>
          <AntDesign name="left" size={20} color="black" />
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7ebee",
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  notch: {
    width,
    height: StatusBar.currentHeight,
    backgroundColor: "#000",
  },
  docContainer: {
    flex: 1,
    backgroundColor: "#F9FBFC",
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
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    position: "absolute",
    top: "55%",
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
  },
  aboutHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    marginTop:50
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
    left: 20,
    top:50
  },
  backText: {
    marginLeft: 10,
  },
  noDoctorContainer: {
    flex: 1,
    marginTop:50
  },
  noDocView: {
    marginVertical: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  noDoctorImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  noDoctorText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default Doc;
