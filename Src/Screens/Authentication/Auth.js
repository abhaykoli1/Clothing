import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ThemeColors } from "../../Constants/Theme";
import { ButtonStyle } from "../../Constants/Style";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { SocialIcon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Login from "./Login";
import { useNavigation } from "@react-navigation/native";
export default function Auth() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ThemeColors.BGcolor(1),
      }}
    >
      <LinearGradient
        colors={["rgba(255,255,255,.2)", "rgba(0, 0,0, 1)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: responsiveScreenWidth(4),
        }}
      >
        <Image
          style={{
            borderRadius: 200,
            height: responsiveScreenHeight(20),
            width: responsiveScreenHeight(20),
            marginBottom: 30,
          }}
          source={require("../../../assets/Logo/Welcome-Logo.png")}
        />
        <Text
          style={{
            color: ThemeColors.Text,
            fontSize: 25,
            fontFamily: "FamilyB",
            marginBottom: 30,
            fontWeight: "bold",
          }}
        >
          GET YOUR FIT
        </Text>

        <TouchableOpacity
          style={[{ ...ButtonStyle.Button }, { backgroundColor: "white" }]}
          onPress={() => navigation.navigate("Drawer")}
        >
          <Text style={[{ ...ButtonStyle.BtnText }, { color: "black" }]}>
            Continue without SignIn
          </Text>
        </TouchableOpacity>

        <SocialIcon
          onPress={() => navigation.navigate("Login")}
          // iconColor={ThemeColors.IconColor}
          raised={false}
          light
          button
          fontStyle={{ color: "white" }}
          // loading={true}
          title="Continue With Phone Number"
          type="mobile-phone"
          iconStyle={{ color: "white" }}
          style={{
            width: "100%",
            borderRadius: 5,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "white",
            height: responsiveScreenHeight(6.1),
          }}
          // iconSize={}
        />
        <SocialIcon
          iconColor={ThemeColors.IconColor}
          raised={false}
          light
          button
          title="Continue With Google"
          type="google"
          style={{
            width: "100%",
            borderRadius: 5,
            height: responsiveScreenHeight(6.1),
          }}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({});
