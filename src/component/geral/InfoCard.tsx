import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const InfoCard = (dto: {
  iconName: any;
  title: string;
  optionalInfo?: string;
}) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "#E6E7EB",
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 8,
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
        <Ionicons name={dto.iconName} size={30} />
        <Text style={{ fontSize: 18, fontWeight: "900" }}>{dto.title}</Text>
      </View>
      {dto.optionalInfo && (
        <View>
          <Text style={{ fontSize: 16, fontWeight: "900" }}>
            {dto.optionalInfo}
          </Text>
        </View>
      )}
    </View>
  );
};

export default InfoCard;
