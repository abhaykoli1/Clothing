import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { ThemeColors } from "../Constants/Theme";
import HeaderComponent from "../Components/HeaderComponent";
import { Styled } from "../Constants/Style";

export default function Explore() {
  return (
    <View style={Styled.ScreenContainer}>
      <HeaderComponent Title={"Explore"} Back={true} />

      {/* Footer  */}
      <LinearGradient
        colors={[
          ThemeColors.linearColorMain(0),
          ThemeColors.linearColorMain(0.5),
          ThemeColors.linearColorMain(0.9),
        ]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: responsiveScreenHeight(7),
        }}
      ></LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({});
