import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import {
  AntDesign,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeColors } from "../../Constants/Theme";
import { colors } from "../../Constants/Colors";
import HeaderComponent from "../../Components/HeaderComponent";
import { StatusBar } from "expo-status-bar";
import { Styled } from "../../Constants/Style";
import Header from "../../Components/Header";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { BlurView } from "expo-blur";
const Profile = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <StatusBar style="dark" />
      <HeaderComponent Title={"ACCOUNTS"} Back={true} />
      {/* <HeaderComponent Title={"PROFILE"} /> */}
      <ScrollView style={[styles.MainContainer]}>
        <Text style={styles.CardTitle}>FOR MORE</Text>
        <View style={styles.card}>
          <Pressable style={styles.cardContent}>
            <AntDesign
              name="customerservice"
              size={25}
              color={colors.GreyText}
            />
            <Text style={styles.cardText}>Business Center</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.GreyText}
            />
          </Pressable>
          <Pressable style={styles.cardContent}>
            <AntDesign
              name="customerservice"
              size={25}
              color={colors.GreyText}
            />
            <Text style={styles.cardText}>Rewards</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.GreyText}
            />
          </Pressable>
          <Pressable style={styles.cardContent}>
            <MaterialIcons name="subscriptions" size={25} color={colors.Text} />
            <Text style={styles.cardText}>Subscriptions</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.Text}
            />
          </Pressable>
        </View>

        <Text style={styles.CardTitle}>MY ACCOUNT</Text>
        <View style={styles.card}>
          <Pressable style={styles.cardContent}>
            <MaterialIcons name="favorite" size={25} color={colors.Text} />
            <Text style={styles.cardText}>Favourites</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.Text}
            />
          </Pressable>
          <Pressable style={styles.cardContent}>
            <MaterialIcons name="payment" size={25} color={colors.Text} />
            <Text style={styles.cardText}>Payment Methods</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.Text}
            />
          </Pressable>
          <Pressable style={styles.cardContent}>
            <FontAwesome
              style={{ marginLeft: 5, marginRight: 6 }}
              name="map-marker"
              size={25}
              color={colors.Text}
            />
            <Text style={styles.cardText}>Map Your City</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.Text}
            />
          </Pressable>
        </View>

        <Text style={styles.CardTitle}>GENERAL</Text>
        <View style={styles.card}>
          <Pressable style={styles.cardContent}>
            <AntDesign name="customerservice" size={25} color={colors.Text} />
            <Text style={styles.cardText}>Help Center</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.Text}
            />
          </Pressable>
          <Pressable style={styles.cardContent}>
            <Ionicons name="settings-sharp" size={25} color={colors.Text} />
            <Text style={styles.cardText}>Settings</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.Text}
            />
          </Pressable>
          <Pressable style={styles.cardContent}>
            <FontAwesome name="language" size={25} color={colors.Text} />
            <Text style={styles.cardText}> Language</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.Text}
            />
          </Pressable>
          <Pressable style={styles.cardContent}>
            <MaterialIcons
              name="feedback"
              size={25}
              color={ThemeColors.GrayBG}
            />
            <Text style={styles.cardText}>Share Feedback</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.Text}
            />
          </Pressable>
          <Pressable style={styles.cardContent}>
            <MaterialIcons
              name="feedback"
              size={25}
              color={ThemeColors.GrayBG}
            />
            <Text style={styles.cardText}>Share Feedback</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={colors.Text}
            />
          </Pressable>
        </View>
        {/* <LogoutComponent/> */}
      </ScrollView>

      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, .4)", "rgba(0, 0, 0, .9)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: responsiveScreenHeight(8),
        }}
      ></LinearGradient>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  MainContainer: {
    flex: 1,
    paddingTop: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(4),
    backgroundColor: ThemeColors.BGcolor(1),
    // backgroundColor: "red",
  },
  CardTitle: {
    color: colors.Text,
    fontSize: responsiveFontSize(1.7),
    fontFamily: "FamilyM",
  },
  card: {
    backgroundColor: colors.cardbackground,
    paddingHorizontal: responsiveScreenWidth(4),
    borderRadius: responsiveScreenHeight(1),
    paddingVertical: responsiveScreenHeight(1),
    marginBottom: responsiveScreenHeight(2.3),
    marginTop: responsiveScreenHeight(1),
    elevation: 4,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText: {
    color: colors.Text,
    fontFamily: "FamilyL",
    paddingVertical: responsiveScreenHeight(1.8),
    fontSize: responsiveFontSize(2),
    flex: 1,
    paddingLeft: responsiveScreenWidth(4),
  },
  Footer: {
    backgroundColor: colors.cardbackground,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 2,
    marginBottom: 40,
    borderRadius: 5,
    elevation: 3,
    marginTop: 10,
  },
});
