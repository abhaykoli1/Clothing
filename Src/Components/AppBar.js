import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

export default function AppBar(Title) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title={Title} />
      {/* <Appbar.Action icon={Icon1} onPress={() => {}} /> */}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({});
