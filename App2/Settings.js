import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  Button,
  Switch,
} from "react-native";
import React, { useState } from "react";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Button
          title="Theme"
          onPress={() => {
            setModalVisible(true);
          }}
        ></Button>
      </SafeAreaView>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            backgroundColor: "#ff7777cc",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={[
              styles.container,
              { backgroundColor: isEnabled ? "#131313" : "#fff" },
            ]}
          >
            <Text style={{ color: isEnabled ? "#fff" : "#000", fontSize: 24 }}>
              Switch demo
            </Text>
            <Switch
              trackColor={{ false: "gray", true: "#007AFF" }}
              thumbColor={isEnabled ? "white" : "#007AFF"}
              onValueChange={() => setIsEnabled((bool) => !bool)}
              value={isEnabled}
              style={{ margin: 15 }}
            ></Switch>
          </View>
          <Button title="Done" onPress={() => setModalVisible(false)}></Button>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({});
