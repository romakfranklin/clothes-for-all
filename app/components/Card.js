import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Card = ({ name, image }) => {
  return (
    <View>
      <Image source={image} style={{ width: 225, height: 225 }} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Card;
