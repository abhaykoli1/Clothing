import {
  Animated,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { ButtonStyle, LoginStyle, Styled } from "../../Constants/Style";
import { colors } from "../../Constants/Colors";
import TextInputCompo from "../../Components/TextInputCompo";
import { ScrollView } from "react-native";
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { ThemeColors } from "../../Constants/Theme";
import { LinearGradient } from "expo-linear-gradient";

//
const Edit = ({ visible, onClose, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [aniFromRight, setAniFromRight] = useState(new Animated.Value(0));
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openModal = () => {
    Animated.timing(aniFromRight, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
    setModalVisible(true);
  };

  const closeModal = () => {
    Animated.timing(aniFromRight, {
      toValue: 400,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };
  return (
    <View>
      <LinearGradient
        colors={[ThemeColors.BGcolor(1), ThemeColors.linearColorBackScreen(1)]}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: -0.6 }}
        style={[
          {
            width: "100%",
            borderRadius: 5,
            paddingHorizontal: 0,
            paddingVertical: 15,
            height: responsiveScreenHeight(18),
            justifyContent: "flex-end",
            marginTop: responsiveScreenHeight(-2),
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-evenly",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: ThemeColors.Text,
              fontFamily: "FamilyM",
              alignSelf: "center",
            }}
          >
            Create An Account !
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: ThemeColors.Text,
              fontFamily: "FamilyM",
              alignSelf: "center",
            }}
          >
            Already Have One !
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-evenly",
            // padding: 10,
          }}
        >
          <TouchableOpacity
            onPress={openModal}
            style={{
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 5,
              // flex: 1,
              // backgroundColor: ThemeColors.PRIMARY(1),
              width: responsiveScreenWidth(40),
              height: responsiveHeight(4),
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: ThemeColors.Text,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: "FamilyM",
                color: ThemeColors.Text,
              }}
            >
              SIGN UP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 5,
              width: responsiveScreenWidth(40),
              height: responsiveHeight(4),
              backgroundColor: ThemeColors.Button,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: "FamilyM",
                color: ThemeColors.ButtonTxt,
              }}
            >
              LOG IN
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/*  */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Animated.View
          style={{
            transform: [{ translateX: aniFromRight }],
            flex: 1,
            // backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Pressable
            onPress={closeModal}
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <View style={styles.Modal}>
              <ScrollView>
                <View style={styles.Form}>
                  <TextInputCompo Title={"NAME"} placeholder={"Jhon"} />
                  <TextInputCompo
                    Title={"EMAIL"}
                    placeholder={"Jhon@gmail.com"}
                  />
                  <TextInputCompo
                    Title={"PHONE NUMBER"}
                    placeholder={"+91 9511564276"}
                  />
                </View>
              </ScrollView>

              <View style={styles.Footer}>
                <Pressable
                  onPress={closeModal}
                  // onPress={() => navigation.goBack()}
                  style={ButtonStyle.Button}
                >
                  <Text style={ButtonStyle.BtnText}>SAVE</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Animated.View>
        {/* </View> */}
      </Modal>
    </View>
  );
};

export default Edit;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.BGcolor,
  },

  Form: {
    marginHorizontal: 20,
    borderRadius: 5,
  },
  Header: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  Modal: {
    backgroundColor: ThemeColors.BGcolor(1),
    borderRadius: 10,
    height: responsiveScreenHeight(50),
    width: responsiveScreenWidth(70),
    // marginRight: responsiveScreenWidth(4),
    // position: "absolute",
  },
  ProfileLetter: {
    backgroundColor: colors.white,
    textAlignVertical: "center",
    alignSelf: "center",
    textAlign: "center",
    borderRadius: 99,
    marginBottom: 20,
    color: "black",
    fontSize: 30,
    zIndex: 1,
    height: 60,
    width: 60,
    left: 155,
    top: 18,
  },
  Text: {
    fontSize: 15,
    fontFamily: "gotham_M",
    marginBottom: 5,
    color: colors.GreyText,
  },
  TextInput: {
    height: 45,
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  Footer: {
    marginHorizontal: 20,
  },
});
