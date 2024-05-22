import React, { useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import CircleComponent from "../component/main/CircleComponent";
import PersonComponent from "../component/main/PersonComponent";

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            <Pressable
              onPress={() => {
                setVisible(!visible);
              }}
            >
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
        <Text style={{ color: "#fff", fontSize: 22 }}>Olá, Camila Portela</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            display: "flex",
            width: "100%",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexDirection: "column",
            paddingHorizontal: 20,
            paddingVertical: 30,
            gap: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "500" }}>Conta</Text>
            <Text style={{ fontSize: 25, fontWeight: "500" }}>{">"}</Text>
          </View>
          <Text style={{ fontSize: 22, fontWeight: "500" }}>
            {visible ? "R$ 1.534,98" : "*****"}
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            gap: 20,
            maxHeight: 170,
          }}
          showsHorizontalScrollIndicator={false}
        >
          <CircleComponent title="Pix" name="cash" />
          <CircleComponent title="Pagar" name="barcode" />
          <CircleComponent title="Pegar emprestimo" name="cash-sharp" />
          <CircleComponent title="Solicitar cartão" name="card-sharp" />
        </ScrollView>
        <View>
          <Text>Nossos Empresários</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <PersonComponent
              urlImg={require("../../assets/luka.jpg")}
              name="Luka"
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
