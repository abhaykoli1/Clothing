import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styled } from "../../Constants/Style";
import { colors } from "../../Constants/Colors";
import HeaderComponent from "../../Components/HeaderComponent";
import TextInputCompo from "../../Components/TextInputCompo";
import { Pressable } from "react-native";
export default function PersonalInfo({ navigation }) {
  return (
    <View style={styles.Container}>
      <HeaderComponent
        Title={"Profile Info"}
        // navigation={navigation}
        Back={true}
      />
      <View style={styles.MainContainer}>
        <View style={styles.Form}>
          <TextInputCompo Title={"NAME"} placeholder={"Jhon"} />
          <TextInputCompo Title={"EMAIL"} placeholder={"Jhon@gmail.com"} />
          <TextInputCompo
            Title={"PHONE NUMBER"}
            placeholder={"+91 9511564276"}
          />
        </View>
      </View>
      <View style={styles.Footer}>
        <Pressable onPress={() => navigation.goBack()} style={Styled.Button}>
          <Text style={Styled.BtnText}>SAVE</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.BGcolor,
  },
  MainContainer: {
    flex: 1,
    paddingTop: 0,
  },

  Form: {
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 10,
  },
  Text: {
    fontSize: 14,
    fontFamily: "gotham_M",
    color: colors.GreyText,
  },
  Footer: {
    marginHorizontal: 20,
  },
});
