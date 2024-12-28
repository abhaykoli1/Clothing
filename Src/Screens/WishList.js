import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import { ThemeColors } from "../Constants/Theme";
import HeaderComponent from "../Components/HeaderComponent";
import { LinearGradient } from "expo-linear-gradient";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { Styled } from "../Constants/Style";

export default function WishList() {
  return (
    <View style={Styled.ScreenContainer}>
      <HeaderComponent Title={"WISHLIST"} Back={true} />
      <ScrollView style={{ flex: 1 }}>
        {/* <View
          style={{
            backgroundColor: "lightblue",
            marginTop: 50,
            height: 600,
            width: "80%",
          }}
        ></View> */}
        {/* <View
          style={{
            backgroundColor: "red",
            height: 500,
            marginTop: 20,
            width: "80%",
          }}
        >
          <HeaderComponent Title={"WISHLIST"} Back={true} />
        </View> */}
      </ScrollView>

      {/* Footer  */}
    </View>
  );
}

const styles = StyleSheet.create({});
