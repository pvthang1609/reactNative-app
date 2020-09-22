import React from "react";
import Unicorn from "../assets/img/unicorn.png";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Item(props) {
  return (
    <View style={styles.item} accessibilityRole="link">
      <Image style={styles.imageIcon} source={Unicorn} />
      <Text style={styles.item__title}>{props.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ccc",
    margin: 5,
    flexDirection: "row",
    borderRadius: 10,
  },
  imageIcon: {
    marginLeft: 10,
    marginRight: 10,
    width: 60,
    height: 60,
  },
  item__title: {
    color: "#f2a400",
    fontSize: 20,
    fontWeight: "bold",
  },
});
