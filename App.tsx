import { SafeAreaView } from "react-native-safe-area-context";
import TabRoutes from "./src/routes/tab.routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
