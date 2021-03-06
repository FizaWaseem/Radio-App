import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput,Image,ScrollView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import {Block,Button} from 'expo-ui-kit';
import {globalStyle} from '../Styles/global';
import { Ionicons,SimpleLineIcons,AntDesign,Feather } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
 export const ContactUs = ({navigation}) => {
 
 
  return (
    <LinearGradient
    colors={[ "#282a3b","#3d4162"]}
    style={globalStyle.gradient}
  >
      <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss();}}>
    <ScrollView>
   
    <View >
    
     <Block>
     <SimpleLineIcons 
       style={globalStyle.nav}
       onPress={()=> navigation.openDrawer()}
       name="menu" size={24} color="white"  />
       <AntDesign
        style={globalStyle.navBack}
        onPress={() => navigation.navigate("Main")}
        name="back" size={26}  />
        <Image style={globalStyle.Logo} source={require('../assets/Logo.png')} />

   </Block>
   <Block style={globalStyle.textbox1}>
   <Text bold style={globalStyle.textHead} > ContactUs </Text>
      <Text style={globalStyle.textboxdet}> or email us at visionradiouk@hotmail.com </Text>
      <Text style={globalStyle.textboxdet}> or text us 0790834081 </Text>
   </Block>
      <View  style={globalStyle.contactForm}>
        <TextInput style={globalStyle.form1}
          placeholder="Name" />
        <TextInput style={globalStyle.form2}
           placeholder="Email" 
        />
       <TextInput style={globalStyle.form3}  multiline={true}
           numberOfLines={9}
           placeholder="Mobile Number" 
        />
        <Block style={globalStyle.submit}>
        <Feather style={globalStyle.submitIcon} name="send" size={46} color="white" ></Feather>
        </Block>
      
      </View>
    </View>
    </ScrollView>
    </TouchableWithoutFeedback>
 </LinearGradient>
  );
};