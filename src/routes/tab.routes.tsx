import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Coin from "../screens/Coin";
import Store from "../screens/Store";
import { Image, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="main"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        lazy: true,
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: styles.tabBarAndroid,
        tabBarIcon: () => {
          if (route.name == "main")
            return (
              <Image
                source={require("../../assets/data-transfer.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
            );
          else if (route.name == "coin")
            return (
              <Image
                source={require("../../assets/dollar.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
            );
          else if (route.name == "store")
            return (
              <Image
                source={require("../../assets/shopping-bag.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
            );
        },
      })}
    >
      <Tab.Screen name="main" component={Home}></Tab.Screen>
      <Tab.Screen name="coin" component={Coin}></Tab.Screen>
      <Tab.Screen name="store" component={Store}></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  outBar: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    paddingBottom: 35,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerAndroid: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  tabBarAndroid: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    height: 60,
  },
});
