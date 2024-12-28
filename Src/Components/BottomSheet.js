// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   TextInput,
//   Animated,
//   KeyboardAvoidingView,
//   // Overlay,
// } from "react-native";
// import { colors, parameters, ButtonStyle } from "../Constants/styles";
// import { Ionicons } from "@expo/vector-icons";
// import HomeScreen from "../screens/HomeScreen";
// import OtpScreen from "../screens/OtpScreen";
// //
// export default function BottomSheet({ setStatus, navigation }) {
//   // const navigate = (route) => navigation.navigate(route);
//   return (
//     <Animated.View>
//       {/* <KeyboardAvoidingView
//         enabled={true}
//         behavior="padding"
//         // keyboardVerticalOffset={false} // adjust the offset to your needs
//         style={{ flex: 1, position: "absolute", bottom: 0 }}> */}
//       <Pressable onPress={() => setStatus(false)} style={styles.BackSheet}>
//         <Pressable
//           // onPress={() => navigation.navigate("HomeScreen")}
//           style={{
//             position: "absolute",
//             top: 41,
//             left: 12,
//             // backgroundColor: "red",
//           }}>
//           <Ionicons
//             // onPress={() => setStatus(false)}
//             name="arrow-back-sharp"
//             size={28}
//             color={colors.textColor}
//           />
//         </Pressable>
//         <Pressable style={styles.BottomSheet}>
//           <Text style={parameters.Title}>LOGIN</Text>
//           <Text style={[parameters.text, { marginBottom: 40 }]}>
//             Enter Phone number
//           </Text>
//           {/* <Overlay
//             isVisible={true}
//             windowBackgroundColor="rgba(0, 0, 0,.5)"
//             overlayStyle={{ flex: 1, width: "50%" }}
//             width="auto"
//             height="auto"
//             borderRadius={8}> */}
//           <TextInput
//             style={{
//               height: 45,
//               borderBottomWidth: 1,
//               marginBottom: 20,
//             }}
//             placeholder="Phone Number"
//             keyboardType="numeric"
//           />
//           <Pressable
//             onPress={() => navigation.navigate("OtpScreen")}
//             style={ButtonStyle.Button}>
//             <Text style={parameters.buttonTitle}>LOGIN</Text>
//           </Pressable>
//           {/* </Overlay> */}
//         </Pressable>
//       </Pressable>
//       {/* </KeyboardAvoidingView> */}
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   BackSheet: {
//     // position: "absolute",
//     // flex: 1,
//     // top: 0,
//     // left: 0,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     height: parameters.ScreenHeight,
//     width: parameters.ScreenWidth,
//     justifyContent: "flex-end",
//   },
//   BottomSheet: {
//     paddingHorizontal: 15,
//     height: "40%",
//     width: parameters.ScreenWidth,
//     borderWidth: 1,
//     backgroundColor: colors.white,
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//   },
// });
