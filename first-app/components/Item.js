import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

export default function Item(props) {
  return (
    <View style={styles.item} accessibilityRole="link">
      <View style={{ flex: 1, flexDirection: 'row', height: 50, width: '100%' }}>
        <Image style={styles.imageIcon} source={props.src} />
        <Text style={styles.item__title}>{props.title}</Text>
      </View>
      <Button title='Click me..!!' />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 150,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: "#ccc",
    marginBottom: 10,
    flexDirection: "column",
    borderRadius: 10,
  },
  imageIcon: {
    marginLeft: 20,
    marginRight: 20,
    width: 60,
    height: 60,
  },
  item__title: {
    height: 50,
    color: "#f2a400",
    fontSize: 20,
    fontWeight: "bold",
  },
});
