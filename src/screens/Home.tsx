import { View, Text, StatusBar, Image } from "react-native";

const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor={"#820ad1"} barStyle={"light-content"} />
      <View
        style={{
          backgroundColor: "#820ad1",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#DFAEFF",
            padding: 10,
            borderRadius: 1000,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/perfil.png")}
            style={{ width: 25, height: 25 }}
          />
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
          <Image
            resizeMode="contain"
            source={require("../../assets/olho.png")}
            style={{ width: 25, height: 25 }}
          />
          <Image
            resizeMode="contain"
            source={require("../../assets/interrogação.png")}
            style={{ width: 25, height: 25 }}
          />
          <Image
            resizeMode="contain"
            source={require("../../assets/email.png")}
            style={{ width: 25, height: 25 }}
          />
        </View>
      </View>
    </View>
  );
};
export default Home;
