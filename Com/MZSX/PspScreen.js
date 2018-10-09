import React from 'react';
import {Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,ScrollView,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class PspScreen extends React.Component {
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
                 <Text style={styles.texto}>        黄地青花六龙捧寿瓶是乾隆60大寿时的贺礼。</Text>
                 <Text style={styles.textt}>        黄色的瓶底象征着皇家的高贵之气，瓶身六条棱，六个面，线条优美。每个面上都有一条五爪龙，每个面上写着一个篆体的“寿”字，寓意皇帝是“九五至尊”。
                 瓶子的顶部和底部各有一圈回纹，接下来一圈是如意云纹。此外，还有连珠纹、香草龙纹、蕉叶纹等各种花纹，做工之细腻，令人叹为观止。</Text>
                 <Text style={styles.texth}>        清乾隆黄地青花六龙捧寿瓶造型颀长挺拔，黄釉下绘青花六龙捧寿纹。此瓶是御窑厂专为庆贺高宗弘历六十寿辰而烧制的陈设瓷。高57厘米，口宽12.4厘米，
                 底宽13.1厘米。现收藏于南京博物院。</Text>
                 <View  style={{ flexDirection: 'row', }}>
                 <Image source={{uri:'asset:/m_06_01.jpg'}} style={styles.liulong}/>
                 <Text  style={styles.liul}>清乾隆 黄地青花六龙捧寿瓶</Text>
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
     liulong:{
        resizeMode:'contain',
        top:15,
        marginLeft:10,
        width:300,
        height:320,
     },
     liul:{
        width:20,
        fontSize:20,
        marginTop:25,
        marginLeft:-45,
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