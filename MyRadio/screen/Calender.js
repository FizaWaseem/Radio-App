import React,{useState,useEffect} from 'react';
import { Platform, StyleSheet,  View, ScrollView, Image } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import {globalStyle} from '../Styles/global';
import {Block,Text} from 'expo-ui-kit';
import { Ionicons,SimpleLineIcons,AntDesign,Feather } from '@expo/vector-icons';
import { max } from 'date-fns';
import { LinearGradient } from "expo-linear-gradient";



export const Calender=({navigation})=>  {
  const [currentDate, setCurrentDate] = useState('');
        const[contents,setcontent]=useState( [
          {
            id:'1',
            title:'Monday',
              time:"10:2",
              name:"Dj fiza"
              ,
          },
          {
            id:'2',
            title:'Tuesday',
            time:"10:2",
              name:"Dj fiza"
          }, 
          {
            id:'3',
            title:'Wednesday',
            time:"10:2",
              name:"Dj fiza"
          },
          {
            id:'4',
            title:'Thursday',
            time:"10:2",
              name:"Dj fiza"
          },
          {
            id:'5',
            title:'Friday',
          
            time:"10:2",
            name:"Dj fiza",
           
           
          }
          ,{
            id:'6',
            title:'Saturday',
            time:"10:2",
            name:"Dj fiza"
          },{
            id:'0',
            title:'Sunday',
            time:"10:2",
            name:"Dj fiza",
           
          }
          
          
        ]); 
    var date=new Date().getDate();
  var day=new Date().getDay();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var dayname = days[day];
  // console.log(day);
  // console.log(contents[6].id);
  // var first = contents[6];
  // console.log(first, first.id);
        return(

          <LinearGradient
          colors={[ "#282a3b","#3d4162"]}
          style={globalStyle.gradient}
        >
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
        <Image style={globalStyle.Logo} source={require('../assets/Logo.png')}  />
  <Text style={globalStyle.CalenderText} bold >Calender</Text>
  <Text>{currentDate}</Text>
  </Block>
<View style={styles.container}>
  <ScrollView style={{ alignSelf: 'stretch' }}>
  {
    (day==contents[0].id)
    ? <DropDownItem
            style={styles.dropDownItem}
            contentVisible={true}
            
            header={
              <View>
                <Text style={ styles.headertext1}>{contents[0].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt1
            ]}>
              {contents[0].time}<Text style={[
              styles.txt1
            ]} >:{contents[0].name}
            </Text></Text>
          </DropDownItem>
           : <DropDownItem
            style={styles.dropDownItem}
            contentVisible={false}
            
            header={
              <View>
                <Text style={ styles.headertext1}>{contents[0].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
            ]}>
              {contents[0].time}<Text style={[
              styles.txt1
            ]} >:{contents[0].name}
            </Text></Text>
          </DropDownItem>
  }

  {
    (day==contents[1].id)
    ? <DropDownItem
            style={styles.dropDownItem}
            contentVisible={true}
            
            header={
              <View>
                <Text style={ styles.headertext2}>{contents[1].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
            ]}>
              {contents[1].time}<Text style={[
              styles.txt1
            ]} >:{contents[1].name}
            </Text></Text>
          </DropDownItem>
           : <DropDownItem
            style={styles.dropDownItem}
            contentVisible={false}
            
            header={
              <View>
                <Text style={ styles.headertext2}>{contents[1].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
              
            ]}>
              {contents[1].time}<Text style={[
              styles.txt1
            ]} >:{contents[1].name}
            </Text></Text>
          </DropDownItem>
  }
  {
    (day==contents[2].id)
    ? <DropDownItem
            style={styles.dropDownItem}
            contentVisible={true}
            
            header={
              <View>
                <Text style={ styles.headertext3}>{contents[2].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
            ]}>
              {contents[2].time}<Text style={[
              styles.txt1
            ]} >:{contents[2].name}
            </Text></Text>
          </DropDownItem>
           : <DropDownItem
            style={styles.dropDownItem}
            contentVisible={false}
            
            header={
              <View>
                <Text style={ styles.headertext3}>{contents[2].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
            ]}>
              {contents[2].time}<Text style={[
              styles.txt1
            ]} >:{contents[2].name}
            </Text></Text>
          </DropDownItem>
  }
  {
    (day==contents[3].id)
    ? <DropDownItem
            style={styles.dropDownItem}
            contentVisible={true}
            
            header={
              <View>
                <Text style={ styles.headertext4}>{contents[3].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
            ]}>
              {contents[3].time}<Text style={[
              styles.txt1
            ]} >:{contents[3].name}
            </Text></Text>
          </DropDownItem>
           : <DropDownItem
            style={styles.dropDownItem}
            contentVisible={false}
            
            header={
              <View>
                <Text style={ styles.headertext4}>{contents[3].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
            ]}>
              {contents[3].time}<Text style={[
              styles.txt1
            ]} >:{contents[3].name}
            </Text></Text>
          </DropDownItem>
  }
  {
    (day==contents[4].id)
    ? <DropDownItem
            style={styles.dropDownItem}
            contentVisible={true}
            
            header={
              <View>
                <Text style={ styles.headertext5}>{contents[4].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
            ]}>
              {contents[4].time}<Text style={[
              styles.txt1
            ]} >:{contents[4].name}</Text>
            </Text>
          </DropDownItem>
           : <DropDownItem
            style={styles.dropDownItem}
            contentVisible={true}
            
            header={
              <View>
                <Text style={ styles.headertext5}>{contents[4].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
            ]}>
              {contents[4].time}<Text style={[
              styles.txt1
            ]} >:{contents[4].name}</Text>
            </Text>
          </DropDownItem>
  }
  {
    (day==contents[5].id)
    ? <DropDownItem
            style={styles.dropDownItem}
            contentVisible={true}
            
            header={
              <View>
                <Text style={ styles.headertext6}>{contents[5].title}</Text>
              </View>
            }
          >
            <Text bold style={[
              styles.txt
            ]}>
              {contents[5].time} </Text><Text style={
              styles.txt}>:{contents[5].name}
            </Text>
          </DropDownItem>
           : <DropDownItem
            style={styles.dropDownItem}
            contentVisible={false}
            
            header={
              <View>
                <Text style={ styles.headertext6}>{contents[5].title}</Text>
              </View>
            }
          >
            <Text style={
              styles.txt}>
              {contents[5].time}<Text style={[
              styles.txt1
            ]} >:{contents[5].name}
            </Text></Text>
          </DropDownItem>
  }
  {
    (day==contents[6].id)
    ? <DropDownItem
            style={styles.dropDownItem}
            contentVisible={true}
            
            header={
              <View>
                <Text style={
                 styles.headertext7
      
                }>{contents[6].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
            ]}>
              {contents[6].time}<Text style={[
              styles.txt1
            ]} >:{contents[6].name}
            </Text></Text>
          </DropDownItem>
           : <DropDownItem
            style={styles.dropDownItem}
            contentVisible={false}
            header={
              <View>
                <Text style={ styles.headertext7}>{contents[6].title}</Text>
              </View>
            }
          >
            <Text style={[
              styles.txt
            ]}>
              {contents[6].time}<Text style={[
              styles.txt1
            ]} >:{contents[6].name}
            </Text>
            </Text>
          </DropDownItem>
  }    
    <View />
  </ScrollView>
</View>
</View>
</LinearGradient>
   )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5351FB',
      marginTop: 230,
    },
    header: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 12,
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headertext1:{
      fontSize: 32,
      height:60,
      marginLeft:0,
      paddingLeft:15,
      textAlign:"justify",
      marginTop:0,
      fontFamily: 'Montserrat-Bold',
      backgroundColor: '#5250FF',
      color: 'white'
    },
    txt: {
      backgroundColor: '#5250FF',
      width: '100%',
      fontFamily: 'Montserrat-Bold',
      color:"white",
      fontSize: 23,
      textAlign:"center",
      marginLeft:20,
      marginRight:6
    },
    txt1: {
      backgroundColor: '#5250FF',
      width: '100%',
      fontFamily: 'Montserrat-Light',
      color:"white",
      fontSize: 20,
      textAlign:"center",
     
     
    },
    headertext2:{
      fontSize: 32,
      height:60,
      marginLeft:0,
      paddingLeft:15,
      textAlign:"justify",
      marginTop:0,
      fontFamily: 'Montserrat-Bold',
      backgroundColor: '#4240CE',
      color: 'white'
    },
   
    headertext3:{
      fontSize: 32,
      height:60,
      marginLeft:0,
      paddingLeft:15,
      textAlign:"justify",
      marginTop:0,
      fontFamily: 'Montserrat-Bold',
      backgroundColor: '#3B3AA7',
      color: 'white'
    },
    
    headertext4:{
      fontSize: 32,
      height:60,
      marginLeft:0,
      paddingLeft:15,
      textAlign:"justify",
      marginTop:0,
      fontFamily: 'Montserrat-Bold',
      backgroundColor: '#272673',
      color: 'white'
    },
   
    headertext5:{
      fontSize: 32,
      height:60,
      marginLeft:0,
      paddingLeft:15,
      textAlign:"justify",
      marginTop:0,
      fontFamily: 'Montserrat-Bold',
      backgroundColor: '#1B1A55',
      color: 'white'
    },
    
    headertext6:{
      fontSize: 32,
      height:60,
      marginLeft:0,
      paddingLeft:15,
      textAlign:"justify",
      marginTop:0,
      fontFamily: 'Montserrat-Bold',
      backgroundColor: '#161643',
      color: 'white'
    },
   
    headertext7:{
      fontSize: 32,
      height:60,
      marginLeft:0,
      paddingLeft:15,
      textAlign:"justify",
      marginTop:0,
      fontFamily: 'Montserrat-Bold',
      backgroundColor: '#111131',
      color: 'white'
    },
    
    headerTxt: {
      fontSize: 12,
      color: 'rgb(74,74,74)',
      marginRight: 60,
      flexWrap: 'wrap',
    },
   
  });
  