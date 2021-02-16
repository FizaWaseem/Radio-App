import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet,Image,TouchableOpacity,Linking} from 'react-native';
import {Block,Button,Text} from 'expo-ui-kit';
import { Ionicons } from '@expo/vector-icons';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Link } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from '../screen/Main';
import { AboutUs } from '../screen/AboutUs';
import { ContactUs } from '../screen/ContactUs';
import { SongRequest } from '../screen/SongRequest';
import { Calender } from '../screen/Calender';
import {globalStyle} from '../Styles/global';
import { AntDesign } from '@expo/vector-icons';




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Screens =( {navigation})=>{
  return (
       <Stack.Navigator screenOptions={{
         headerTransparent: true,
         headerTitle: null,
         headerLeft : null,
       }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="SongRequest" component={SongRequest} />
        <Stack.Screen name="Calender" component={Calender}  />
      
     </Stack.Navigator>
  );
}

const DrawerContent = props => {
  return(
    <DrawerContentScrollView {...props}> 
    <DrawerItem
   icon={() => <AntDesign name="back"  color={"white"} size={25} />}
     label=""
     labelStyle={globalStyle.labelStyleicon}
        onPress={() => props.navigation.navigate("Main")}
        style={globalStyle.containericon}    />
   <Block>
   <Image style={globalStyle.tinyLogo} source={require('../assets/Logo.png')}/>
   </Block>
   <Block style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around',}}>
   <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com/visionradiouk')}>
   <Block style={{ marginLeft: 35}}>
   <Image style={globalStyle.socialmedia} source={require('../assets/twitter.png')}/>
   </Block>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/visionradiouk')}>
   <Block style={{ marginRight: 0}} >
   <Image style={globalStyle.socialmedia} source={require('../assets/facebook.png')}/>
   </Block>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/vruk_london')}>
   <Block style={{ marginRight: 0}} >
   <Image style={globalStyle.socialmedia} source={require('../assets/instagram.png')}/>
   </Block>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => Linking.openURL('https://www.twitch.tv/visionradiouklondon')}>
   <Block style={{ marginRight:35}} >
   <Image style={globalStyle.socialmedia} source={require('../assets/twitch.png')}/>
   </Block>
   </TouchableOpacity>
   </Block>
   

   <DrawerItem
        label="Home"
        labelStyle={globalStyle.labelStyle}
        onPress={() => props.navigation.navigate("Main")}
        style={globalStyle.container}   />
   <DrawerItem
        label="About Us"
        labelStyle={globalStyle.labelStyle}
        onPress={() => props.navigation.navigate("AboutUs")}
        style={globalStyle.container}   />
       <DrawerItem
        label="Calender"
        labelStyle={globalStyle.labelStyle}
        onPress={() => props.navigation.navigate("Calender")}
        style={globalStyle.container}   />
      <DrawerItem
        label="Song Request"
        labelStyle={globalStyle.labelStyle}
        onPress={() => props.navigation.navigate("SongRequest")}
        style={globalStyle.container} />  
      <DrawerItem
        label="Contact Us"
        labelStyle={globalStyle.labelStyle}
        onPress={() => props.navigation.navigate("ContactUs")}
        style={globalStyle.container} />  
    </DrawerContentScrollView>
  )
}
export function Header() {
 
  return (
  
    <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}
    drawerStyle={{
        
      // alignItems:"center",
      backgroundColor: '#282A3B',
    width: 200,
    
  }}>
        <Drawer.Screen name="Screens" component={Screens} />
      </Drawer.Navigator>
      

  );
}


  
  
