import React from 'react';
import {Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,ScrollView,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class HsbScreen extends React.Component {
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
                 <Text style={styles.texto}>        清康熙青花五彩十二花神杯是清康熙时期制作的青花五彩瓷器，是清代康熙、雍正官窑瓷器中的名品，除青花五彩之外还有青花品种，
                 雍正、嘉庆、光绪、民国均有仿制。</Text>
                 <Text style={styles.textt}>        “十二月花卉纹杯”12件为一套，其外形特点为:撇口、深腹、浅圈足、胎体轻薄、器型精巧绝伦，造型规整优美，胎质乳白、器薄如纸、
                 晶莹剔透。康熙十二花卉杯上的花卉以水仙花开始，然后以此为迎春花、桃花、牡丹花、石榴花、荷花、兰花、桂花、菊花、芙蓉花、月季花和梅花，一杯一花，腹壁一面绘画，
                 另一面题诗，诗句出自唐诗。</Text>
                 <Text style={styles.texth}>        每只杯上绘一种应时花卉，指代历史上的著名女性，并题上相应的诗句，惯称“十二月花卉纹杯”。杯底的款字较小，字体不一，大都不甚工整。
                 官窑规格:口径6.7厘米，足径2.8厘米，高4.9厘米。有一些民窑和后世仿制的尺寸:口径6cm或6.3cm等不同尺寸，足径2.8cm。高6.6cm或6.0cm等不同尺寸。从现有传世品看，
                 无论是绘画还是制胎，花神杯都是康熙官窑的工艺高峰。</Text>
                 <Text style={styles.textf}>        近几年民窑和后世仿制的单品有10次拍卖纪录，单品价格几十万至几百万不等;康熙朝官窑原品无拍卖纪录，河南省开封市博物馆收藏
                 了一整套五彩十二花神杯，故宫博物馆收藏了几只单品不成套。</Text>
                 <Image source={{uri:'asset:/m_q.jpg'}} style={styles.hs}/>
                 <Text  style={styles.hsb}>清康熙·青花五彩十二花神杯</Text>
              </View>


            </ImageBackground>
          </View>
        </ScrollView>
        );
      }
 }

 const styles = StyleSheet.create({
     texto:{
        marginTop:10,
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
    textf:{
        fontSize:25,
        marginLeft:10,
        marginRight:10,
        fontWeight:"500",
    },
     hs:{
        top:15,
        marginLeft:30,
        width:300,
        height:200,
     },
     hsb:{
        fontSize:20,
        marginTop:25,
        marginLeft:60,
        fontWeight:"500",
     },




     backgroundImage:{

         height:1450,
         width,
         top:0,

     },

     container:{
         backgroundColor:'#e2ddd7',
         flex:1,

     }
 });