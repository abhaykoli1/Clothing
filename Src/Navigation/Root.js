import React from "react";
import {
  Easing,
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Header, Icon } from "react-native-elements";
// screens
import Drawer from "./Drawer";
import PersonalInfo from "../Screens/Profile/PersonalInfo";
import CartContent from "../Screens/Ordering/CartContent";
import AnimatedFlatList from "../SSSSSSSSSSSSSSSSSSSsss/AnimatedFlatList";
import Auth from "../Screens/Authentication/Auth";
import Login from "../Screens/Authentication/Login";
import Otp from "../Screens/Authentication/Otp";

//
const Stack = createStackNavigator();
export default function Root() {
  const [loaded, error] = useFonts({
    Bold700: require("../../assets/Font/Bold700.ttf"),
    FamilyL: require("../../assets/fonts/GothamLight.ttf"),
    FamilyLB: require("../../assets/fonts/GothamBook.ttf"),
    // FamilyLB: require("../../assets/fonts/GothamMedium.ttf"),
    FamilyM: require("../../assets/fonts/GothamMedium.ttf"),
    FamilyB: require("../../assets/fonts/GothamBold.ttf"),
  });

  const Openconfig = {
    animation: "timing",
    config: {
      duration: 250,
      easing: Easing.linear,
    },
  };
  const Closeconfig = {
    animation: "timing",
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };
  //
  const CustomHeader = ({ title, navigation, onPress, onRightPress }) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          backgroundColor: "red",
          height: 50,
          marginTop: 50,
          width: 60,
        }}
      ></Pressable>
      // <Header
      //   leftComponent={
      // <TouchableOpacity onPress={onBackPress}>
      //       <Icon name="arrow-back" />
      //     </TouchableOpacity>
      //   }
      //   centerComponent={{ text: title, style: { fontSize: 18 } }}
      //   rightComponent={
      //     <TouchableOpacity onPress={onRightPress}>
      //       <Icon name="menu" />
      //     </TouchableOpacity>
      //   }
      // />
    );
  };

  const HomeScreen = ({ navigation }) => {
    const handleBackPress = () => {
      console.log("Back button pressed");
      handleRightPress();
    };

    const handleRightPress = () => {
      console.log("Right button pressed");
      // Add your logic here
    };

    return (
      <View>
        <CustomHeader
          title="Home Screen"
          navigation={navigation}
          onPress={handleBackPress}
          onRightPress={handleRightPress}
        />
        {/* Your screen content here */}

        <Button
          title="go to Auth"
          onPress={() => navigation.navigate("Auth")}
        />
      </View>
    );
  };

  const DetailsScreen = ({ route }) => {
    console.log(route);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Details Screen</Text>
        <Text>
          Name: {route.params.name} {route.params.path}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, paddingBottom: -30 }}>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          statusBarStyle: "light",
          gestureEnabled: true,
          // gestureDirection: "horizontal",
          headerShown: false,
          transitionSpec: {
            open: Openconfig,
            close: Closeconfig,
          },
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen name="AnimatedFlatList" component={AnimatedFlatList} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
