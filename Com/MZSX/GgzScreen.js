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
                 <Text style={styles.texto}>        元青花鬼谷子下山图罐，元代青花瓷器，主体纹饰为"鬼谷子下山图"，描述了孙膑的师傅鬼谷子在齐国使节苏代的再三请求下，
                 答应下山搭救被燕国陷阵的齐国名将孙膑和独孤陈的故事。 </Text>
                 <Text style={styles.textt}>        罐高27.5cm，口径21cm,腹径33cm，足径20cm。素底宽圈足，直口短颈，唇口稍厚，溜肩圆腹，肩以下渐广，至腹部下渐收，
                 至底微撇。使用进口钴料绘出青花纹饰，共分四层，一层颈部饰水波纹，二层肩部饰缠枝牡丹，三层腹部为"鬼谷子下山"主题纹饰，四层下部为变形莲瓣纹内绘琛宝，俗称"八大码"。</Text>
                 <Text style={styles.texth}>        该器物于2005年7月12日伦敦佳士得举行的"中国陶瓷、工艺精品及外销工艺品"拍卖会上，以1400万英镑拍出，加佣金后为1568.8万英镑，
                 折合人民币约2.3亿，创下了当时中国艺术品在世界上的最高拍卖纪录。 </Text>
                 <Image source={{uri:'asset:/m_mzsxy.jpg'}} style={styles.guigu}/>
                 <Text  style={styles.guiguzi}>元·青花鬼谷子下山图罐</Text>
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
     guigu:{
        top:20,
        marginLeft:55,
        width:250,
        height:220,
     },
     guiguzi:{
        fontSize:20,
        marginTop:25,
        marginLeft:85,
        fontWeight:"500",
     },




     backgroundImage:{

         height:1100,
         width,
         top:0,

     },

     container:{
         backgroundColor:'#e2ddd7',
         flex:1,

     }
 });