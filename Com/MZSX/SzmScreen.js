import React from 'react';
import {Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,ScrollView,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class GgzScreen extends React.Component {
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
                 <Text style={styles.texto}>        宣德青花瓷器造型敦厚端庄，釉面青亮，纹饰细腻豪放，笔法潇洒，一向被列为明代青花之冠。此盘主题纹饰为松竹梅纹。松竹梅世称"岁寒三友" ，
                 寓意高风亮节。外壁绘画的庭园仕女图为研究明代贵族妇女的生活提供了宝贵的资料。由于宣德时期青花原料数量较少，因此在青花器上绘制人物图案者为数不多，此器则更显珍贵。</Text>
                 <Text style={styles.textt}>        盘撇口，弧壁，圈足，内外皆有青花纹饰，盘心环以青花双圈，内绘松、竹、梅、山石、灵芝等纹饰，外壁绘庭园景色，远方仙山云气缥缈，近有悠闲的贵妇等
                 人物凭栏而立，以山水、杨柳等景物相衬。口沿和足边各饰青花弦纹两道。圈足内施白釉，中间青花双圈内书"大明宣德年制"双行六字楷书款。 高4.2cm，口径21.4cm，足径13.6cm。</Text>
                 <Text style={styles.texth}>        现藏于北京故宫博物院。</Text>
                 <View  style={{ flexDirection: 'row', }}>
                 <Image source={{uri:'asset:/m_m1.jpg'}} style={styles.m1}/>
                 <Image source={{uri:'asset:/m_m2.jpg'}} style={styles.m2}/>
                 </View>
                 <View>
                 <Text  style={styles.wp}>明宣德·青花松竹梅纹盘</Text>
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
     m1:{
        resizeMode:'contain',
        top:15,
        marginLeft:-5,
        width:200,
        height:170,
     },
     m2:{
        resizeMode:'contain',
        top:15,
        marginLeft:-30,
        width:200,
        height:170,
     },
     wp:{
        fontSize:20,
        marginTop:20,
        marginLeft:80,
        fontWeight:"500",
     },




     backgroundImage:{

         height:1000,
         width,
         top:0,

     },

     container:{
         backgroundColor:'#e2ddd7',
         flex:1,

     }
 });