import React, { useContext } from "react";
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
import { useRouter } from "expo-router";
import { DoctorsContext } from "../hook/docsContext";

export default function DocList({ showHeads, randomize }) {
  const { docAppointment, selectedDoc, handleDoctor } =
    useContext(DoctorsContext);
  const navigation = useNavigation();
  const router = useRouter();
  const doctorsToShow = randomize
    ? DocAppointment.sort(() => 0.5 - Math.random()).slice(0, 2)
    : DocAppointment;

  const navigateToSearch = () => {
    navigation.navigate("Search");
  };

  const handleDoctorPress = (doc) => {
    handleDoctor(doc);
  };

  return (
    <SafeAreaView style={styles.container}>
      {showHeads && (
        <View style={styles.heads}>
          <View style={styles.docHeader}>
            <Text style={styles.serviceText}>Book a Doctor</Text>
            <Text style={styles.subText}>
              Schedule an appointment with a physician.
            </Text>
          </View>
          <TouchableOpacity onPress={navigateToSearch}>
            <AntDesign name="right" size={14} color="black" />
          </TouchableOpacity>
        </View>
      )}
      <ScrollView style={styles.doc} scrollEnabled={false}>
        {doctorsToShow.map(({ name, role, star, rate, time, img, uid }) => (
          <TouchableOpacity
            key={uid}
            style={[
              styles.docContainer,
              selectedDoc && selectedDoc.uid === uid && styles.selectedDoctor,
            ]}
            onPress={() =>
              handleDoctorPress({ uid, name, role, star, rate, time, img })
            }
          >
            <View style={styles.imgContainer}>
              <Image source={img} resizeMode="cover" style={styles.docImage} />
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
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
