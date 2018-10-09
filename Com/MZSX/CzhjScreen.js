import React from 'react';
import {Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,ScrollView,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class CzhjScreen extends React.Component {
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
                 <Text style={styles.texto}>        明·永乐·青花缠枝莲纹花浇是明永乐年间的瓷器。 </Text>
                 <Text style={styles.textt}>        花浇直口，直颈，溜肩，硕腹，足内凹，一侧以螭龙为柄，柄两端各有一头，
                 一衔于外口，一作柄尾。通体绘青花纹饰，口部边沿绘缠枝莲纹，颈部绘海水江崖及花瓣纹各一周，腹部主题纹饰为缠枝莲纹，近足处绘变形如意头纹一周。高14.7cm，口径8cm，足径4cm。</Text>
                 <Text style={styles.texth}>        此花浇青花色泽浓艳，有黑色结晶斑。其造型风格系仿西亚黄铜壶器物。</Text>
                 <Image source={{uri:'asset:/m_04_01.jpg'}} style={styles.cz}/>
                 <Text  style={styles.hj}>明永乐·青花缠枝莲纹花浇</Text>
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
     cz:{
        top:15,
        marginLeft:60,
        width:240,
        height:250,
     },
     hj:{
        fontSize:20,
        marginTop:20,
        marginLeft:70,
        fontWeight:"500",
     },




     backgroundImage:{

         height:800,
         width,
         top:0,

     },

     container:{
         backgroundColor:'#e2ddd7',
         flex:1,

     }
 });