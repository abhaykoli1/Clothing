import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { ThemeColors } from "../../Constants/Theme";
import TextInputCompo from "../../Components/TextInputCompo";
import ButtonComponent from "../../Components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { ButtonStyle } from "../../Constants/Style";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GoBackLeftCompo from "../../Components/GoBackLeftCompo";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ThemeColors.WHITE,
      }}
    >
      <View
        style={{
          flex: 0.7,
          backgroundColor: ThemeColors.WHITE,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/Images/Login.jpg")}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <GoBackLeftCompo color={"black"} />
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.7)", "rgba(0,0,0,.9)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          paddingTop: responsiveScreenHeight(5),
          paddingHorizontal: responsiveScreenWidth(4),
        }}
      >
        <View
          style={{
            backgroundColor: "#2A2A2A",
            height: responsiveScreenHeight(5),
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomWidth: 1.5,
            // borderColor: "red",
            borderColor: "gray",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              paddingLeft: 15,
              color: ThemeColors.WHITE,
              fontSize: 15,
              fontFamily: "FamilyB",
            }}
          >
            ENTER PHONE NUMBER
          </Text>
        </View>
        <View
          style={{
            backgroundColor: ThemeColors.cardbackground,
            height: responsiveScreenHeight(6),
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            flexDirection: "row",
            marginTop: -1,
          }}
        >
          <View
            style={{
              width: "20%",
              borderColor: "gray",
              borderRightWidth: 0.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: ThemeColors.GreyText,
              }}
            >
              91+
            </Text>
          </View>
          <TextInput
            style={{
              flex: 1,
              paddingLeft: 15,
              color: ThemeColors.Text,
              fontSize: 15,
              letterSpacing: 1,
            }}
            placeholder="Phone number"
            placeholderTextColor={ThemeColors.GreyText}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Otp")}
          style={ButtonStyle.Button}
        >
          <Text style={ButtonStyle.BtnText}>SEND CODE</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({});
