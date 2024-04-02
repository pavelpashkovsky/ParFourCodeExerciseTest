import { StyleSheet, TextInput } from "react-native";

interface ITaskInputProps {
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
}

export default function TaskInput({
  value,
  onChange,
  placeholder,
}: ITaskInputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 9,
    fontSize: 16,
    marginBottom: 10,
  },
});
