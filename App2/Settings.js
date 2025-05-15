import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { useReState } from "@raulpesilva/re-state";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [userInput, setUserInput] = useReState("input", "");

  return (
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
