import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../../../Constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function Congrats({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("TrackOrder");
    }, 3000);
  }, []);
  //
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={colors.PRIMARY} />
      <View style={styles.Main}>
        <Text style={styles.HeadText}>Congratulations!</Text>
        <Text style={styles.GreyText}>You sucessfully maked a payment,</Text>
        <Text style={styles.GreyText}> enjoy our service!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.BGcolor,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  Main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  HeadText: {
    fontFamily: "FamilyB",
    fontSize: 28,
    color: colors.PRIMARY,
    alignSelf: "center",
    marginBottom: 25,
  },
  GreyText: {
    marginHorizontal: 40,
    fontSize: 14,
    fontFamily: "FamilyM",
    color: colors.GreyText,
    // alignSelf: "center",
    marginTop: 10,
  },
});
