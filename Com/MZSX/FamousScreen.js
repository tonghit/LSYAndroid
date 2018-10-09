import React from 'react';
import { Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,ScrollView,Image,TouchableOpacity} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const { width,height } = Dimensions.get('window');
export default class FamousScreen extends React.Component {
    static navigationOptions = {
        title: '名作赏析',
        headerStyle: {
          backgroundColor: '#0e529f',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf:'center'
        },
      };
  render() {
    return (
    <ScrollView>
        <View style={styles.container} >
            <ImageBackground
                style={styles.backgroundImage}
                source={{uri:'m_dy.png'}}
            >
        <View >
           <View  style={{ flexDirection: 'row',
                           justifyContent: 'space-around',
                         }}>
               <TouchableOpacity style={styles.tu1} onPress={() => this.props.navigation.navigate('Ggz')}>
                  <Image source={{uri:'asset:/m01.jpg'}} style={styles.guigu}/>
                  <Text  style={styles.guiguzi} >元·青花鬼谷子下山图罐</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.tu2} onPress={() => this.props.navigation.navigate('Hsb')}>
                   <Image source={{uri:'asset:/m02.jpg'}} style={styles.huashen}/>
                   <Text  style={styles.huashenbei} >清康熙·青花五彩十二花神杯</Text>
               </TouchableOpacity>
           </View>
           <View  style={{ flexDirection: 'row',
                           justifyContent: 'space-around',
                         }}>
               <TouchableOpacity style={styles.tu3} onPress={() => this.props.navigation.navigate('Szm')}>
                  <Image source={{uri:'asset:/m03.jpg'}} style={styles.songzhumei}/>
                  <Text  style={styles.wenpan} >明宣德·青花松竹梅纹盘</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.tu4} onPress={() => this.props.navigation.navigate('Czhj')}>
                   <Image source={{uri:'asset:/m04.jpg'}} style={styles.chanzhi}/>
                   <Text  style={styles.huajiao} >明永乐·青花缠枝莲纹花浇</Text>
               </TouchableOpacity>
           </View>
           <View  style={{ flexDirection: 'row',
                           justifyContent: 'space-around',
                         }}>
               <TouchableOpacity style={styles.tu5} onPress={() => this.props.navigation.navigate('Wswz')}>
                  <Image source={{uri:'asset:/m05.jpg'}} style={styles.wanshou}/>
                  <Text  style={styles.wenzun} >清康熙·青花万寿纹尊</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.tu6} onPress={() => this.props.navigation.navigate('Psp')}>
                  <Image source={{uri:'asset:/m06.jpg'}} style={styles.pengshou}/>
                  <Text  style={styles.long} >清乾隆·黄地青花六龙捧寿瓶</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.tu7} onPress={() => this.props.navigation.navigate('Albzt')}>
                   <Image source={{uri:'asset:/m07.jpg'}} style={styles.alabo}/>
                   <Text  style={styles.zhutai} >明正德·青花阿拉伯文烛台</Text>
               </TouchableOpacity>
           </View>

        </View>



            </ImageBackground>

        </View>
    </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

    topView:{
        width,
        height:height/13,
        backgroundColor:'#0e529f',
        fontFamily:'Courier',
    },
    tu1:{
       top:20,
    },
    guigu:{
        resizeMode:'contain',
        width:150,
        height:120,
    },
    guiguzi:{
       width:150,
       fontSize:20,
       fontWeight:"500",
    },

    tu2:{
       top:20,
    },
    huashen:{
        resizeMode:'contain',
        width:150,
        height:120,
    },
    huashenbei:{
       width:150,
       fontSize:20,
       fontWeight:"500",
    },

    tu3:{
       top:35,
    },
    songzhumei:{
       resizeMode:'contain',
       width:200,
       height:150,
    },
    wenpan:{
       marginLeft:25,
       width:150,
       fontSize:20,
       fontWeight:"500",
    },

    tu4:{
       top:35,
    },
    chanzhi:{
       resizeMode:'contain',
       width:200,
       height:150,
    },
    huajiao:{
       marginLeft:25,
       width:150,
       fontSize:20,
       fontWeight:"500",
    },

    tu5:{
       top:10,
    },
    wanshou:{
        resizeMode:'contain',
        width:100,
        height:240,
    },
    wenzun:{
       marginTop:-40,
       width:100,
       fontSize:20,
       fontWeight:"500",
    },

    tu6:{
       top:55,
    },
    pengshou:{
        resizeMode:'contain',
        width:120,
        height:150,
    },
    long:{
       marginTop:0,
       marginLeft:5,
       width:110,
       fontSize:20,
       fontWeight:"500",
    },

    tu7:{
       top:25,
    },
    alabo:{
        resizeMode:'contain',
        width:100,
        height:210,
    },
    zhutai:{
       marginTop:-25,
       width:100,
       fontSize:20,
       fontWeight:"500",
    },


    backgroundImage:{

        height:680,
        width,
        top:0,

    },

    container:{
        backgroundColor:'#e2ddd7',
        flex:1,

    },
});