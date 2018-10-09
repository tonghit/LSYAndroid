import React from 'react';
import {Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,ScrollView,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class AlbztScreen extends React.Component {
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
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground
                style={styles.backgroundImage}
                source={{uri:'asset:/m_dy.png'}}
             >


              <View>
                 <Text style={styles.texto}>        青花阿拉伯文烛台从名字上就能看出这是一款有外来文化融合的陶瓷制品，明初常以梵文、阿拉伯文装饰瓷器，由于正德皇帝重视伊斯兰教，
                 所以当时阿拉伯文更为流行，出现在各类器物上，文字一般多含吉祥祈福之意。有时内容已不重要，相当一部分文字已无法释出原意，而只是作为装饰纹样。这种瓷器上的阿拉伯文装饰
                 是研究明代中叶伊斯兰文化与汉文化相互交融、影响的实物资料。</Text>
                 <Text style={styles.textt}>        青花阿拉伯文烛台通体青花装饰，小托盘外壁绘如意云头纹，大托盘外壁绘勾莲花枝纹，间以菱形纹饰。支柱及高足外壁的中部均有圆形开光，
                 内书阿拉伯文，开光上下绘勾莲花枝纹及菱形纹，近足底处绘如意云头纹。外底署青花楷书 “大明正德年制” 双行六字款，外围青花双线圈。烛台高24.6cm，口径6.7cm，足径13cm。</Text>
                 <Text style={styles.texth}>        原是明代宫廷御用瓷器，现藏于北京故宫博物院。</Text>
                 <View  style={{ flexDirection: 'row', }}>
                 <Image source={{uri:'asset:/m_07_01.jpg'}} style={styles.alb}/>
                 <Text  style={styles.zt}>明正德青花阿拉伯文烛台</Text>
                 </View>
              </View>


            </ImageBackground>
          </View>
        </ScrollView>
        );
      }
 }

 const styles = StyleSheet.create({
     texto:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        fontSize:25,
        fontWeight:"500",
     },
     textt:{
        fontSize:25,
        marginLeft:10,
        marginRight:10,
        fontWeight:"500",
     },
     texth:{
        fontSize:25,
        marginLeft:10,
        marginRight:10,
        fontWeight:"500",
     },
     alb:{
        resizeMode:'contain',
        top:15,
        marginLeft:25,
        width:305,
        height:400,
     },
     zt:{
        width:220,
        fontSize:20,
        marginTop:420,
        marginLeft:-260,
        fontWeight:"500",
     },




     backgroundImage:{

         height:1350,
         width,
         top:0,

     },

     container:{
         backgroundColor:'#e2ddd7',
         flex:1,

     }
 });