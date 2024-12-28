import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { ThemeColors } from "../Constants/Theme";
import HomeHeader from "../Components/HomeHeader";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { LinearGradient } from "expo-linear-gradient";
import SwiperConpo from "../Components/SwiperCompo";
import { Styled } from "../Constants/Style";
import Type from "../Components/TypeList";
import GradientBorder from "../Components/GradientBorder";
import DrawerIconCompo from "../Components/DrawerIconCompo";
import { colors } from "../Constants/Colors";

export default function Dashboard() {
  const navigation = useNavigation();
  const [Focused, setFocused] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // <Drawer />;
  return (
    <View style={Styled.ScreenContainer}>
      <StatusBar style="light" />
      <ScrollView
        stickyHeaderIndices={[2]}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <View
          style={{
            paddingVertical: responsiveScreenWidth(3),
            backgroundColor: colors.cardbackground,
            height: responsiveScreenHeight(28),
            justifyContent: "flex-start",
            marginHorizontal: 15,
            borderRadius: 5,
            paddingHorizontal: 15,
            marginTop: 20,
          }}
        >
          <Image
            source={require("../../assets/Images/hoodie.jpg")}
            style={{ height: "80%", width: "100%", borderRadius: 5 }}
          />
        </View>
        <View style={{ marginTop: 20 }}></View>

        <View style={styles.Partition}>
          {/* <View style={{ zIndex: 1 }}> */}
          <Text
            style={{
              fontFamily: "FamilyM",
              color: ThemeColors.WHITE,
              fontSize: responsiveFontSize(1.7),
            }}
          >
            For You{""}
          </Text>
          {/* </View> */}
          <Pressable>
            <Text
              style={{
                fontFamily: "FamilyM",
                color: ThemeColors.WHITE,
                fontSize: responsiveFontSize(1.7),
              }}
            >
              View More{" >"}
            </Text>
          </Pressable>
        </View>

        {/* <GradientBorder /> */}
      </ScrollView>
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
  slide: {
    height: responsiveScreenHeight(20),
    width: "auto",
    borderRadius: 10,
    marginHorizontal: 15,
  },
  Partition: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
});
