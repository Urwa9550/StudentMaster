// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React from "react";
// // import LinearGradient from "react-native-linear-gradient";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Colors } from "../utils/Colors";


// const Auth_Header = ({ title, navigation, Profile, Back, titleColor, image, cameraOpen, imageObject }) => {
//     return (
//         <LinearGradient
//             colors={["#FFD3DE", "#F3A7C5"]}
//             style={styles.linearGradient}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 0, y: 1 }}
//         >
//             <View style={styles.headerContainer}>
//                 <View style={styles.headerContent}>
//                     {Back ? null :
//                         <Ionicons
//                             name="chevron-back"
//                             size={18}
//                             color={titleColor ? titleColor : "#3a3a3a"}
//                             onPress={() => navigation.goBack()}
//                         />}
//                     <Text style={[styles.titleText, { color: titleColor ? titleColor : "#3a3a3a", }]}>{title}</Text>
//                 </View>
//                 {Profile ?
//                     <View>
//                         <Image source={require('../../assets/Image1.png')} style={{ height: 120, width: 120, borderRadius: 60, alignSelf: 'center' }} />
//                         {image &&
//                             <TouchableOpacity onPress={cameraOpen}
//                                 style={{
//                                     position: 'absolute',
//                                     right: 130,
//                                     top: 80,
//                                     backgroundColor: Colors.white,
//                                     borderRadius: 15,
//                                     height: 30,
//                                     width: 30,
//                                     alignSelf: 'center',
//                                     alignItems: 'center',
//                                     justifyContent: 'center'

//                                 }}
//                             >
//                                 <Icon name="camera" size={14} color={Colors.light_Black} />
//                             </TouchableOpacity>}
//                     </View>
//                     :
//                     <Image
//                         source={require("../../assets/lip.png")}
//                         style={styles.logoImage}
//                     />
//                 }

//             </View>
//         </LinearGradient>
//     );
// };

// export default Auth_Header;

// const styles = StyleSheet.create({
//     linearGradient: {
//         width: "100%",
//         height: 242,
//         borderBottomRightRadius: 20,
//         borderBottomLeftRadius: 20,
//     },
//     headerContainer: {
//         marginTop: 56,
//         paddingHorizontal: 20,
//         width: "100%",

//     },
//     headerContent: {
//         display: "flex",
//         flexDirection: "row",
//         paddingVertical: 10
//     },
//     titleText: {
//         flex: 1,
//         textAlign: "center",
//         fontSize: 18,
//         fontWeight: "normal",
//         fontFamily: "Poppins",
//     },
//     logoImage: {
//         marginTop: 15,
//         width: 140,
//         height: 140,

//         alignSelf: "center",
//         resizeMode: 'contain'
//     },
//     logoImage1: {
//         marginTop: 15,
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         alignSelf: "center",
//         resizeMode: 'contain'
//     }

// });
