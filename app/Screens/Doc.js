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
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import DocCard from "../user/[uid]";

const Doc = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const isDoctorSelected = false;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {!isDoctorSelected ? (
        <SafeAreaView style={styles.noDoctorContainer}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/981306794/vector/default-placeholder-doctor-half-length-portrait.jpg?s=612x612&w=0&k=20&c=Mo2O-4kvF02A18nGleF-an5xY6heTJPh0By5A-naf3g=",
            }}
            resizeMode="cover"
            style={styles.noDoctorImage}
          />
          <Text style={styles.noDoctorText}>
            Please select your doctor so you can book appointments.
          </Text>
        </SafeAreaView>
      ) : (
        <View>
          {" "}
          <DocCard />
        </View>
      )}
      <Pressable onPress={goBack} style={styles.back}>
        <AntDesign name="left" size={20} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noDoctorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginHorizontal: 40,
    marginTop: 20,
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
});

export default Doc;
