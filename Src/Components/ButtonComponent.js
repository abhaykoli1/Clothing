import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ButtonStyle, Styled } from "../Constants/Style";
// import { Styled } from "../Constants/Style";
//
export default function ButtonComponent({ Title }) {
  return (
    <View>
      <TouchableOpacity
        // onPress={() => navigation.navigate(To)}
        style={ButtonStyle.Button}
      >
        <Text style={ButtonStyle.BtnText}>{Title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
