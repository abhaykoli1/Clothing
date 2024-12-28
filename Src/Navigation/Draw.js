import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CartContent from "../Screens/Ordering/CartContent";
import Tabs from "./Tabs";
import { ThemeColors } from "../Constants/Theme";
import ScreenFromRight from "../Screens/Ordering/Example";
import Pay from "../Screens/Ordering/Pay";
import WishList from "../Screens/WishList";
import Search from "../Screens/Search";
import TextInputCompo from "../Components/TextInputCompo";
import Dashboard from "../Screens/Dashboard";

const Drawer = createDrawerNavigator();
const Draw = (props) => {
  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: ThemeColors.BGcolor(1),
      }}
    >
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "right",
          headerShown: false,
        }}
        drawerStyle={{
          backgroundColor: "red",
          // width: 250,
          // padding: 16,
          elevation: 4,
        }}
        drawerContent={(props) => (
          <View style={styles.drawerContent}>
            <View style={styles.drawerHeader}></View>
            <View style={styles.Container}>
              <TextInputCompo
                keyboardType="default"
                Title="Your Name"
                placeholder={"Name"}
                value
                // onChangeText
              />
              <TextInputCompo
                keyboardType="default"
                Title="Number"
                placeholder={"Phone number"}
                value
                // onChangeText
              />
            </View>
          </View>
        )}
      >
        <Drawer.Screen
          name="Tabs"
          component={Tabs}
          initialParams={{ userName: "abhay", fun: "open D" }}
        />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="CartContent" component={CartContent} />
        <Drawer.Screen name="ScreenFromRight" component={ScreenFromRight} />
        <Drawer.Screen name="Pay" component={Pay} />
        <Drawer.Screen name="WishList" component={WishList} />
      </Drawer.Navigator>
    </View>
  );
};
export default Draw;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: ThemeColors.BGcolor(1),
  },
  drawerHeader: {
    backgroundColor: "lightblue",
    height: 150,
    borderBottomRightRadius: 10,
  },

  drawerHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  Container: {
    paddingHorizontal: 15,
  },
});
