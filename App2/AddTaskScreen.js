import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useReState } from "@raulpesilva/re-state";

export default function AddTaskScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [newTask, setnewTask] = useState([]);
  const [outPutText, setOutputText] = useReState("output", "");

  const [bgc] = useReState("bgc", "ffffff");

  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <Button title="Add New Task" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modallayer}>
          <View style={styles.modalView}>
            <Text style={styles.text}>Enter New Task</Text>
            <TextInput
              style={styles.Textinput}
              placeholder="Task Deadline"
              value={userInput}
              onChangeText={(t) => setUserInput(t)}
              onSubmitEditing={() => {
                setOutputText(userInput);
              }}
            ></TextInput>
            const [modalVisible, setModalVisible] = useState(false);
            <Button
              title="Submit"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "white",
    padding: 50,
    borderRadius: 10,
  },

  modallayer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalView: {
    margin: 30,
    backgroundColor: "#ffff",
    padding: 20,
    borderRadius: 20,
    gap: 10,
  },

  text: {
    margin: 10,
    fontSize: 20,
    textAlign: "center",
  },

  Textinput: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    width: "100%",
    margin: "auto",
    textAlign: "center",
  },
});
