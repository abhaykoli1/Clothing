import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styled } from "../Constants/Style";
import { Feather } from "@expo/vector-icons";

export default function Header({ Title, Type }) {
  return (
    <View>
      <View
        style={{
          height: 95,
          paddingLeft: 70,
          paddingBottom: 6,
          alignItems: "flex-end",
          flexDirection: "row",
        }}
      >
        <Text style={Styled.HeadText}>{Title}</Text>
        <Feather
          name={Type}
          size={30}
          color={"gray"}
          style={{ paddingRight: 15 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
