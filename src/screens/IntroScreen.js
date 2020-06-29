import React from 'react';
import {View , Button,Image, Text, Stylesheet} from 'react-native';
const logo = require("../../assets/logo.png");
//the home screen displays a logo and allows navigation to the next screen where the testing happens
const IntroScreen=({navigation})=> {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'black'}}>
            <Image source={logo}/>
            <Text>Welcome To ForensIT</Text>
            <Button title="Perform Test" onPress={()=>{
navigation.navigate("Home");}
            }>Perform Test</Button>
        </View>
    );
};
const styles= {
  }
export default IntroScreen;