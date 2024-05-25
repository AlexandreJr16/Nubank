import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const InfoCard = () => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#E6E7EB",
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 16,
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Ionicons name="card-sharp" size={30} />
        <Text style={{ fontSize: 18, fontWeight: "900" }}>Meus Cartões</Text>
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "900" }}>R$ 753,43</Text>
      </View>
    </View>
  );
};

export default InfoCard;
