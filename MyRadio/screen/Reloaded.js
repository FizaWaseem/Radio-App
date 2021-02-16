
import React ,{useState}from 'react';
import { StyleSheet,  View,Image,ScrollView,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from 'expo-ui-kit';
import {globalStyle} from '../Styles/global';
import { SimpleLineIcons,AntDesign, Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { Col, Row, Grid } from "react-native-easy-grid";


const audioBookPlaylist = [
  {
      uri: 'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3',
    imageSource: require('../assets/flower-729512_640.jpg')
  }

]

export class Reloaded extends React.Component {
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false
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
// 2nd play
handlePlay = async () => {
  const { isPlaying, playbackInstance } = this.state
  isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

  this.setState({
    isPlaying: !isPlaying
  })
}
render() {
    return (
    
   <Block  style={globalStyle.maindiv}>
       <View style={ globalStyle.div}>
      
      {/* =============NavIcon=================== */}
   <SimpleLineIcons 
       style={globalStyle.nav}
       onPress={()=> this.props.navigation.openDrawer()}
       name="menu" size={24} color="white"  />
         <AntDesign
        style={globalStyle.navBack}
        onPress={() => this.props.navigation.navigate("Main")}
        name="back" size={26} color="blue" />
 {/* ======================================= */}
 
 <Image style={globalStyle.Logo} source={require('../assets/Logo.png')} />

       <Text bold style={globalStyle.textHeader}>Reloaded</Text>
      

       <Grid>
       <Col>
    <Row size={1}>
    <Image
          style={globalStyle.albumCover}
          source={require('../assets/lavender-4348354_1920.jpg')}
        />
         <TouchableOpacity style={globalStyle.control} onPress={this.handlePlay}>
       {this.state.isPlaying ? (
      
        <Ionicons name='ios-pause' size={48} color='white' />
       ) : ( 
        <Ionicons name='ios-play-circle' size={48} color='white' />
     
      )}
      
      </TouchableOpacity>
    </Row>
   
    </Col>
    <Col>
    <Row size={1} >
    <Image
          style={globalStyle.albumCover}
          source= {require('../assets/lavender-4348354_1920.jpg')}
        />
           <TouchableOpacity style={globalStyle.control} onPress={this.handlePlayPause}>
       {this.state.isPlaying ? (
      
        <Ionicons name='ios-pause' size={48} color='white' />
       ) : ( 
        <Ionicons name='ios-play-circle' size={48} color='white' />
     
      )}
      
      </TouchableOpacity>
        </Row>
     
    </Col>
    
</Grid>

       </View> 
    </Block>
    
)
} 
}