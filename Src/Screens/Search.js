import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import HomeHeader from "../Components/HomeHeader";
import { ThemeColors, ThemeColors2 } from "../Constants/Theme";
import { LinearGradient } from "expo-linear-gradient";
import { Styled } from "../Constants/Style";
import { EvilIcons, Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Modal } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Search({ visible, onClose, ani }) {
  const navigation = useNavigation();
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <StatusBar backgroundColor="white" />
      <Pressable
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          height: "100%",
        }}
        onPress={onClose}
      >
        <Animated.View
          style={{
            opacity: (ani = { ani }),
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
              },
            ],
          }}
        >
          <Pressable
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "20%",
              // backgroundColor: "white",
            }}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                borderRadius: 5,
                justifyContent: "flex-start",
                borderWidth: 1,
                borderColor: ThemeColors2.Grey1,
                marginRight: responsiveScreenWidth(3.5),
                flex: 1,
              }}
            >
              <FontAwesome6
                onPress={() => navigation.navigate("Search")}
                style={{
                  paddingHorizontal: 12,
                }}
                name="searchengin"
                size={responsiveFontSize(3)}
                color={ThemeColors2.Grey1}
              />
              <TextInput
                placeholder="Search"
                placeholderTextColor={"gray"}
                style={{
                  color: "white",
                  // backgroundColor: "red",
                  flex: 1,
                  marginRight: 10,
                  paddingVertical: 2,
                }}
              />
            </View>

            <Feather
              onPress={() => navigation.goBack()}
              name="arrow-right-circle"
              size={32}
              color={"gray"}
            />
          </Pressable>
          {/* </LinearGradient> */}
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  Header: {
    width: "100%",
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: responsiveScreenHeight(5.5),
    paddingHorizontal: 15,
    // paddingBottom: 10,
    height: responsiveScreenHeight(11),
    // paddingBottom: responsiveScreenHeight(1),
    alignItems: "center",
  },
});
