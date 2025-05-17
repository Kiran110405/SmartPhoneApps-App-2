import { View, Text, Button } from "react-native";
// import { useUserInput } from "../state/userInputState";
import { useState } from "react";
import { useReState } from "@raulpesilva/re-state";

export default function HomeScreen() {
  const [userInput, setUserInput] = useReState("input", "");
  const [outPutText, setOutputText] = useReState("output", "");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    ></View>
  );
}
