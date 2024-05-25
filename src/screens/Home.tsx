import React, { useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CircleComponent from "../component/main/CircleComponent";
import InfoCard from "../component/geral/InfoCard";
import CarrosselItemInfo from "../component/geral/CarrosselItemInfo";
import Header from "../component/geral/header";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        handleVisible={handleVisible}
        visible={visible}
        textVisible={true}
      />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              display: "flex",
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexDirection: "column",
              paddingHorizontal: 20,
              paddingVertical: 20,
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
              maxHeight: 160,
            }}
            showsHorizontalScrollIndicator={false}
          >
            <CircleComponent title="Pix" name="cash" />
            <CircleComponent title="Pagar" name="barcode" />
            <CircleComponent title="Pegar emprestimo" name="cash-sharp" />
            <CircleComponent title="Solicitar cartão" name="card-sharp" />
          </ScrollView>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        >
          <InfoCard
            iconName={"card"}
            title="Meus cartões"
            optionalInfo="R$ 874,43"
          />
        </View>
        <ScrollView
          horizontal={true}
          style={{ width: "100%", paddingHorizontal: 20 }}
        >
          <CarrosselItemInfo>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              O nubank fornece a melhor experiencia para você cliente!!!
            </Text>
          </CarrosselItemInfo>
          <CarrosselItemInfo>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              libero cupiditate minus eveniet nostrum doloremque velit eligendi
              eum repudiandae doloribus quod est aliquid, nam nesciunt.
            </Text>
          </CarrosselItemInfo>
          <CarrosselItemInfo>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              expedita veniam qui corrupti deserunt repellendus, adipisci
              consequatur placeat officiis nesciunt.
            </Text>
          </CarrosselItemInfo>
          <CarrosselItemInfo>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
              voluptas consequatur inventore quis quibusdam quo incidunt
              suscipit qui laborum, nihil culpa, ipsa voluptatum.
            </Text>
          </CarrosselItemInfo>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
