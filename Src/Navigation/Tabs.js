import { Easing, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../Screens/Dashboard";
import Profile from "../Screens/Profile/Profile";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { ThemeColors } from "../Constants/Theme";
import CartContent from "../Screens/Ordering/CartContent";
import Explore from "../Screens/Explore";

const Tab = createBottomTabNavigator();
export default function Tabs({ route, navigation }) {
  const [Focused, setFocused] = useState(0);

  console.log();
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            borderColor: "rgba(0,0,0,0)",
            backgroundColor: "rgba(0,0,0,0)",
            // backgroundColor: "lightblue",
            borderWidth: 0,
            elevation: 0,
          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let ImageName;
            let label;
            if (route.name === "Dashboard") {
              label = "Home";
              s = 3;
              ImageName = focused
                ? require("../../assets/Icons/home-filled-white.png")
                : require("../../assets/Icons/home-outline-white.png");
            } else if (route.name === "Explore") {
              label = "Explore";
              s = 3;
              ImageName = focused
                ? require("../../assets/Icons/compass-filled-white.png")
                : require("../../assets/Icons/compass-outline-white.png");
            } else if (route.name === "CartContent") {
              label = "Shoping";
              s = 3;
              ImageName = focused
                ? require("../../assets/Icons/s-bag-filled-white.png")
                : require("../../assets/Icons/s-bag-outline-white.png");
            } else if (route.name === "Profil") {
              label = "Acounts";
              s = 3;
              ImageName = focused
                ? require("../../assets/Icons/user-filled-white.png")
                : require("../../assets/Icons/user-outline-white.png");
            }
            return (
              <View style={styles.Icon}>
                <Image
                  style={{
                    width: responsiveScreenHeight(2.8),
                    height: responsiveScreenHeight(2.8),
                  }}
                  source={ImageName}
                />

                <Text style={styles.TabLabel}>{label}</Text>
              </View>
            );
          },
          tabBarActiveTintColor: ThemeColors.WHITE,
          tabBarInactiveTintColor: ThemeColors.GreyText,
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="CartContent" component={CartContent} />
        {/* <Tab.Screen name="Profile" component={Profile} /> */}
        {/* <Tab.Screen name="InnerRoot" component={InnerRoot} /> */}
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "red",
  },
  Icon: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
  },
  TabLabel: {
    fontSize: responsiveFontSize(1.2),
    fontFamily: "FamilyM",
    color: ThemeColors.Text,
    // backgroundColor: "red",
    width: responsiveScreenWidth(15),
    textAlign: "center",
  },
});
