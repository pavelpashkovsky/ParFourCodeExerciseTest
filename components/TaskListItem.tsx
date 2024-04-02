import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ITaskListItemProps {
  task: string;
}

export default function TaskListItem({ task }: ITaskListItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D8D8D8",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8
  },
  text: {
    fontSize: 16
  }
});
