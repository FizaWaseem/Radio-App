import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Linking, TouchableWithoutFeedback,  SafeAreaView } from 'react-native';
import { Block, Button, Text } from 'expo-ui-kit';
import { globalStyle } from '../Styles/global';
import { Ionicons, SimpleLineIcons, AntDesign, Feather,MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";

export const AboutUs = ({ navigation }) => {
    //for call
   const _pressCall=()=>{
      const url='tel://+447908340811'
      Linking.openURL(url)
 
    };
    // for Email 

   const _pressMail=()=>{
    const url='mailto:visionradiouk@hotmail.com'
    Linking.openURL(url)
  
  };
  return (
    <LinearGradient
    colors={[ "#282a3b","#3d4162"]}
    style={globalStyle.gradient}
  >
    <SafeAreaView>
        <Block> 
  <SimpleLineIcons 
       style={globalStyle.nav}
       onPress={()=> navigation.openDrawer()}
       name="menu" size={24} color="white"  />
         <AntDesign
        style={globalStyle.navBack}
        onPress={() => navigation.navigate("Main")}
        name="back" size={26}  />
        <Image style={globalStyle.Logo} source={require('../assets/Logo.png')}  />
  <Text style={globalStyle.CalenderText}  >About Us</Text>
  </Block>
      <View>
        <View style={globalStyle.textbox}>
          <Text style={globalStyle.textcolor}  >
            Vision is an internet radio station playing all generes of music dance from the House to UKG,Hip Hop to Soul.Deep house to tecch house and much more
            </Text>
          <Text style={globalStyle.textcolor1}  >
            We are always here for you, 24/7 around the globe form our London studios
            </Text>
          <Text style={globalStyle.textcolor1}  >
            To find out how to advertisement on vision or to book one of your DJ's you can mail or call by clicking on Contact Us page
            </Text>
        </View>
        <TouchableOpacity onPress={ _pressCall} >
          <View style={globalStyle.callbtn}>
          <Ionicons  style={globalStyle.callIcon}  name="md-call"  size={25} color="white"></Ionicons>
            <Text style={globalStyle.calltext}>Call Us</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={_pressMail}>
          <View style={globalStyle.emailbtn}>
            <MaterialIcons style={globalStyle.emailIcon} name="email" size={25} color="white" />
            <Text style={globalStyle.emailtext}>Email Us</Text>
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
    </LinearGradient>
  );
};