
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const globalStyle = StyleSheet.create({
    gradient:{
flex:1
    },
   
    container1: {
        paddingTop: 90,
    },
    tinyLogo: {
        width: 120,
        height: 20,
        marginLeft: 30,
        marginVertical:30
       
    },
    // ==========================DrawerList======================//
    container: {
        flex: 1,
        color: 'white',
        marginLeft: 50,
        paddingLeft:0,
        paddingTop:0,
       marginVertical:0,
       marginTop:0,
      height:35,
      width:163
    },
    containericon: {
        color: 'white',
        marginLeft: 140,
      height:35,
      width:50
    },
    labelStyleicon:{

        marginTop:-10
    },
    labelStyle:{
        color: 'rgb( 176, 176, 176 )',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        marginTop:-5
    }
    ,
    socialmedia:{
        marginVertical:40,
        width:25,
        height:25

    },
    //============= Main Page=====================//
   
    Main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(255, 255, 255)',

    },
    Main2: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: 'rgb(61, 65, 98)',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        position: "relative"
    },
    Logo: {
        width: "29%",
        height: 20,
        marginHorizontal: 125,
        marginVertical: -50,
    },
    LogoMain: {
        width: "29%",
        height: 20,
        marginHorizontal: 125,
        marginVertical: -20,
    },
    Logo2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 400,
        borderRadius: 20,
        position: "absolute",
        top: 150,
        left: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    //==============PlayIcons==============================//
    play: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    nav: {
        color: "rgb(255, 255, 255)",
        marginTop: 70,
        marginLeft: 30
    },
    navBack: {
        color:"#5351FB",
        marginLeft: 30,
        marginTop: 5
    }
    ,
    playIcon: {
        backgroundColor: '#5351FB',
        width: 60,
        height: 60,
        borderRadius: 50,
        marginHorizontal: 45,
        marginTop: 50,
        position: "relative", shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    iconplay: {
        position: "absolute",
        left: 25,
        top: 17
    }
    ,
   callIcon: {
       
        width: 40,
        height: 40,
        marginHorizontal: 45,
        borderRadius: 50,
        marginTop: 60,
        position: "relative",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    iconM: {
        position: "absolute",
        left: 9,
        top: 5
    }
   , callicon:{
        width: 40,
        height: 40,
        marginHorizontal: 45,
        borderRadius: 50,
        marginTop: 60,
        position: "relative",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    }
    , msgIcon: {
        backgroundColor: 'rgb(255,255,255 )',
        width: 40,
        height: 40,
        marginHorizontal: 45,
        borderRadius: 50,
        marginTop: 60,
        position: "relative",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    }
    ,

    reloadedVideo: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(74, 57, 131 )',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,

    },
    reloadedVideo2: {
        flex: 4,
        flexDirection: 'column',
        backgroundColor: 'rgb(255, 255, 255)',

    },
   

    // ===============================Reloaded ===========================//
  
    maindiv: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(255, 255, 255)',

    },
    div: {
        flexDirection: 'column',
        height:430,
        backgroundColor: 'rgb(74, 57, 131 )',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        position: "relative"
    }
,
    video:
    {
        width: 150,
        marginVertical: 5,
        height: 150
    },

    textHeader: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
    marginTop:60,
        textAlign: "center"
    },
Grid:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40
},
  boxt: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  wrapper: {
    marginVertical: 10, alignItems: 'center'
  },
  albumCover: {
      marginLeft:20,
      marginTop:30,
      borderRadius:10,
   
    width: 150,
    height: 150,
    position:"relative"
  },
  row:{
  marginVertical:20
  },

control: {
    position:"absolute",
    left:80,
    top:80
   
  },
   
     // ---------------About Us------------------------//
    textclr: {
        color: "rgb(255, 255, 255)",
        fontFamily: 'Montserrat-Regular',
        fontSize: 12
    },
    placeholdertextclr: {
        color: "grey"
    },
   
    textbox: {
        marginHorizontal: 50,
       marginTop:250,
       backgroundColor: "rgb(255,255,255)",
       borderRadius:15,
       width:260,
       height:260
    },
    
    textcolor: {
        color: "rgb(0,0,0)",
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        textAlign:"center",
        marginTop:1,
        paddingTop:30,
       marginHorizontal:15

    }
    ,
    textcolor1: {
        color: "rgb(0,0,0)",
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        textAlign:"center",
        marginTop:10,
       marginHorizontal:15

    }
    ,
    callbtn: {
        position: "relative",
        backgroundColor: '#5351FB',
        width:260,
        height: 60,
        borderRadius: 25,
        marginHorizontal:50,
        marginTop: 20,
        color:"rgb(255,255,255)",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 7,
        // },
        // shadowOpacity: 0.41,
        // shadowRadius: 9.11,
        // elevation: 14,

    },
    callIcon: {
        position: "absolute",
        left: 55,
        top: 17

    },
    calltext:{
        color:"rgb(255,255,255)",
        fontSize:20,
        fontFamily: 'Montserrat-Regular',
        textAlign:"center",
        marginVertical:15
    },
    emailbtn: {
        position: "relative",
        backgroundColor: '#5351FB',
        width:260,
        height: 60,
        borderRadius: 25,
        marginHorizontal:50,
        marginTop: 20,
        color:"rgb(255,255,255)",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 7,
        // },
        // shadowOpacity: 0.41,
        // shadowRadius: 9.11,
        // elevation: 14,

    },
    emailIcon: {
        position: "absolute",
        left: 55,
        top: 17

    },
    emailtext:{
        color:"rgb(255,255,255)",
        fontSize:20,
        fontFamily: 'Montserrat-Regular',
        textAlign:"center",
        marginVertical:15,
        marginLeft:20
    },
    textbox1:{
        marginVertical:80
    },
    textHead: {
        marginTop:20,
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        marginBottom: 3,
        textAlign: "center"
    },
    textboxdet: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        textAlign: "center"
    },
   
   
    //-------------------Input Area-----------------------------//
    form1: {
        borderRadius: 20,
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(0,0,0)",
        width: 260,
        height: 50,
        marginVertical: 5,
        marginHorizontal: 50,
        paddingLeft: 13
    },
    form2: {
        borderRadius: 20,
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(0,0,0)",
        width: 262,
        height: 50,
        marginVertical: 5,
        marginHorizontal: 50,
        paddingLeft: 13,

    }
    ,
    form3: {
        borderRadius: 20,
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(0,0,0)",
        width: 260,
        textAlignVertical: 'top',
        paddingTop: 5,
        marginVertical: 5,
        marginHorizontal: 50,
        paddingLeft: 13,

    }
    ,
    submit: {
        position: "relative",
        backgroundColor: '#5351FB',
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 140,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,

    },
    submitIcon: {
        position: "absolute",
        left: 10,
        top: 15

    },
    
    // ----------Calender----------------------//
    Calender: {
        flexDirection: "row",
        marginBottom: 440,
        borderRadius: 30,

    },
    CalenderText: {
        color: "rgb(255, 255, 255)",
        marginTop: 110,
        fontFamily: 'Montserrat-Regular',
        fontSize: 35,
        textAlign: "center"
    },
    calenderBtn: {
        backgroundColor: "rgb(88, 92, 161 )",
        marginHorizontal: 10,
        color: "rgb(255, 255, 255)",
        width: 100,
        height: 40
    },
    calenderBtn1: {
        width: 100,
        height: 40,
        marginHorizontal: 130,
        fontSize: 34,
        color: "rgb(255, 255, 255)",
    }

});