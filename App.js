import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,Text,StyleSheet } from "react-native";
import Saludo from "./assets/Components/saludo";


function App(){
  return(
  <View>
    <Text style={styles.text}>Componentes</Text>
    <Saludo persona ="juanito"/>
    <Saludo persona ="ignacio"/>
    <StatusBar style="auto"/>
  </View>
  

  );

}


export default App;

const styles = StyleSheet.create({
  text:{
    marginTop: 50
    

  }

})