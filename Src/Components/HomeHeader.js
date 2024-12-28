import {
  Animated,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors } from "../Constants/Colors";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";
import { ThemeColors, ThemeColors2 } from "../Constants/Theme";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Styled } from "../Constants/Style";
//
export default function HomeHeader() {
  //
  // const [Color, setColor] = useState("red");
  // console.log(Color);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(-300));

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(animation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(animation, {
      toValue: -120,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  return (
    <View
      style={[
        { height: responsiveScreenHeight(11) },
        {
          backgroundColor: "rgba(18, 18, 18,0)",

          // backgroundColor: modalVisible ? "" : null,c
        },
      ]}
    >
      <LinearGradient
        colors={[ThemeColors.PRIMARY(1), ThemeColors.linearColorMain(0)]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={Styled.LinearHeader}
      >
        {modalVisible === true ? (
          <StatusBar backgroundColor={ThemeColors.PRIMARY(1)} style="light" />
        ) : null}
        <View
          style={{
            marginLeft: 0,
            paddingRight: 30,
          }}
        >
          <Image
            style={{
              width: responsiveScreenHeight(3.3),
              height: responsiveScreenHeight(3.3),
            }}
            source={require("../../assets/Icons/Widget-outline-white.png")}
          />
        </View>
        <Text style={styles.Logo}>LOGO</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={openModal}>
            <Ionicons
              style={{
                paddingHorizontal: responsiveScreenWidth(2),
              }}
              name="search-outline"
              size={responsiveFontSize(3.3)}
              color={"white"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("WishList")}>
            <Image
              style={{
                height: responsiveScreenHeight(3.6),
                width: responsiveScreenHeight(3.6),
              }}
              source={require("../../assets/Icons/wishlist-outline-white.png")}
            />
          </TouchableOpacity>

          <Ionicons
            onPress={() => navigation.navigate("WishList")}
            name="heart-outline"
            size={responsiveFontSize(3.5)}
            color={"black"}
          />
        </View>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <Animated.View
            style={{
              transform: [{ translateY: animation }],
              height: "200%",
              backgroundColor: "rgba(0,0,0,.6)",
            }}
          >
            <Pressable
              style={{
                height: responsiveScreenHeight(9),
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                backgroundColor: "rgba(18, 18, 18,1)",
              }}
            >
              <LinearGradient
                colors={[
                  ThemeColors.PRIMARY(1),
                  "rgba(0, 0,0, 0)",
                  "rgba(0, 0,0, 0)",
                ]}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  height: responsiveScreenHeight(15),
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 20,
                    textAlign: "center",
                    color: ThemeColors.GreyText,
                    fontFamily: "FamilyB",
                    fontSize: 15,
                    opacity: 0.3,
                  }}
                >
                  Find Your Fit
                </Text>
                {/* // Search */}
                <View style={Styled.SearchContainer}>
                  <Ionicons
                    style={{
                      paddingHorizontal: 10,
                    }}
                    name="search-outline"
                    size={responsiveFontSize(3.3)}
                    color={"gray"}
                  />
                  <TextInput
                    placeholder="Search"
                    placeholderTextColor={"gray"}
                    style={{
                      color: "red",
                      flex: 1,
                      marginRight: 10,
                      paddingVertical: 2,
                    }}
                  />
                </View>

                {/* bottom */}
              </LinearGradient>
              <Pressable
                onPress={closeModal}
                style={{
                  height: responsiveScreenHeight(80),
                }}
              ></Pressable>
            </Pressable>
          </Animated.View>
        </Modal>
      </LinearGradient>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    fontFamily: "FamilyB",
    color: ThemeColors.Text,
    fontSize: responsiveFontSize(2.6),
    flex: 1,
    alignSelf: "center",
  },
  PersonIcon: { color: colors.IconColor },
});
