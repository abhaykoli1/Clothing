import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { RecentKeywords } from "../Constants/Data";
import { colors } from "../Constants/Colors";

const Keywords = () => {
  const [indexCheck, setIndexCheck] = React.useState("0");

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={RecentKeywords}
        extraData={indexCheck}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Pressable style={styles.container}>
            <Text style={styles.Text}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Keywords;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 13,
    marginTop: 20,
    height: 37,
    marginBottom: 2,
    marginHorizontal: 2,
    backgroundColor: colors.cardbackground,

    justifyContent: "center",
    elevation: 4,
  },
  Text: {
    color: colors.GreyText,
    fontSize: 15,
    fontFamily: "FamilyM",
  },
});
