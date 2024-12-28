import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { TypesOfFood } from "../Constants/Data";
import { colors } from "../Constants/Colors";
export default function Card() {
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={TypesOfFood}
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
              <View
                style={
                  indexCheck === item.id
                    ? { ...styles.imageBGSelected }
                    : { ...styles.imageBG }
                }
              >
                <Image
                  style={
                    indexCheck === item.id
                      ? { ...styles.imageSelected }
                      : { ...styles.image }
                  }
                  source={item.image}
                />
              </View>

              <View>
                <Text>{item.name}</Text>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
  },
  cardSelected: {
    marginTop: 75,
    width: 210,
    height: 250,
    elevation: 2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.white,
    marginRight: 10,
  },
  card: {
    marginTop: 100,
    marginRight: 10,
    height: 240,
    width: 200,
    elevation: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.white,
  },
  imageBGSelected: {
    height: 155,
    width: 155,
    position: "absolute",
    backgroundColor: colors.grey5,
    borderRadius: 99,
    top: -20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBG: {
    height: 150,
    width: 150,
    position: "absolute",
    backgroundColor: colors.grey5,
    borderRadius: 99,
    top: -40,
    alignItems: "center",
    justifyContent: "center",
  },
  imageSelected: {
    height: 115,
    width: 115,
  },
  image: {
    height: 110,
    width: 110,
  },
});
