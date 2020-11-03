import React, { cloneElement } from "react";
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <FontAwesome5 name="filter" size={24} color="black" />
        <Text></Text>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <Ionicons name="ios-search" size={24} color="black" />
      </View>
      <Text style={styles.title}>Clothing For All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    // marginStart: 160,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 0,
    textAlign: "center",
  },
  box: {
    height: "30%",
    width: "100%",
    padding: 20,
    margin: 0,
    backgroundColor: "#9080F9",
    flexDirection: "row",
  },
  search: {
    backgroundColor: "#CBCBCB",
    height: 25,
    width: 150,
    marginRight: 10,
    marginLeft: 100,
  },
});
