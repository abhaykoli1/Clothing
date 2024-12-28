import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styled } from "../Constants/Style";
import {
  EvilIcons,
  Feather,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { colors, title } from "../Constants/Colors";
import { ThemeColors } from "../Constants/Theme";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from "react-native-responsive-dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { Icon } from "react-native-elements";
export default function HeaderComponent({ Title, type, Done, Back }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: responsiveScreenHeight(11),
        // backgroundColor: "rgba(144,144,144,1)",
        alignItems: "center",
      }}
    >
      <LinearGradient
        colors={[ThemeColors.PRIMARY(1), "rgba(0, 0,0, 0)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={Styled.LinearHeader}
      >
        <Text style={Styled.HeadText}>{Title}</Text>

        {Back == true ? (
          <SimpleLineIcons
            onPress={() => {
              navigation.goBack();
            }}
            name="arrow-right-circle"
            size={responsiveFontSize(3.4)}
            color={ThemeColors.IconColor}
          />
        ) : null}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({});
