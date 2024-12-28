import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { ExploreData } from "../Constants/Data";
import { color } from "react-native-elements/dist/helpers";
import { colors } from "../Constants/Colors";

const Suggest = () => {
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <View>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={ExploreData}
        extraData={indexCheck}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Pressable style={styles.Container}>
            <View>
              <Image style={styles.Image} source={item.image} />
            </View>
            <View style={styles.TextCon}>
              <Text style={styles.Text}>{item.name}</Text>
              <Text style={styles.Text}>{item.address}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Suggest;

const styles = StyleSheet.create({
  Container: {
    marginTop: 2,
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: colors.cardbackground,
    borderRadius: 5,
    height: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 4,
    marginHorizontal: 20,
  },
  Image: {
    height: 80,
    width: 100,
    marginRight: 20,
    borderRadius: 5,
    elevation: 3,
  },
  TextCon: {},
  Text: {
    color: colors.Text,
    fontSize: 18,
    fontFamily: "FamilyM",
  },
});
