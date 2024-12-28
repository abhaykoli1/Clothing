import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Types } from "../Constants/Data";
import { colors } from "../Constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
export default function Type({ up }) {
  const [indexCheck, setIndexCheck] = useState("0");
  ///
  return (
    <View style={styles.MainCon}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Types}
        keyExtractor={(item) => item.id}
        extraData={indexCheck}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Pressable
              onPress={() => setIndexCheck(item.id)}
              style={
                indexCheck === item.id
                  ? { ...styles.cardSelected }
                  : { ...styles.card }
              }
            >
              <LinearGradient
                colors={["rgba(30, 214, 95,.2)", "rgba(39, 199, 187,.2)"]}
                style={[
                  {
                    borderRadius: 7,
                    paddingHorizontal: 10,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  indexCheck === item.id
                    ? { ...styles.cardSelected }
                    : { backgroundColor: colors.black },
                ]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                <Text
                  style={
                    indexCheck === item.id
                      ? { ...styles.TextSelected }
                      : { ...styles.Text }
                  }
                >
                  {item.name}
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MainCon: {
    paddingTop: 10,
    // backgroundColor: colors.BGcolor,
    paddingBottom: 10,
  },

  container: {
    paddingLeft: 20,
  },
  cardSelected: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(30, 214, 95,.4)",
    borderRadius: 7,
    height: 30,
  },
  card: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  TextSelected: {
    fontSize: 15,
    fontFamily: "FamilyLB",
    color: colors.white,
  },
  Text: {
    fontSize: 15,
    fontFamily: "FamilyLB",
    color: colors.white,
  },
});
