import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/geral/header";
import { useState } from "react";
import InfoCard from "../component/geral/InfoCard";
import Ionicons from "@expo/vector-icons/Ionicons";

const Coin = () => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        handleVisible={handleVisible}
        textVisible={false}
        visible={visible}
      />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            padding: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 15,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Acompanhe seu dinheiro
          </Text>
          <View
            style={{
              paddingHorizontal: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <InfoCard
              iconName={"cash"}
              title="Caixinhas"
              optionalInfo="R$ 100,00"
            />
            <InfoCard
              iconName={"stats-chart"}
              title="Investimentos"
              optionalInfo="R$ 317,94"
            />
            <InfoCard
              iconName={"logo-bitcoin"}
              title="Cripto"
              optionalInfo="R$ 758,90"
            />
          </View>
        </View>

        <View
          style={{
            padding: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 15,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Seguros</Text>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <InfoCard iconName={"heart"} title="Seguro de vida" />
            <InfoCard iconName={"phone-portrait"} title="Seguro de celular" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Coin;
