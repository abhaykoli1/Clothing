import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { colors, parameters } from "../../../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Styled } from "../../../Constants/Style";
export default function TrackOrder({ navigation }) {
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={"rgba(0,0,0,0)"} />
      <View style={Styled.HeaderCon}>
        <View style={Styled.Header}>
          <Ionicons
            onPress={() => navigation.navigate("ClientDrawer")}
            name="chevron-back"
            size={30}
            color={colors.IconColor}
          />
          <Text style={Styled.HeadText}>
            Order will be be picked up shortly
          </Text>
        </View>
      </View>
      <View style={styles.MainContainer}>
        {/* <MapView
          style={styles.map}
          region={{
            latitude: 27,
            longitude: 74,
            latitudeDelta: 0.005,
            longitudeDelta: 0.0075,
          }}
        /> */}
      </View>
      <View style={styles.Footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: colors.Grey5,
  },
  map: {
    width: parameters.ScreenWidth,
    height: parameters.ScreenHeight,
  },
  MainContainer: {
    flex: 1,
  },
  Text: {
    fontSize: 16,
    fontFamily: "gotham_M",
    color: colors.white,
  },
  Footer: {
    height: 180,
    paddingHorizontal: 20,
    backgroundColor: colors.BGcolor,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
