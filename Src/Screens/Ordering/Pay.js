import {
  Animated,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../Constants/Colors";
import HeaderComponent from "../../Components/HeaderComponent";
import ButtonComponent from "../../Components/ButtonComponent";
import { Button } from "react-native";
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from "react-native-responsive-dimensions";
import { ThemeColors2 } from "../../Constants/Theme";
import { FontAwesome } from "@expo/vector-icons";

export default function Pay({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(-300));
  const [Open, setOpen] = useState(new Animated.Value(-120));
  const [showModal, setShowModal] = useState(false);

  const openSearch = () => {
    setModalVisible(true);
    Animated.spring(animation, {
      toValue: 0,
      // duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const closeSearch = () => {
    Animated.timing(animation, {
      toValue: -120,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const openModal = () => {
    setModalVisible(true);
    Animated.spring(animation, {
      toValue: 0,
      // duration: 300,
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
    <View style={styles.Container}>
      <HeaderComponent Title={"PAYMENT"} Back={true} />

      <View style={styles.MainContainer}>
        <Button title="afad" />
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
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "absolute",
            right: 0,
            bottom: 0,
            left: 0,
            top: 0,
          }}
        >
          <Pressable
            style={{
              height: responsiveScreenHeight(9),
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              paddingHorizontal: 15,
              backgroundColor: "yellow",
            }}
          >
            <View
              // Search
              style={{
                height: responsiveScreenHeight(5.4),
                alignItems: "center",
                flexDirection: "row",
                borderRadius: 5,
                // borderWidth: 1,
                borderColor: ThemeColors2.Grey1,
                paddingVertical: 5,
                backgroundColor: "white",
                marginTop: responsiveScreenHeight(6),
                elevation: 5,
              }}
            >
              <FontAwesome
                style={{
                  paddingHorizontal: 12,
                }}
                name="search"
                size={responsiveFontSize(3)}
                color={ThemeColors2.Grey1}
              />
              <TextInput
                placeholder="Search"
                placeholderTextColor={"gray"}
                style={{
                  color: "white",
                  // backgroundColor: "red",
                  flex: 1,
                  marginRight: 10,
                  paddingVertical: 2,
                }}
              />
            </View>
          </Pressable>

          {/* bottom */}
          <Pressable
            onPress={closeModal}
            style={{
              marginTop: responsiveScreenHeight(5),
              height: responsiveScreenHeight(80),
              // backgroundColor: "red",
            }}
          ></Pressable>
        </Animated.View>
      </Modal>
      {/* <View style></View> */}
      <Animated.View
        style={{
          position: "absolute",
          // backgroundColor: "rgba(0,0,0,0.5)",
          top: 0,
          right: 0,
          left: 0,

          transform: [{ translateY: Open }],
        }}
      >
        <View
          style={{
            backgroundColor: "yellow",
            height: 100,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        ></View>
      </Animated.View>
      <View style={styles.Footer}>
        <TouchableOpacity
          style={{ backgroundColor: "red", height: 50, width: "100%" }}
          onPress={() =>
            Animated.timing(Open, {
              toValue: showModal ? -120 : 0,
              duration: 400,
              useNativeDriver: true,
            }).start(setShowModal(!showModal))
          }
        >
          <Text>Open</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.Primary,
    // zIndex: 1,
  },

  MainContainer: {
    flex: 1,
    marginTop: 530,
  },
  Footer: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
});
