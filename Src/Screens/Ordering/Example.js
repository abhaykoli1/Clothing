import React, { useState } from "react";
import { Button, Text } from "react-native";
import { View, Animated, Dimensions } from "react-native";
import HeaderComponent from "../../Components/HeaderComponent";

const screenWidth = Dimensions.get("window").width;

const ScreenFromRight = () => {
  const [visible, setVisible] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const openScreen = () => {
    setVisible(true);
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeScreen = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent Title={"SCREEN"} Back={true} />

      {visible && (
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            marginTop: 30,
            right: 0,
            width: screenWidth,
            height: "100%",
            backgroundColor: "white",
            transform: [{ translateX: animation }],
          }}
        >
          {/* Your screen content here */}
          <View>
            <Text>Screen from right</Text>
            <Button title="Close" onPress={closeScreen} />
          </View>
        </Animated.View>
      )}
      <Button title="Open screen" onPress={openScreen} />
    </View>
  );
};

export default ScreenFromRight;
