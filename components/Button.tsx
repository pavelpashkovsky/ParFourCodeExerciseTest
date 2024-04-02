import { StyleSheet, Text, Pressable } from "react-native";

interface IButtonProps {
  onPress: () => void;
  label: string;
}

export default function Button({ onPress, label }: IButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0600FF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonLabel: {
    color: "white",
    fontWeight: "bold",
  },
});
