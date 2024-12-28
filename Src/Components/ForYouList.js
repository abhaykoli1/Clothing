// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Pressable,
//   Image,
// } from "react-native";
// import { filterData } from "../Constants/Data";

// export default function ForYouList() {
//   const [indexCheck, setIndexCheck] = useState("0");
//   return (
//     <View>
//       <FlatList
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         data={filterData}
//         keyExtractor={(item) => item.id}
//         extraData={indexCheck}
//         renderItem={({ item, index }) => (
//           <Pressable
//             onPress={() => {
//               setIndexCheck(item.id);
//             }}
//           >
//             <View
//               style={
//                 indexCheck === item.id
//                   ? { ...styles.smallcardSelected }
//                   : { ...styles.smallcard }
//               }
//             >
//               <Image source={item.image} />
//               <View style={styles.titlebox}>
//                 <Text
//                   style={
//                     indexCheck === item.id
//                       ? { ...styles.smallCardTextSelected }
//                       : { ...styles.smallCardText }
//                   }
//                 >
//                   {item.name}
//                 </Text>
//               </View>
//             </View>
//           </Pressable>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   smallcardSelected: {
//     // height: ,
//     borderWidth: 1,
//     borderRadius: 10,
//     margin: 15,
//     padding: 30,
//     paddingHorizontal: 40,
//     backgroundColor: "green",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   smallcard: {
//     // height: ,
//     borderWidth: 1,
//     paddingHorizontal: 40,
//     borderRadius: 10,
//     margin: 15,
//     padding: 30,
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   titlebox: {
//     marginTop: 10,
//   },
//   smallCardTextSelected: {
//     color: "#fff",
//     fontSize: 15,
//     fontWeight: "bold",
//   },
//   smallCardText: {
//     color: "black",
//     fontSize: 15,
//     fontWeight: "bold",
//   },
// });
