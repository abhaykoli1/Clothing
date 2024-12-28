import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { HorizontalListdata } from "../Constants/Data";
import { useState } from "react";
export default function WhatsonYourMindList() {
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={HorizontalListdata}
      keyExtractor={(item) => item.id}
      extraData={indexCheck}
      renderItem={({ item, index }) => (
        <Pressable>
          <View style={styles.FlatList}>
            <Image
              style={{ width: 70, height: 70, marginBottom: 5 }}
              source={item.image}
            />
            <Text style={styles.Text}>{item.name}</Text>
          </View>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  FlatList: {
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  Text: {
    fontSize: 14,
    fontWeight: "semibold",
  },
});
