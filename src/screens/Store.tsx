import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";

import Header from "../component/geral/header";
import { useState } from "react";
import CarrosselItemInfo from "../component/geral/CarrosselItemInfo";

const Store = () => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        handleVisible={() => {
          setVisible(!visible);
        }}
        visible={visible}
        textVisible={false}
      />

      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 900 }}>
          Fundos por investidores
        </Text>
        <ScrollView
          horizontal={true}
          style={{ width: "100%" }}
          showsHorizontalScrollIndicator={false}
        >
          <CarrosselItemInfo>
            <Image
              resizeMode="cover"
              source={require("../../assets/luka.jpg")}
              style={{ width: 230, height: 200, borderRadius: 16 }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "900" }}>
                Investidor Luka Rafael
              </Text>
            </View>
          </CarrosselItemInfo>
          <CarrosselItemInfo>
            <Image
              resizeMode="cover"
              source={require("../../assets/investidorSenior.png")}
              style={{ width: 230, height: 200, borderRadius: 16 }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "900" }}>
                Investidor Danilo
              </Text>
            </View>
          </CarrosselItemInfo>
          <CarrosselItemInfo>
            <Image
              resizeMode="cover"
              source={require("../../assets/joao.jpg")}
              style={{ width: 230, height: 200, borderRadius: 16 }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "900" }}>
                Investidor João Carlos
              </Text>
            </View>
          </CarrosselItemInfo>
          <CarrosselItemInfo>
            <Image
              resizeMode="cover"
              source={require("../../assets/richard.jpg")}
              style={{ width: 230, height: 200, borderRadius: 16 }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "900" }}>
                Investidor Richard
              </Text>
            </View>
          </CarrosselItemInfo>
        </ScrollView>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          padding: 15,
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 900 }}>Tem de tudo</Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/shopee.png")}
            style={{ borderRadius: 16, width: 60, height: 60 }}
          ></Image>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Shopee</Text>
            <Text>Cupom para comprar acima de R$40</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>50% OFF</Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/googleplay.png")}
            style={{ borderRadius: 16, width: 60, height: 60 }}
          ></Image>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Google Play
            </Text>
            <Text>Cupom para comprar acima de R$10</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>90% OFF</Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/mercado.png")}
            style={{ borderRadius: 16, width: 60, height: 60 }}
          ></Image>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Shopee</Text>
            <Text>Cupom para comprar acima de R$200</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>20% OFF</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Store;
