import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../src/screens/Home/Index";
import { StyleSheet, View } from "react-native";
import Login from "../src/screens/Login/Index";
import Signup from "../src/screens/Signup/Index";
import fonts from "../src/utils/fonts";
import { Colors } from "../src/utils/Colors";
import Splash from "../src/screens/Splash/Index";
import Home2 from "../src/screens/Home2/Index";


const Stack = createNativeStackNavigator();

const RootNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
     
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home2"
        component={Home2}
        options={{
          headerShown: false,
        }}
      />
    
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
  
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <View style={{flex:1}}>
    <NavigationContainer theme={DefaultTheme} >
      <RootNavigator />
    </NavigationContainer>
    </View>
  );
};

export default Navigation;

// const styles = StyleSheet.create({
//   tabBarLabel: {
//     fontFamily: fonts.PoppinsRegular,
//     color: Colors.pink_Text,
//     fontSize: 10
//   },
// });
