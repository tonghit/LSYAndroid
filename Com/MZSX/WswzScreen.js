import React from 'react';
import {Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,ScrollView,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class WswzScreen extends React.Component {
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
                 <Text style={styles.texto}>        青花万寿纹尊与百寿纹瓶是康熙60大寿时，臣子送的生日礼物。尊的周身绘寿字纹，瓶口和瓶底的一圈都各写着48个寿字，
                 瓶身共70行，130排寿字，总共约一万个“寿”字，因此称为万寿瓶。与百寿纹瓶一样，每个寿字都不相同，分别有着独特的含义，十分精巧。
                 字的大小随器物的造型曲线伸缩，规整而自然，造作而有风韵。寓意“万岁，万岁，万万岁”的祝福。</Text>
                 <Text style={styles.textt}>        烧制如此硕大的器物，需要高超的烧瓷技术;如此明丽的青花发色，需要上等青花色料描绘;表现如此繁缛多姿的异体"寿"字要有深厚的文字功底;
                 如此非凡的整体策划更显示出封建帝王的威势和臣子们的恭敬。现藏于南京博物院。</Text>
                 <Text style={styles.texth}>        青花百寿纹瓶，这件瓶子看上去并不耀眼，白底青色的字。但仔细看，上面写了100个“寿”字，每一个“寿”字都不一样，有圆形、三角形，
                 还有的绘制成了蟠桃的形状，有的“寿”字上半部分是小山的形状，寓意寿比南山，也有的“寿”字线条蜿蜒复杂，寓意生命连绵不断。</Text>
                 <View  style={{ flexDirection: 'row', }}>
                 <Image source={{uri:'asset:/m_05_01.jpg'}} style={styles.one}/>
                 <Image source={{uri:'asset:/m_05_02.jpg'}} style={styles.two}/>
                 <Text  style={styles.bsp}>清康熙·青花百寿纹瓶</Text>
                 <Text  style={styles.wz}>清康熙·青花万寿纹尊</Text>
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
     one:{
        resizeMode:'contain',
        top:15,
        marginLeft:-30,
        width:250,
        height:220,
     },
     two:{
        resizeMode:'contain',
        top:15,
        marginLeft:-85,
        width:250,
        height:220,
     },
     bsp:{
        width:160,
        fontSize:20,
        marginTop:240,
        marginLeft:-365,
        fontWeight:"500",
     },
     wz:{
        width:160,
        fontSize:20,
        marginTop:240,
        marginLeft:5,
        fontWeight:"500",
     },



     backgroundImage:{

         height:1300,
         width,
         top:0,

     },

     container:{
         backgroundColor:'#e2ddd7',
         flex:1,

     }
 });