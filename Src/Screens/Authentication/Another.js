import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Another() {
  const fun = () => {
    // const result =
    global.additionFunction(5, 5);
    // console.log("result", result); // Output: 5
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          fun();
        }}
      >
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
