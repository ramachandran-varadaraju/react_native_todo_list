import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <TouchableOpacity
      onLongPress={props.onComplete.bind(this, props.itemData.item.id)}
    >
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.itemSquare}></View>
          <Text style={styles.itemText}>{props.itemData.item.task}</Text>
        </View>
        <View style={styles.itemCircle}></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemSquare: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    marginRight: 16,
  },
  itemText: {
    maxWidth: "80%",
  },
  itemCircle: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#55BCF6",
  },
});

export default Task;
