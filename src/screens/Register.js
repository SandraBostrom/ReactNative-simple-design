import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
export default class Register extends React.Component {
  render() {
             const { navigate } = this.props.navigation;

    return (
      <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <Image source={require("../images/2.jpeg")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.introText}>Välkommen</Text>
          <Text style={styles.secondIntroText}>
            Kul att du vill bli en i gänget.
          </Text>
        </View>

        <View style={styles.bar}>
          <TextInput
            placeholder="Användarnamn"
            placeholderTextColor="#00716F"
            style={styles.email}
          />
        </View>

        <View style={styles.bar}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#00716F"
            style={styles.email}
          />
        </View>

        <View style={styles.bar}>
          <TextInput
            secureTextEntry
            placeholder="Lösenord"
            placeholderTextColor="#00716F"
            style={styles.email}
          />
        </View>

        <View style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Registrera</Text>
        </View>
      
            <Text onPress={()=>navigate('Login')}
            style={styles.registerText}>Tillbaka</Text>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  image: {
    height: "40%",
    width: "100%",
    backgroundColor: "white",
    opacity: 0.7,
    borderRadius: 10,
  },
  introText: {
    fontSize: 28,
    alignSelf: "center",
  },
  secondIntroText: {
    fontSize: 18,
    alignSelf: "center",
    marginHorizontal: 55,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.6,
  },
  textContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  bar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    top: 130,
    marginTop: 25,
    paddingHorizontal: 10,
    borderColor: "#00716F",
    borderRadius: 23,
    paddingVertical: 2,
  },
  email: {
    paddingHorizontal: 10,
  },

  registerButton: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    top: 130,
    backgroundColor: "#00716F",
    paddingVertical: 8,
    borderRadius: 23,
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
  },
  registerText: {
    alignSelf: "center",
    color: "#00716F",
    fontSize: 20,
    top: 130,
    marginTop: 5,
  },
});
