import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LoginStyle } from "../Constants/Style";

export default function TextInputCompo({
  keyboardType,
  Title,
  placeholder,
  value,
  onChangeText,
}) {
  return (
    <View>
      <Text style={LoginStyle.Text}>{Title}</Text>
      <TextInput
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={LoginStyle.TextInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
