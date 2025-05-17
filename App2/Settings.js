import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useReState } from "@raulpesilva/re-state";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [userInput, setUserInput] = useReState("input", "");

  const [bgc, setBgc] = useReState("bgc", "fff");
  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 24, padding: 10 }}>Settings Screen</Text>
      <Button title="Purple" onPress={() => setBgc("#7777ff77")}></Button>
      <Button title="Reset" onPress={() => setBgc("#ffffff")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
