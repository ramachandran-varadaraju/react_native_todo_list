import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  // const taskInput = useRef();

  const taskInputChangehandler = (enteredTask) => {
    setTask(enteredTask);
  };

  const addTaskHandler = () => {
    Keyboard.dismiss();
    setTasks((prevState) => {
      return [{ id: Math.random().toString(), task: task }, ...prevState];
    });

    setTask("");
  };

  const completeTaskHandler = (taskId) => {
    setTasks((prevState) => {
      return prevState.filter((item) => item.id !== taskId);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.taskTitle}>Today's tasks</Text>
        <FlatList
          style={styles.items}
          data={tasks}
          renderItem={(itemData) => (
            <Task onComplete={completeTaskHandler} itemData={itemData} />
          )}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          value={task}
          onChangeText={taskInputChangehandler}
          // ref={taskInput}
          style={styles.input}
          placeholder="Write a task"
        />
        <TouchableOpacity onPress={addTaskHandler}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    padding: 80,
    paddingHorizontal: 20,
    // backgroundColor: "lightgreen",
    height: "85%",
    overflow: "scroll",
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
    // marginBottom: 15,
    // backgroundColor: "lightgreen",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    width: 250,
    borderColor: "#C0C0C0",
    borderWidth: 2,
    fontSize: 16,
  },
  addWrapper: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 24,
  },
});
