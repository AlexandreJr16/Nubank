import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const CircleComponent = ({ name, title }: { name: any; title: string }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        paddingHorizontal: 20,
        gap: 15,
      }}
    >
      <View
        style={{
          backgroundColor: "#E6E7EB",
          borderRadius: 60,
          padding: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name={name} size={40} color="black" />
      </View>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>{title}</Text>
    </View>
  );
};
export default CircleComponent;
