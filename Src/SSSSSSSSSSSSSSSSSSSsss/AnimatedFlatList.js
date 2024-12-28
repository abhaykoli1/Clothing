import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Animated,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import Dashboard from "../Screens/Dashboard";

const AnimatedFlatList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const moveToBottom = useRef(new Animated.Value(1)).current;
  const drawerItemAni = useRef(new Animated.Value(0)).current; // Drawer item  animation
  const scale = useRef(new Animated.Value(1)).current;
  const [Focused, setFocused] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [data, setData] = useState([]);
  const [MenuVisible, setMenuVisible] = useState(false);
  // console.log("MenuVisible", MenuVisible);

  const openDrawer = () => {
    console.log("Sh :", show);
    Animated.spring(moveToRight, {
      toValue: -100,
      useNativeDriver: true,
    }).start();
    // Animated.spring(moveToRight, {
    //   toValue: showMenu ? 0 : responsiveScreenWidth(60),
    //   useNativeDriver: true,
    // }).start();
    // Animated.spring(moveToBottom, {
    //   toValue: -30,
    //   useNativeDriver: true,
    // }).start();
    Animated.timing(scale, {
      toValue: 0.7,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

  const [animate, setAnimate] = useState(new Animated.Value(0));
  useEffect(() => {
    // Animated.spring(animate, {
    //   toValue: 1,
    //   stiffness: 100,
    //   damping: 10,
    //   useNativeDriver: true,
    Animated.timing(animate, {
      toValue: 1,
      duration: 1000,
      delay: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        // alignItems: "flex-end",
        width: "100%",
      }}
    >
      <Animated.View
        style={{
          // marginTop: 100,
          borderWidth: 1,
          // height: "100%",
          // width: "100%",
          position: "absolute",
          left: 100,
          top: 40,
          right: 0,
          bottom: 30,
          opacity: animate,
          transform: [
            {
              translateX: animate.interpolate({
                inputRange: [0, 1],
                outputRange: [400, 0],
              }),
            },
          ],
          // transform: [{ translateX: animate }],
        }}
      >
        {/* <Animated.View
          style={{
            backgroundColor: "yellow",
            flex: 1,
            width: "100%",
            transform: [
              { scale: scale },
              // { translateY: moveToBottom },
              { translateX: moveToRight },
            ],
          }}
        >
          <Dashboard />
        </Animated.View> */}
      </Animated.View>
      <TouchableOpacity
        onPress={() => openDrawer()}
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "blue",
          height: 40,
          width: 1000,
        }}
      >
        <Text>Press ME</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AnimatedFlatList;
