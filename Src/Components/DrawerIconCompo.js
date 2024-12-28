import {
  Animated,
  Button,
  Easing,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { ThemeColors, ThemeColors2 } from "../Constants/Theme";

import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
export default function DrawerIconCompo({ onclick }) {
  return (
    <Pressable
      onPress={onclick}
      style={{
        position: "absolute",
        bottom: 0,
        right: 1,
        // left: 1,
        paddingTop: responsiveScreenHeight(2),
        paddingBottom: responsiveScreenHeight(1.4),
        paddingHorizontal: responsiveScreenWidth(9),
        zIndex: 1,
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: responsiveScreenHeight(2.8),
          height: responsiveScreenHeight(2.8),
        }}
        source={require("../../assets/Icons/Widget-outline-white.png")}
      />
      <Text
        style={{
          fontSize: responsiveFontSize(1),
          paddingTop: 1,
          color: ThemeColors.WHITE,
          fontFamily: "FamilyM",
        }}
      >
        Widget
      </Text>
    </Pressable>
  );
}
