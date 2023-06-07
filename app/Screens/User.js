import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { services } from "../Constants";
import Services from "../components/Services";
import { DocAppointment } from "../Constants";
import { useNavigation } from "@react-navigation/native";

const User = () => {
  const navigation = useNavigation();

  const navigateToDoc = () => {
    navigation.navigate("Doc");
  };
  const navigateToAppoint = () => {
    navigation.navigate("Appoint");
  };
  const navigateToSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imgIcon}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?cs=srgb&dl=pexels-craig-mckay-842980.jpg&fm=jpg",
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <MaterialIcons name="segment" size={24} color="#eee" />
        </View>
        <View style={styles.text}>
          <Text style={styles.headerText}>Hi, Jonathan</Text>
          <Text style={styles.subtitle}>
            Your health is in perfect condition!
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search ..."
            placeholderTextColor="#000000"
            style={styles.input}
            placeholderStyle={styles.placeholderText}
          />
          <MaterialIcons
            name="search"
            size={24}
            color="#157a6e"
            style={styles.searchIcon}
          />
        </View>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceText}>Services</Text>
        <FlatList
          horizontal
          data={services}
          renderItem={({ item }) => <Services item={item} />}
          style={styles.list}
        />
      </View>
      <View style={styles.heads}>
        <View style={styles.docHeader}>
          <Text style={styles.serviceText}>Book a Doctor</Text>
          <Text style={styles.subText}>
            Schedule an appointment with a physician.
          </Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="right" size={14} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.doc}>
        {DocAppointment.map(({ name, role, star, rate, time, img, uid }) => (
          <View key={uid} style={styles.docContainer}>
            <View style={styles.imgContainer}>
              <Image
                source={img}
                resizeMode="cover"
                style={{ width: 80, height: 80 }}
              />
            </View>
            <View style={styles.docDetails}>
              <Text style={styles.docText}>{name}</Text>
              <Text>{role}</Text>
              <View style={styles.starContainer}>
                {star}
                <Text style={styles.starText}>{rate}</Text>
              </View>

              <View style={{ flexDirection: "row", gap: 6 }}>
                <SimpleLineIcons name="clock" size={12} color="black" />
                <Text>{time}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#02685a",
    paddingHorizontal: 20,
    height: 270,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: "100%",
  },

  imgIcon: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 5,
    paddingVertical:5
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#cde1df",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  serviceText: {
    fontSize: 22,
    fontWeight: "700",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  subText: {
    paddingHorizontal: 20,
    color: "#333",
    fontWeight: "500",
  },
  heads: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 20,
    alignItems: "center",
  },
  doc: {
    paddingTop: 20,
  },
  docHeader: {},
  imgContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#e5e5e5",
    margin: 10,
  },
  docContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 20,
    alignItems: "flex-start",
    borderWidth: 0.3,
    marginVertical: 10,
    borderRadius: 15,
  },
  docDetails: {
    paddingVertical: 10,
  },
  docText: {
    fontSize: 22,
    fontWeight: "700",
  },
  starContainer: {
    flexDirection: "row",
    gap: 5,
  },
  starText: {
    fontWeight: 600,
  },
});
