import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { ExploreData } from "../Constants/Data";
import { colors } from "../Constants/Colors";

export default function ExploreList() {
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={ExploreData}
        keyExtractor={(item) => item.id}
        extraData={indexCheck}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => setIndexCheck(item.id)}
            style={
              indexCheck === item.id
                ? { ...styles.ExploreListConSelected }
                : { ...styles.ExploreListCon }
            }
          >
            <Image style={styles.imageStyle} source={item.image} />

            <View style={styles.TitleBox}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.title}>{item.name}</Text>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={styles.BottomText}>* 4.5</Text>
                <Text style={styles.BottomText}>Free</Text>
                <Text style={styles.BottomText}>20 min</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ExploreListConSelected: {
    backgroundColor: colors.cardbackground,
    marginHorizontal: 20,
    marginVertical: 15,
    elevation: 4,
    borderRadius: 5,
    height: 210,
  },
  ExploreListCon: {
    backgroundColor: colors.cardbackground,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 5,
    height: 210,
  },
  imageStyle: {
    height: 150,
    width: 300,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    elevation: 2,
  },
  TitleBox: {
    justifyContent: "flex-end",
    height: 60,
    paddingVertical: 5,
  },
  title: {
    borderTopRightRadius: 5,
    paddingHorizontal: 10,
    color: colors.Text,
    fontFamily: "FamilyM",
    fontSize: 15,
  },
  BottomText: {
    color: colors.Text,
    marginRight: 10,
    fontFamily: "FamilyM",
    marginHorizontal: 10,
  },
  ExtraText: {
    color: colors.Text,
    marginRight: 10,
    marginHorizontal: 10,
  },
});
