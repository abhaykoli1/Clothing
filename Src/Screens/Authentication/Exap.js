// Screen1.js
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, Button, Animated, Pressable } from "react-native";
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      showMenu: false,
      Focused: 0,
    };
    this.moveToRight = new Animated.Value(0);
    this.moveToTop = new Animated.Value(0);
    this.scale = new Animated.Value(1);
    this.navigation = useNavigation();
  }

  parentFunction() {
    console.log("Parent function called!");
  }

  handleNavigateToAnotherComp = () => {
    this.navigation.navigate("MyAnotherClassCompo");
  };

  toggleModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  toggleShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  setFocused = (index) => {
    this.setState({ Focused: index });
  };

  openDrawer = () => {
    Animated.timing(this.moveToRight, {
      toValue: responsiveScreenWidth(60),
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.moveToTop, {
      toValue: responsiveScreenHeight(4),
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.scale, {
      toValue: 0.7,
      duration: 300,
      useNativeDriver: true,
    }).start();
    this.setState({ showMenu: true });
  };

  closeDrawer = () => {
    Animated.timing(this.moveToRight, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.moveToTop, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.scale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    this.setState({ showMenu: false });
  };

  render() {
    return (
      <View style={{ backgroundColor: "yellow", height: "100%" }}>
        <View style={{ backgroundColor: "white", flex: 1 }}></View>
        {/* Your component UI here */}
        <Animated.View
          style={{
            position: "absolute",
            top: 50,
            right: 10,
            left: 10,
            bottom: 40,
            flex: 1,
            transform: [
              { translateX: this.moveToRight },
              { translateY: this.moveToTop },
              { scale: this.scale },
            ],
            backgroundColor: "lightblue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            style={{
              position: "absolute",
              top: responsiveScreenHeight(5),
              left: 25,
              zIndex: 1,
            }}
            onPress={this.state.showMenu ? this.closeDrawer : this.openDrawer}
          >
            <MaterialCommunityIcons
              name={"align-horizontal-left"}
              size={responsiveFontSize(4.5)}
            />
          </Pressable>
          <Text>Animated screen</Text>
          <Button
            title="Go to Screen 2"
            onPress={this.handleNavigateToAnotherComp}
          />
        </Animated.View>
      </View>
    );
  }
}

export default MyClassComponent;