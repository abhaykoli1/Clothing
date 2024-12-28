import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Src/Navigation/Navigation";
import Welcome from "./Src/Screens/Welcome";
export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
