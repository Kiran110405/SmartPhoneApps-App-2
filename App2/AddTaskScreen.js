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

export default function AddTaskScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [newTask, setnewTask] = useState([]);

  useEffect(() => {
    setnewTask((previous) => [...previous, outputText]);
  }, [outputText]);

  const DealSubmit = () => {
    console.log("User input:", inputText);
    setModalVisible(false);
    setInputText("");
  };
  return (
    <View style={styles.container}>
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
              placeholder="Your New Task..."
              value={inputText}
              onChangeText={(t) => setInputText(t)}
              onSubmitEditing={() => {
                setOutputText(inputText);
              }}
            ></TextInput>
            <Button title="Add" onPress={DealSubmit} />
          </View>
        </View>
      </Modal>
      <View>
        <FlatList
          style={{
            width: "100%",
            borderWidth: 1,
            width: "100%",
            borderWidth: 5,
          }}
          data={newTask}
          renderItem={({ item }) => (
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                backgroundColor: "grey",
                color: "white",
                padding: 10,
                marginTop: 10,
              }}
            >
              {item}
            </Text>
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "white",
    padding: 30,
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
    width: 200,
    margin: 10,
    textAlign: "center",
  },
});
