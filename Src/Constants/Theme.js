import { Dimensions } from "react-native";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

export const ThemeColors = {
  BGcolor: (opacity) => `rgba(18, 18, 18 , ${opacity})`, // -------------spotify bg
  // PRIMARY: (opacity) => `rgba(127, 170, 624, ${opacity})`,
  PRIMARY: (opacity) => `rgba(102, 51, 153 , ${opacity})`,
  ButtonColor: "#fff",
  Text: "#fff", // ------- white
  IconColor: "#fff",
  WHITE: "#fff",
  GrayBG: "#121212",
  cardbackground: "#2A2A2A", //---------spotify cardbg
  GreyText: "#bdc6cf", //-------- Gray 6
  GreyText2: "#fff",
  DrawerCardBG: "#2A2A2A",
  Primary: "#FF4B3A", // orange
  ButtonTxt: "rgba(0,0,0,1)",
  Button: "#fff",
  linearColorMain: (opacity) => `rgba(0, 0,0 , ${opacity})`,
  linearColorBackScreen: (opacity) => `rgba(255, 255,255, ${opacity})`,
  linearColorBackScreen: (opacity) => `rgba(149, 165, 166, ${opacity})`,
};
export const ThemeColors1 = {
  BGcolor: (opacity) => `rgba(255, 255, 255 , ${opacity})`, // -------------spotify bg
  // PRIMARY: (opacity) => `rgba(127, 170, 624, ${opacity})`,
  PRIMARY: (opacity) => `rgba(102, 51, 153 , ${opacity})`,
  ButtonColor: "black",
  Text: "black", // ------- white
  IconColor: "black",
  WHITE: "#fff",
  GrayBG: "#121212",
  cardbackground: "#fff", //---------spotify cardbg
  GreyText: "#bdc6cf", //-------- Gray 6
  GreyText2: "#fff",
  DrawerCardBG: "#2A2A2A",
  Primary: "#FF4B3A", // orange
  Button: "rgba(0,0,0,1)",
  ButtonTxt: "#fff",

  linearColorMain: (opacity) => `rgba(255, 255,255 , ${opacity})`,
  linearColorBackScreen: (opacity) => `rgba(0, 0, 0 , ${opacity})`,
};
export const ThemeColors2 = {
  BGcolor: "#292526",
  Grey1: "#787676",
  Grey2: "#A3A1A2",
  Grey3: "#F2F2F2",
  Black: "#121111",
};
export const lightColors = {
  BGcolor: "#fff",
  GrayBG: "#f6f6f6",
  cardbackground: "#fff",
  GreyText: "#5e6977",
  GreyText2: "#43484d",
  Text: "black",
  DrawerCardBG: "#fff",
  Primary: "#00b14f",
};
//
export const colors = {
  ButtonColor: "#00b14f",
  PRIMARY: "#1ED65F", // spotify green

  // PRIMARY: "#7F57F1", // purple
  // PRIMARY: "#00A624", // old green

  ///Dark background
  GreyText: "#bdc6cf", //-------- Gray 6
  BGcolor: "#121212", // -------------spotify bg
  GrayBG: "#121212",
  cardbackground: "#2A2A2A", //---------spotify cardbg

  GreyText3: "#D3D3D3",
  GreyText2: "#fff",
  Text: "#fff", // ------- white
  DrawerCardBG: "#2A2A2A",
  Primary: "#7F57F1", // orange

  // light Background

  // cardcomment: "#86939e",
  // headerText: "white",
  // statusbar: "ff8c52",
  black: "black",

  // buttonColor: "#228B22",    //dark green
  // cardbackground: "#8f8f8f",
  IconColor: "#bdc6cf",
  HeaderText: "#fff",
  white: "#fff",
  Grey1: "#43484d", //dark
  Grey2: "#5e6977",
  Grey3: "#687076",
  Grey4: "#86939e",
  Grey5: "#9BA1A6",
  Grey6: "#bdc6cf",
  Grey7: "#e1e8ee", //light
};

export const parameters = {
  ScreenHeight: Height,
  ScreenWidth: Width,
};

export const title = {
  color: "#ff8c52",
};
