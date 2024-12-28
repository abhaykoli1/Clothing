import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { ThemeColors } from "../Constants/Theme";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

export default function GoBackLeftCompo({ color }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        alignItems: "flex-start",
        position: "absolute",
        left: responsiveScreenWidth(4),
        top: responsiveScreenHeight(6),
      }}
    >
      <Icon
        onPress={() => navigation.goBack()}
        name="arrow-back"
        size={30}
        color={color}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
