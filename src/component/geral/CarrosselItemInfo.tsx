import React from "react";
import { View } from "react-native";

const CarrosselItemInfo = ({ children }: { children: any }) => {
  return (
    <View
      style={{
        height: 250,
        width: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#E6E7EB",
        padding: 10,
        marginVertical: 5,
        borderRadius: 16,
        marginRight: 10,
      }}
    >
      {children}
    </View>
  );
};
export default CarrosselItemInfo;
