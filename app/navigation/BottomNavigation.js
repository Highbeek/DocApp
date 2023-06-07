import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign, Fontisto, Octicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const isActiveScreen = (screenName) => {
    return route.name === screenName;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateToScreen("Home")}
        style={[
          styles.iconContainer,
          isActiveScreen("Home") ? styles.activeIconContainer : null,
        ]}
      >
        <Octicons name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Search")}
        style={[
          styles.iconContainer,
          isActiveScreen("Search") ? styles.activeIconContainer : null,
        ]}
      >
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Appoint")}
        style={[
          styles.iconContainer,
          isActiveScreen("Appoint") ? styles.activeIconContainer : null,
        ]}
      >
        <Fontisto name="bell" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Doc")}
        style={[
          styles.iconContainer,
          isActiveScreen("Doc") ? styles.activeIconContainer : null,
        ]}
      >
        <AntDesign name="user" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderColor: "#ccc",
    backgroundColor: "transparent",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  activeIconContainer: {
    backgroundColor: "blue",
  },
});

export default BottomNavigation;
