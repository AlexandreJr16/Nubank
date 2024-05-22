import React from "react";
import { View, Image, Text } from "react-native";

const PersonComponent = ({ urlImg, name }: { name: string; urlImg: any }) => {
  return (
    <View
      style={{
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Image
        style={{ height: 200, width: 200, borderRadius: 6 }}
        source={urlImg}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 17, fontWeight: "700" }}>{name}</Text>
    </View>
  );
};
export default PersonComponent;
