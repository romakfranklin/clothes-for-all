import React, { cloneElement } from "react";
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text></Text>

        <View style={styles.search}>
          <Text>Search</Text>
          <Ionicons name="ios-search" size={20} color="black" />
        </View>
        <FontAwesome5 name="filter" size={21} color="black" />
      </View>
      <Text style={styles.title}>Clothing For All</Text>
      <View style={styles.box2}></View>
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
    height: "10%",
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
    marginRight: 20,
    marginLeft: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
  },
  box2: {
    height: 75,
    width: "100%",
    backgroundColor: "#9080F9",
    marginTop: 510,
  },
});
