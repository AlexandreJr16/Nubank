import React from "react";
import { View } from "react-native";

const CarrosselItemInfo = ({ children }: { children: any }) => {
  return (
    <View
      style={{
        maxWidth: "55%",
        maxHeight: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#E6E7EB",
        paddingVertical: 8,
        paddingHorizontal: 10,
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
