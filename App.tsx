import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import TaskListItem from "./components/TaskListItem";
import TaskInput from "./components/TaskInput";
import Button from "./components/Button";
import { useManageTasks } from "./hooks/useManageTasks";

export default function App() {
  const { taskList, onAddTask, onTaskChange, newTask } = useManageTasks();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TaskInput
          placeholder="Enter note"
          value={newTask}
          onChange={onTaskChange}
        />
        <Button label="Add" onPress={onAddTask} />
        <FlatList
          data={taskList}
          style={styles.list}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item, index }) => (
            <TaskListItem task={`${index + 1}. ${item}`} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexDirection: "column",
    padding: 16,
  },
  list: {
    marginTop: 10,
  },
});
