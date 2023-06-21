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
import DocList from "../components/docList";
import { useRouter } from "expo-router";
import { styles } from "../styles.js/styles";

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
          <Text style={styles.headerText}>
            Hi, <Text style={styles.username}>Jonathan</Text>{" "}
          </Text>
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
      <DocList />
    </View>
  );
};

export default User;
