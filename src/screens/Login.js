import React from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'
export default class Login extends React.Component{

    render(){
         const {navigate} = this.props.navigation;

        return (
          <View style={{ backgroundColor: "#fff", height: "100%" }}>
            <Image source={require("../images/1.jpeg")} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.introText}>Ensamträna mig</Text>
              <Text style={styles.secondIntroText}>
                Dags att ensamträna din pälskling? Logga in för att få redskap
                och tips{" "}
              </Text>
            </View>
            <View style={styles.loginBar}>
              <Icon name="mail" color="#00716F" size={24} />
              <TextInput 
              placeholder='Email'
              style={styles.email} />
            </View>
            
            <View style={styles.loginBar}>
              <TextInput 
              placeholder='Lösenord'
              style={styles.email} />
            </View>

            <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Logga in</Text>
            </View>
            <Text onPress={()=>navigate('Register')}
            style={styles.registerText}>Registrera dig?</Text>
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

  loginBar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    top: 150,
    marginTop: 25,
    paddingHorizontal: 10,
    borderColor: "#00716F",
    borderRadius: 23,
    paddingVertical: 2,
  },
  email: {
    paddingHorizontal: 10,
  },

  loginButton: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    top: 150,
    backgroundColor: "#00716F",
    paddingVertical: 8,
    borderRadius: 23,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
  },
  registerText:{
      alignSelf:'center',
      color:"#00716F",
      fontSize:20,
      top:150,
      marginTop:5,

  }
});
