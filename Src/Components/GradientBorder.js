import React from "react";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientBorder = () => {
  return (
    <LinearGradient
      colors={["#ff69b4", "#ff69b4", "#33cc33"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderWidth: 5,
        // borderColor: "red",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Image
        source={{ uri: "https://example.com/image.jpg" }}
        style={{ width: 300, height: 300 }}
      />
    </LinearGradient>
  );
};

export default GradientBorder;
