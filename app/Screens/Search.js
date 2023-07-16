import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { MaterialIcons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import DocList from "../components/docList";
import { styles } from "../styles.js/styles";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.inputContainer, styles.searchContainer]}>
        <TextInput
          placeholder="Search your Preferred Doctor"
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <DocList showHeads={false} randomize={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
