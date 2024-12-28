import {
  Animated,
  Button,
  Easing,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ThemeColors, ThemeColors2 } from "../Constants/Theme";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../Constants/Colors";
import Edit from "../Screens/Profile/Edit";
import Draw from "./Draw";
import CartContent from "../Screens/Ordering/CartContent";
import InnerRoot from "./InnerRoot";
import * as Animatable from "react-native-animatable";
import { Icon } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
//
const DrawerItems = [
  {
    id: 0,
    active: "home-filled",

    type: "material",
    label: "Dashboard",
    ActiveImage: require("../../assets/Icons/home-filled-white.png"),
    InActiveImage: require("../../assets/Icons/home-outline-white.png"),
    navigation: "Tabs",
  },
  {
    id: 1,
    active: "bag-handle",

    type: "ionicon",
    ActiveImage: require("../../assets/Icons/s-bag-outline-white.png"),
    InActiveImage: require("../../assets/Icons/s-bag-filled-white.png"),
    label: "Shopping",
    navigation: "CartContent",
  },
  {
    id: 2,
    active: "heart",

    type: "ionicon",
    label: "Wishlist",
    navigation: "WishList",
    ActiveImage: require("../../assets/Icons/wishlist-filled-white.png"),
    InActiveImage: require("../../assets/Icons/wishlist-outline-white.png"),
  },

  {
    id: 3,
    active: "wallet",

    type: "material",
    label: "Payment",
    navigation: "Pay",
    ActiveImage: require("../../assets/Icons/wallet-filled-white.png"),
    InActiveImage: require("../../assets/Icons/wallet-outline-white.png"),
  },
];

