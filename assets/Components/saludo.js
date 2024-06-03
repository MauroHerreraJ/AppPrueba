import React, { Fragment } from "react";
import {Text, View} from "react-native"; 

const Saludo =(props)=>{
    return (
    <View>
    <Text>
        Hola {props.persona} 
    </Text>
    </View>  
    )
}

export default Saludo;