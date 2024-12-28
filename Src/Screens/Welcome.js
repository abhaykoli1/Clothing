import {
  Pressable,
  StyleSheet,
  Text,
  View,
  AppState,
  Linking,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ThemeColors } from "../Constants/Theme";
import { LinearGradient } from "expo-linear-gradient";
import InnerRoot from "../Navigation/InnerRoot";
import Root from "../Navigation/Root";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";

//
export default function Welcome({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      // Linking.openURL("Navig");
      // navi;
    }, 3000); // navigate to new screen after 3 seconds
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ThemeColors.BGcolor(1),
      }}
    >
      <Image
        style={{
          height: responsiveScreenHeight(30),
          width: responsiveScreenHeight(30),
        }}
        source={require("../../assets/Logo/Welcome-Logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
