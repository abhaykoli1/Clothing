import { Easing, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import { ThemeColors } from "../Constants/Theme";
import WishList from "../Screens/WishList";
import CartContent from "../Screens/Ordering/CartContent";
import Pay from "../Screens/Ordering/Pay";
import ScreenFromRight from "../Screens/Ordering/Example";

//
const Stack = createStackNavigator();
export default function InnerRoot() {
  const Openconfig = {
    animation: "timing",
    config: {
      duration: 200,
      //   stiffness: 120,
      damping: 15,
      mass: 1,
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
  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 3,
        backgroundColor: ThemeColors.BGcolor(1),
        borderWidth: 0,
        elevation: 0,
      }}
    >
      <Stack.Navigator
        screenOptions={{
          statusBarStyle: "light",
          // gestureEnabled: true,
          gestureDirection: "horizontal",
          headerShown: false,
          //
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
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="WishList" component={WishList} />
        <Stack.Screen name="CartContent" component={CartContent} />
        <Stack.Screen name="Pay" component={Pay} />
        <Stack.Screen name="ScreenFromRight" component={ScreenFromRight} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
