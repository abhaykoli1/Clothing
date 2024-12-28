import React, { useState, useContext, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Switch,
  Pressable,
  ScrollView,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { colors } from "../Constants/Colors";
import { StatusBar } from "expo-status-bar";
import { Drawer, Styled } from "../Constants/Style";
import { useNavigation } from "@react-navigation/native";

export default function DrawerContent(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={Drawer.DrawerHeaderContainer}>
        <Text style={styles.LogoText}>Food Fiest</Text>
        <Pressable
          onPress={() => navigation.navigate("Edit")}
          style={styles.ProfileInfoShortcut}
        >
          <View style={styles.Avatar} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.NameText}>Abhay koli</Text>
            <Text style={styles.NumberText}>9511564276</Text>
            <Text style={styles.EmailText}>abhay@gmail.com</Text>
          </View>
        </Pressable>
      </View>

      {/* ///// */}
      <ScrollView
        style={{ zIndex: -1 }}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        <View
          style={{
            paddingVertical: 10,
            // backgroundColor: "red",
          }}
        >
          <DrawerItemList {...props} />

          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                marginBottom: -2.5,
              },
            ]}
            label="Payment"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="credit-card-outline"
                size={size}
                color={colors.Text}
              />
            )}
          />
          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                marginBottom: 5,
              },
            ]}
            label="Promotions"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="tag-heart"
                size={size}
                color={colors.Text}
              />
            )}
          />
          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                marginBottom: -2.5,
              },
            ]}
            label="Contact us"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="credit-card-outline"
                size={size}
                color={colors.Text}
              />
            )}
          />
          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                marginBottom: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              },
            ]}
            label="Feedback"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="tag-heart"
                size={size}
                color={colors.Text}
              />
            )}
          />
          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                marginBottom: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              },
            ]}
            label="Feedback"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="tag-heart"
                size={size}
                color={colors.Text}
              />
            )}
          />
          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                marginBottom: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              },
            ]}
            label="Feedback"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="tag-heart"
                size={size}
                color={colors.Text}
              />
            )}
          />
          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                marginBottom: -2.5,
              },
            ]}
            label="About us"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="credit-card-outline"
                size={size}
                color={colors.Text}
              />
            )}
          />
          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                borderRadius: 0,
                marginBottom: -2.5,
              },
            ]}
            label="Terms & Conditions"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="credit-card-outline"
                size={size}
                color={colors.Text}
              />
            )}
          />
          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                borderRadius: 0,
                marginBottom: -2.5,
              },
            ]}
            label="Privacy Policy"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="credit-card-outline"
                size={size}
                color={colors.Text}
              />
            )}
          />

          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                marginBottom: 5,
              },
            ]}
            label="Cancellation Policy"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="tag-heart"
                size={size}
                color={colors.Text}
              />
            )}
          />
          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                marginBottom: -2.5,
              },
            ]}
            label="Settings"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="cog-outline"
                size={size}
                color={colors.Text}
              />
            )}
          />
          <DrawerItem
            style={[
              Drawer.DrawerCard,
              {
                marginBottom: 15,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                marginBottom: -2.5,
              },
            ]}
            label="Help"
            labelStyle={Drawer.LableStyle}
            icon={({ color, size }) => (
              <Icon
                type="material-community"
                name="lifebuoy"
                size={size}
                color={colors.Text}
              />
            )}
          />
        </View>
      </ScrollView>
      <DrawerItem
        style={[
          Drawer.DrawerCard,
          {
            borderRadius: 5,
            marginBottom: 10,
            marginTop: 10,
            elevation: 2,
          },
        ]}
        label="Sign Out"
        labelStyle={Drawer.LableStyle}
        icon={({ color, size }) => (
          <Icon
            type="material-community"
            name="logout-variant"
            size={size}
            color={colors.Text}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GrayBG,
    // borderRightWidth: 1,
    // borderRightColor: colors.Grey1,
  },
  LogoText: {
    fontSize: 30,
    color: colors.PRIMARY,
    fontFamily: "FamilyB",
    marginLeft: 2,
  },
  ProfileInfoShortcut: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.black,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  Avatar: {
    borderRadius: 99,
    height: 55,
    width: 55,
    backgroundColor: "white",
  },
  NameText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "FamilyM",
  },
  NumberText: {
    paddingTop: 8,
    color: colors.white,
    fontFamily: "FamilyLB",
    fontSize: 12,
    lineHeight: 6,
  },
  EmailText: {
    paddingTop: 8,
    color: colors.white,
    fontFamily: "FamilyLB",
    fontSize: 12,
    lineHeight: 6,
  },
});
