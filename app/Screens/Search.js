import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, } from "react-native";
import DocList from "../components/docList";
import { styles } from "../styles.js/styles";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DocList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
