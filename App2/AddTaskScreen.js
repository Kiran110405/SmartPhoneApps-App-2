import { View, Text, TextInput, Button, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  const DealSubmit = () => {
    console.log("User input:", inputText);
    setModalVisible(false);
    setInputText("");
  };
  return (
    <SafeAreaView style={styles.container}>
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
              onChangeText={setInputText}
            ></TextInput>
            <Button title="Add" onPress={DealSubmit} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
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
});
