import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import User from "./Screens/User";
import Doc from "./Screens/Doc";
import Appoint from "./Screens/Appoint";
import Search from "./Screens/Search";
import BottomNavigation from "./navigation/BottomNavigation";
import DoctorsContextProvider from "./hook/docsContext";

const Stack = createNativeStackNavigator();

export default function Page() {
  return (
    <DoctorsContextProvider>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={User}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Doc"
            component={Doc}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Appoint"
            component={Appoint}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <BottomNavigation />
      </View>
    </DoctorsContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
});
