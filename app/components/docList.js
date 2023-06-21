import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { MaterialIcons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { DocAppointment } from "../Constants";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles.js/styles";
import { Link } from "expo-router";

export default function DocList({ doctors }) {
  const navigation = useNavigation();

  const navigateToSearch = () => {
    navigation.navigate("Search");
  };
  const handleDoctorPress = (uid) => {
    navigation.navigate("DocCard", { uid: uid });
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heads}>
        <View style={styles.docHeader}>
          <Text style={styles.serviceText}>Book a Doctor</Text>
          <Text style={styles.subText}>
            Schedule an appointment with a physician.
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigateToSearch()}>
          <AntDesign name="right" size={14} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.doc} scrollEnabled={false}>
        {DocAppointment.map(({ name, role, star, rate, time, img, uid }) => (
          <Link key={uid} href={`/user/${uid}`} asChild>
            <Pressable
              style={styles.docContainer}
              onPress={() => handleDoctorPress(uid)}
            >
              <View style={styles.imgContainer}>
                <Image
                  source={img}
                  resizeMode="cover"
                  style={styles.docImage}
                />
              </View>
              <View style={styles.docDetails}>
                <Text style={styles.docName}>{name}</Text>
                <Text>{role}</Text>
                <View style={styles.starContainer}>
                  {star}
                  <Text style={styles.starText}>{rate}</Text>
                </View>
                <View style={styles.timeContainer}>
                  <SimpleLineIcons name="clock" size={12} color="black" />
                  <Text>{time}</Text>
                </View>
              </View>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
