import React from "react";
import { View, Pressable, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({
  handleVisible,
  visible,
  textVisible,
}: {
  handleVisible: any;
  visible: boolean;
  textVisible: boolean;
}) => {
  return (
    <React.Fragment>
      <View
        style={{
          display: "flex",
          paddingHorizontal: 20,
          paddingVertical: 30,
          backgroundColor: "#820ad1",

          gap: 30,
        }}
      >
        <StatusBar backgroundColor={"#820ad1"} style={"dark"} />
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#DFAEFF",
              padding: 15,
              borderRadius: 1000,
            }}
          >
            <Ionicons name="person" size={30} color="white" />
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              gap: 20,
            }}
          >
            <Pressable onPress={handleVisible}>
              {visible ? (
                <Ionicons name="eye" size={30} color="white" />
              ) : (
                <Ionicons name="eye-off" size={30} color="white" />
              )}
            </Pressable>
            <Ionicons name="information" size={30} color="white" />
            <Ionicons name="mail" size={30} color="white" />
          </View>
        </View>
        {textVisible && (
          <Text style={{ color: "#fff", fontSize: 22 }}>
            Olá, Camila Portela
          </Text>
        )}
      </View>
    </React.Fragment>
  );
};
export default Header;