const Drawer = (prams) => {
  // console.log(prams);
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const scale = useRef(new Animated.Value(0.7)).current;
  const moveToRight = useRef(
    new Animated.Value(responsiveScreenWidth(60))
  ).current;
  const moveToBottom = useRef(
    new Animated.Value(responsiveScreenHeight(4.5))
  ).current;
  const [animate] = useState(new Animated.Value(0));
  const drawerItemAni = useRef(new Animated.Value(0)).current; // Drawer item  animation
  const AniFromBottom = useRef(new Animated.Value(0)).current; // Drawer item  animation
  const AniFromTop = useRef(new Animated.Value(0)).current; // Drawer item  animation

  const [Focused, setFocused] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [data, setData] = useState([]);
  const [MenuVisible, setMenuVisible] = useState(false);
  const [WidgetIconVisible, setWidgetIconVisible] = useState(true);
  console.log("WidgetIconVisible", WidgetIconVisible);

  const Counter = (...prop) => {
    let Count = [prop];
    // Count++;
    console.log(Count);
  };

  const handleRotateIcon = () => {
    showMenu ? setRotate(rotate + 45) : setRotate(0);
    // !showMenu ? console.log("yes") : console.log("no");
  };
  //
  const openingDrawerListAnimation = () => {
    Animated.spring(drawerItemAni, {
      toValue: showMenu ? -220 : 0,
      stiffness: 50,
      useNativeDriver: true,
    }).start();
    Animated.spring(AniFromTop, {
      toValue: showMenu ? -220 : 0,
      stiffness: 50,
      useNativeDriver: true,
    }).start();
    Animated.spring(AniFromBottom, {
      toValue: showMenu ? 320 : 0,
      stiffness: 50,
      useNativeDriver: true,
    }).start();
    setShowMenu(!showMenu);
  };

  const openDrawer = () => {
    openingDrawerListAnimation();
    Animated.spring(moveToRight, {
      toValue: showMenu ? 0 : responsiveScreenWidth(60),
      useNativeDriver: true,
    }).start();
    Animated.spring(moveToBottom, {
      toValue: showMenu ? 0 : responsiveScreenHeight(4.5),
      useNativeDriver: true,
    }).start();
    Animated.timing(scale, {
      toValue: showMenu ? 1 : 0.7,
      duration: 350,
      useNativeDriver: true,
    }).start();
    setShowMenu(!showMenu);
  };

  const closeDrawer = () => {
    openingDrawerListAnimation();
    Animated.timing(moveToRight, {
      toValue: 0,
      duration: 280,
      useNativeDriver: true,
    }).start();
    Animated.spring(moveToBottom, {
      toValue: 0,
      // stiffness: 80,
      // duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.spring(scale, {
      toValue: 1,
      duration: 330,
      useNativeDriver: true,
    }).start();
    setShowMenu(false);
  };

  //  animate when screen opens
  useEffect(() => {
    Animated.spring(animate, {
      toValue: 1,
      stiffness: 40,
      useNativeDriver: true,
    }).start();
  }, []);

  function Visible() {
    useEffect(() => {
      setWidgetIconVisible(true);
    }, []);
  }
  ///

  {
    /* <View style={{ zIndex: 1, flex: 1 }}>
    {showMenu ? (
      <Ionicons
        onPress={openDrawer}
        name="arrow-back-circle-outline"
        size={responsiveFontSize(4.3)}
        color={"black"}
        style={{
          position: "absolute",
          top: responsiveScreenHeight(5),
          paddingTop: responsiveScreenHeight(1.4),
          paddingBottom: responsiveScreenHeight(0.3),
          paddingHorizontal: responsiveScreenWidth(2.45),
          left: 0,
          zIndex: 1,
        }}
      />
    ) : (
      
    )}
  </View> */
  }
  function DrawerIcon() {
    return (
      <Pressable
        onPress={openDrawer}
        style={{
          position: "absolute",
          top: responsiveScreenHeight(5.5),
          // right: 1,
          left: 1,
          // paddingTop: responsiveScreenHeight(2),
          // paddingBottom: responsiveScreenHeight(1.4),
          // paddingHorizontal: responsiveScreenWidth(2),
          zIndex: 1,
          alignItems: "center",
          // backgroundColor: "rgba(0,0,0,0.5)",
          width: responsiveScreenWidth(15),
          height: responsiveScreenHeight(5.5),
        }}
      >
        {/* <Image
        style={{
          width: responsiveScreenHeight(2.8),
          height: responsiveScreenHeight(2.8),
        }}
        source={require("../../assets/Icons/Widget-outline-white.png")}
      /> */}
        {/* <Text
        style={{
          fontSize: responsiveFontSize(1),
          paddingTop: 1,
          color: ThemeColors.WHITE,
          fontFamily: "FamilyM",
        }}
      >
        Widget
      </Text> */}
      </Pressable>
    );
  }
  function Screen() {
    return (
      <Animated.View
        style={[
          { ...styles.ScreenView },
          {
            transform: [
              // {
              //   translateX: animate.interpolate({
              //     inputRange: [0, 1],
              //     outputRange: [500, 0],
              //   }),
              // },
              { scale: scale },
              { translateY: moveToBottom },
              { translateX: moveToRight },
            ],
          },
        ]}
      >
        <LinearGradient
          colors={[
            ThemeColors.PRIMARY(1),
            ThemeColors.linearColorBackScreen(0.8),
            ThemeColors.linearColorBackScreen(0.8),
            ThemeColors.linearColorBackScreen(0.8),
            ThemeColors.linearColorBackScreen(0.8),
            ThemeColors.linearColorBackScreen(0.8),
          ]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            flex: 1,
            position: "absolute",
            borderRadius: 5,
            top: -3,
            bottom: -5,
            left: -3,
            right: -3,
          }}
        >
          {/* Open Drawer Icon  */}
          {/* {WidgetIconVisible === true ? DrawerIcon() : null} */}
          {/* <DrawerIcon onclick={openDrawer} /> */}
          {DrawerIcon()}
          <View>
            {/* <Ionicons
              name="grid-outline"
              size={responsiveFontSize(3.4)}
              color={"white"}
              style={{
                position: "absolute",
                bottom: responsiveScreenHeight(1.1),
                right: responsiveScreenWidth(4),
                paddingTop: responsiveScreenHeight(1),
                paddingBottom: responsiveScreenHeight(0.7),
                paddingHorizontal: responsiveScreenWidth(7),
                // backgroundColor: "red",
                // paddingTop: responsiveScreenHeight(2),
                // paddingBottom: responsiveScreenHeight(0.7),
                // paddingHorizontal: responsiveScreenWidth(3.4),
                zIndex: 1,
              }}
            /> */}
          </View>

          {/* Small Drawer Screen */}
          <Pressable
            onPress={closeDrawer}
            style={{
              borderRadius: showMenu ? 0 : 20,
              marginTop: 0,
              flex: 1,
              paddingBottom: 30,
            }}
          >
            <InnerRoot />
          </Pressable>
        </LinearGradient>
      </Animated.View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: ThemeColors.BGcolor(1) }}>
      {/* Back Drawer */}

      {/* profile shotcut  */}
      <Animated.View
        style={{
          // paddingTop: responsiveScreenHeight(5.5),
          transform: [
            {
              translateY: animate.interpolate({
                inputRange: [0, 1],
                outputRange: [-150, 0],
              }),
            },
            { translateY: AniFromTop },
          ],
        }}
      >
        <Edit />
      </Animated.View>

      <View
        style={{
          paddingBottom: responsiveScreenHeight(1.5),
          paddingHorizontal: responsiveScreenWidth(3.5),
          flex: 1,
          width: "49%",
          justifyContent: "space-between",
        }}
      >
        {/* Drawer Items */}
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Animated.View
            // delay={item.id * 1000}
            style={{
              marginTop: responsiveScreenHeight(1.5),
              transform: [
                {
                  translateX: animate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-500, 0],
                  }),
                },
                { translateX: drawerItemAni },
              ],
            }}
          >
            {DrawerItems.map((item, index) => {
              return (
                <View>
                  {Focused === item.id ? (
                    <LinearGradient
                      colors={[
                        ThemeColors.linearColorBackScreen(0.2),
                        "rgba(0, 0,0, 0)",
                      ]}
                      start={{ x: 1, y: 1 }}
                      end={{ x: 1, y: 0.1 }}
                      style={[
                        { ...styles.DrawerItem },
                        {
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          left: 0,
                        },
                      ]}
                    />
                  ) : null}
                  <TouchableOpacity
                    onPress={() => {
                      {
                        item.id === 0
                          ? setWidgetIconVisible(!WidgetIconVisible)
                          : setWidgetIconVisible(false);
                      }
                      navigation.navigate(item.navigation);
                      setFocused(item.id);
                      console.log(item.id);
                    }}
                    // onPress={() => {
                    //   {
                    //     item.id == 0 ? (
                    //       <Visible />
                    //     ) : (
                    //       navigation.navigate(item.navigation)
                    //     );
                    //     setWidgetIconVisible(false);
                    //   }
                    //   setFocused(item.id);
                    //   console.log(item.id);
                    // }}
                    key={index}
                    style={[
                      { ...styles.DrawerItem },
                      {
                        backgroundColor:
                          Focused === item.id
                            ? "rgba(0, 0, 0,0)"
                            : "rgba(0,0,0,0)",
                        marginBottom: 10,
                      },
                    ]}
                  >
                    <Text style={[{ ...styles.DrawerTitle }]}>
                      {item.label}
                    </Text>

                    <Icon
                      type={item.type}
                      name={item.active}
                      size={responsiveHeight(3)}
                      style={{ marginLeft: 15 }}
                      color={ThemeColors.IconColor}
                    />

                    {/* <Image
                      style={
                        item.id === 2
                          ? {
                              height: responsiveScreenHeight(3.3),
                              width: responsiveScreenHeight(3.3),
                            }
                          : {
                              height: responsiveScreenHeight(2.9),
                              width: responsiveScreenHeight(2.9),
                            }
                      }
                      source={
                        Focused === item.id
                          ? item.ActiveImage
                          : item.InActiveImage
                      }
                    /> */}
                  </TouchableOpacity>
                </View>
              );
            })}
          </Animated.View>

          {/* log Out Button*/}
          <Animated.View
            // delay={item.id * 1000}
            style={{
              marginTop: responsiveScreenHeight(1.5),
              transform: [
                {
                  translateX: animate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-500, 0],
                  }),
                },
                { translateX: drawerItemAni },
              ],
            }}
          >
            <TouchableOpacity
              style={[styles.DrawerItem, { marginRight: 8 }]}
              onPress={() => navigation.navigate("AnimatedFlatList")}
            >
              <Text style={styles.DrawerTitle}>{"Log-Out"}</Text>
              <Ionicons
                name="log-out-outline"
                size={responsiveHeight(3.5)}
                style={{ marginLeft: 15 }}
                color={ThemeColors.IconColor}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>

      {/* DarkMode  */}
      <View
        style={{
          position: "absolute",
          right: responsiveScreenWidth(0),
          bottom: responsiveScreenHeight(1.5),
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: animate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-350, 0],
                }),
              },
              { translateY: AniFromTop },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => setDarkMode(!darkMode)}
            style={[{ ...styles.DrawerItem }]}
            // onPress={() => navigation.navigate("AnimatedFlatList")}
          >
            <Text style={styles.DrawerTitle}>{"Dark Mode"}</Text>
            <Image
              source={
                darkMode
                  ? require("../../assets/Icons/dark-filled-white.png")
                  : require("../../assets/Icons/dark-outline-white.png")
              }
              style={{
                height: responsiveScreenHeight(3.3),
                width: responsiveScreenHeight(3.3),
              }}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Rotate icon */}
      <View>
        {/* <TouchableOpacity onPress={handleRotateIcon}>
            <Animatable.View
              style={{
                alignSelf: "center",
                justifyContent: "center",
                transform: [{ rotate: `${showMenu ? 45 : 0}deg` }],
                transformOrigin: "50% 50%",
              }}
            >
              <Ionicons
                // onPress={openDrawer}
                name="grid"
                size={responsiveFontSize(4)}
                color={"black"}
              />
            </Animatable.View>
          </TouchableOpacity> */}
      </View>

      {/* Animated */}
      {Screen()}
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  ScreenView: {
    flex: 1,
    borderColor: "transparent",
    borderWidth: 5,
    position: "absolute",
    left: -5,
    right: -5,
    top: -5,
    bottom: -5,
    zIndex: 1,
  },
  DrawerItem: {
    marginTop: responsiveHeight(1.1),
    height: responsiveScreenHeight(5.5),
    width: responsiveScreenWidth(41),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  DrawerTitle: {
    flex: 1,
    fontFamily: "FamilyM",
    color: ThemeColors.Text,
    fontSize: responsiveFontSize(1.5),
  },

  ///
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  MainContainer: {
    // flex: 1,
    marginTop: -60,
    backgroundColor: ThemeColors.BGcolor(1),
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
    color: ThemeColors.Text,
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
