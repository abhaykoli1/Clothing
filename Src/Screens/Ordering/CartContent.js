import {
  StyleSheet,
  Text,
  View,
  Animated,
  Modal,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import HeaderComponent from "../../Components/HeaderComponent";
import ButtonComponent from "../../Components/ButtonComponent";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeColors, ThemeColors2 } from "../../Constants/Theme";
import { Styled } from "../../Constants/Style";
import { useNavigation } from "@react-navigation/native";
import {
  Entypo,
  Feather,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
export default function CartContent({ visible, onClose, navigation, onClick }) {
  return (
    <View style={Styled.ScreenContainer}>
      <View style={{ flex: 1 }}>
        <HeaderComponent Title={"CART"} type={"arrow-back"} Back={true} />
        <View style={styles.MainContainer}>
          <View
            style={{
              marginHorizontal: responsiveScreenWidth(4),
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: ThemeColors.Text,
                fontFamily: "FamilyM",
              }}
            >
              Total rs 400
            </Text>
            <ButtonComponent
              Title={"PROCEED TO BUY"}
              navigation={navigation}
              To={"Pay"}
            />
          </View>
        </View>
        <View style={styles.Footer}></View>
      </View>
      {/* Footer  */}
      <LinearGradient
        colors={[
          ThemeColors.linearColorMain(0),
          ThemeColors.linearColorMain(0.5),
          ThemeColors.linearColorMain(0.9),
        ]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: responsiveScreenHeight(7),
        }}
      ></LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: ThemeColors.BGcolor(1),
  },
  MainContainer: {
    flex: 1,
  },
  Footer: {
    justifyContent: "flex-end",
    marginHorizontal: 20,
  },
});
