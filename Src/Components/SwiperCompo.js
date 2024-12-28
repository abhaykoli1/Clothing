import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { Image } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../Constants/Colors";

export default function SwiperConpo() {
  return (
    <View style={{ marginTop: 20, paddingVertical: 0 }}>
      <Swiper autoplay>
        <Image
          source={require("../../assets/swiper1.jpg")}
          style={styles.slide}
        />

        <Image
          source={require("../../assets/swiper2.jpg")}
          style={styles.slide}
        />

        <Image
          source={require("../../assets/swiper3.jpg")}
          style={styles.slide}
        />
      </Swiper>
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
});
