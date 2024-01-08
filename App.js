import { Text, View, Image, Button, Linking, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const Contact = "https://www.linkedin.com/in/aufa-algifari-751a66279/";
const TRAVERIA = "https://www.figma.com/file/bwDIumESwZnmfxmseFrTlS/TRAVERIA-Design?type=design&node-id=0%3A1&mode=design&t=anlSBvtyroZSdUVd-1";
const LetsBuy = "https://www.figma.com/file/FWa0xdS3efnj9rF8MmAYBE/Lets-Buy-Design?type=design&node-id=0%3A1&mode=design&t=OAANjCI7R1976fLl-1";

const Porto = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#2E3049", flex: 1 }}>
        <View style={{ backgroundColor: "#2E3049", flex: 1, alignItems: "center" }}>
          <Image style={{ width: 200, height: 200, alignItems: "center", padding: 30, borderRadius: 100, marginTop: 80 }} source={require("./assets/Foto.jpg")} />
        </View>
        <View
          style={{
            padding: 30,
            alignItems: "center",
          }}
        ></View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
            fontFamily: "poppins",
          }}
        >
          Aufa Salsabila Algifari
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "regular",
            textAlign: "center",
            color: "white",
            fontFamily: "poppins",
            marginTop: 15,
          }}
        >
          Perkenalkan, saya Aufa Salsabila Algifari. Saya adalah seorang siswa di SMK Telkom Purwokerto jurusan Rekayasa Perangkat Lunak (RPL)
        </Text>
        <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
          <Button title="Contact Me" color="black" onPress={() => Linking.openURL(Contact)} />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
            fontFamily: "poppins",
            marginTop: 15,
          }}
        >
          My Project
        </Text>

        <View
          style={{
            padding: 10,
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Image style={{ width: 300, height: 200, borderRadius: 10 }} source={require("./assets/Traveria.png")}></Image>
        </View>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <View style={{ width: 230 }}>
            <Text style={styles.boldFont}>TRAVERIA</Text>
            <Text style={styles.normalFont}>Mobile Design App</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(TRAVERIA)}>
              <Image style={{ width: 20, height: 20 }} source={require("./assets/tautan.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 10,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Image style={{ width: 300, height: 200, borderRadius: 10 }} source={require("./assets/LetsBuy.png")}></Image>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <View style={{ width: 230 }}>
            <Text style={styles.boldFont}>Let's Buy</Text>
            <Text style={styles.normalFont}>Mobile Design App</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(LetsBuy)}>
              <Image style={{ width: 20, height: 20 }} source={require("./assets/tautan.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boldFont: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
    fontFamily: "poppins",
  },
  normalFont: {
    fontSize: 14,
    fontWeight: "regular",
    textAlign: "left",
    color: "white",
    fontFamily: "poppins",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2E3049",
    padding: 10,
    borderRadius: 50,
  },
});

export default Porto;
