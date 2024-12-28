import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { ThemeColors } from "../../Constants/Theme";
import TextInputCompo from "../../Components/TextInputCompo";
import ButtonComponent from "../../Components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { ButtonStyle } from "../../Constants/Style";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import GoBackLeftCompo from "../../Components/GoBackLeftCompo";
import { Image } from "react-native";
export default function Otp() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const handleOtpChange = (index, text) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };
  return (
    <View
      style={{
        backgroundColor: ThemeColors.WHITE,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 0.7,
          backgroundColor: ThemeColors.WHITE,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/Images/otp.jpg")}
          style={{ height: 400, width: 400, position: "absolute", top: 0 }}
        />
      </View>
      <GoBackLeftCompo color={"black"} />
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.7)", "rgba(0,0,0,.9)"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          paddingTop: responsiveScreenHeight(5),
          paddingHorizontal: responsiveScreenWidth(4),
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 25,
            fontFamily: "FamilyB",
            marginBottom: 5,
          }}
        >
          VERIFY
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 13,
            fontFamily: "FamilyM",
            marginBottom: 20,
          }}
        >
          Send To 9511564276
        </Text>

        <View style={styles.otpInputContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleOtpChange(index, text)}
              placeholder="_"
              keyboardType="number-pad"
              maxLength={1}
              placeholderTextColor={ThemeColors.GreyText}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Drawer")}
          style={[
            ButtonStyle.Button,
            { marginTop: 5, backgroundColor: "white" },
          ]}
        >
          <Text
            style={{
              color: "black",
              fontSize: 14,
              fontFamily: "FamilyB",
            }}
          >
            VERIFY
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 0,
          }}
        >
          <Text
            style={{
              color: ThemeColors.Text,
              fontSize: 14,
              fontFamily: "FamilyB",
            }}
          >
            Resend Code
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderColor: ThemeColors.GreyText,
    borderWidth: 1,
    textAlign: "center",
    fontSize: 24,
    color: ThemeColors.Text,
    borderRadius: 5,
    backgroundColor: "gray",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

// import React, { useState } from "react";
// import { View, Text, TextInput, StyleSheet } from "react-native";

// const OTPInput = () => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [error, setError] = useState(null);

//   const handleOtpChange = (index, text) => {
//     const newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);
//   };

//   const handleOtpSubmit = () => {
//     const otpString = otp.join("");
//     if (otpString.length !== 6) {
//       setError("Invalid OTP. Please enter a 6-digit code.");
//       return;
//     }
//     // Send OTP to server for verification
//     fetch("/verify-otp", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ otp: otpString }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.valid) {
//           // OTP is valid, navigate to next screen
//           navigation.navigate("NextScreen");
//         } else {
//           setError("Invalid OTP. Please try again.");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Error verifying OTP. Please try again.");
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter OTP</Text>
//       <View style={styles.otpInputContainer}>
//         {otp.map((digit, index) => (
//           <TextInput
//             key={index}
//             style={styles.otpInput}
//             value={digit}
//             onChangeText={(text) => handleOtpChange(index, text)}
//             placeholder="_"
//             keyboardType="number-pad"
//             maxLength={1}
//           />
//         ))}
//       </View>
//       {error && <Text style={styles.error}>{error}</Text>}
//       <TouchableOpacity style={styles.button} onPress={handleOtpSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
