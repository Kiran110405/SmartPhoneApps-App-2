import { View, Text, Button } from "react-native";
import { useReState } from "@raulpesilva/re-state";
export default function HomeScreen() {
  const [newTask, setnewTask] = useReState();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text></Text>
    </View>
  );
}
