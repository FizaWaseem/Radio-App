import React from 'react';
import { StyleSheet,  View,Image, SafeAreaView ,TouchableOpacity, Linking} from 'react-native';
import {Block,Button,Text} from 'expo-ui-kit';
import {globalStyle} from '../Styles/global';
import { Ionicons ,Feather,SimpleLineIcons} from '@expo/vector-icons';
import * as SMS from 'expo-sms';
import { Audio } from 'expo-av';
import { LinearGradient } from "expo-linear-gradient";

const audioBookPlaylist = [
    {
        uri: 'https://mscp3.live-streams.nl:8202/live',
      imageSource: require('../assets/image.png')
    }

]
export class Main extends React.Component {
    state = {
        isPlaying: false,
        playbackInstance: null,
        currentIndex: 0,
        volume: 1.0,
        isBuffering: false,
        // toggle:true
      }
      async componentDidMount() {
          try {
            await Audio.setAudioModeAsync({
              allowsRecordingIOS: false,
              interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
              playsInSilentModeIOS: true,
              interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
              shouldDuckAndroid: true,
              staysActiveInBackground: true,
              playThroughEarpieceAndroid: true
            })
       
            this.loadAudio()
          } catch (e) {
            console.log(e)
          }
        }
      //   audio loading//
      async loadAudio() {
          const {currentIndex, isPlaying, volume} = this.state
         
          try {
            const playbackInstance = new Audio.Sound()
            const source = {
              uri: audioBookPlaylist[currentIndex].uri
            }
         
            const status = {
              shouldPlay: isPlaying,
              volume
            }
         
            playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)     
            await playbackInstance.loadAsync(source, status, false)
            this.setState({playbackInstance})
            } catch (e) {
              console.log(e)
            }
        }
         
        onPlaybackStatusUpdate = status => {
          this.setState({
            isBuffering: status.isBuffering
          })
        }
  //Controller//
  handlePlayPause = async () => {
      const { isPlaying, playbackInstance } = this.state
      isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
   
      this.setState({
        isPlaying: !isPlaying
      })
    }

    // _onPress(){
    //   const newState=!this.state.toggle;
    //   this.setState({toggle:newState})
    // }
    // for sms sending
    onMsg= async()=>{
const status =await SMS.sendSMSAsync(
  '+447908340811',
  'Sent from the VRUK App'
);
console.log(status);
    };

    //for call
    _pressCall=()=>{
      const url='tel://+447908340811'
      Linking.openURL(url)
    };
    
    render() {
      // const {toggle}=this.state;
      // const buttonBg =toggle?"white":"green";
      // const iconclr= toggle?"rgb(166, 166, 166)":"white";
    return (
      <LinearGradient
      colors={[ "#282a3b","#3d4162"]}
      style={globalStyle.gradient}
    >
    <SafeAreaView style={globalStyle.Main  }>
       <Block style={ globalStyle.Main2}>
       <TouchableOpacity>
       <SimpleLineIcons 
       style={globalStyle.nav}
       onPress={()=> this.props.navigation.openDrawer()}
       name="menu" size={24} color="white"  />
       </TouchableOpacity>
       <Image style={globalStyle.LogoMain} source={require('../assets/Logo.png')} />
       <Image style={globalStyle.Logo2} source={require('../assets/image.png')} />
       </Block> 
       
       <Block style={globalStyle.play}>

       <TouchableOpacity 
    style={globalStyle.msgIcon } onPress={()=>{ this._pressCall()}} >
        
       <SafeAreaView >
       <Ionicons  style={globalStyle.iconM}  name="md-call"  size={25} color="rgb(166, 166, 166)"></Ionicons>
       </SafeAreaView>
</TouchableOpacity>
       <TouchableOpacity style={globalStyle.playIcon} onPress={this.handlePlayPause}>
       {this.state.isPlaying ? (
      
       <Ionicons style={globalStyle.iconplay}  name='ios-pause' size={25} color="white"  ></Ionicons>
       ) : ( 
        <Ionicons style={globalStyle.iconplay} name="ios-play" size={25} color='white' />
     
      )}
      
      </TouchableOpacity>
      <TouchableOpacity  onPress= {this.onMsg}>
       <SafeAreaView style={globalStyle.msgIcon}>
       <Feather style={globalStyle.iconM}  name="message-circle"  size={25} color="rgb(166, 166, 166)"></Feather>
       </SafeAreaView>
       </TouchableOpacity> 
       </Block>
      
        </SafeAreaView>
        </LinearGradient>
        );
} 
}


    