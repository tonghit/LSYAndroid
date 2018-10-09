import React from 'react';
import { Platform,StyleSheet,Button, Text,ScrollView, View,Dimensions,ImageBackground ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class YuanScreen extends React.Component {
    static navigationOptions = {
            title: '基础介绍',
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
             source={{uri:'asset:/ret1.png'}}
          >
            <Image source={{uri:'asset:/yuan1.jpg'}} style={styles.yuanOne}/>
            <Text style={styles.yuantext}>        元代的青花瓷器开展已对比老练，青花料在当时分为进口和国产两种，早期使用的色料来自海外，称为“苏麻离青”或“苏渤泥青”，
            简称“苏青”。元代青花瓷的胎体通常较为厚重，色彩鲜艳、构图繁密，选用多层装修，斑纹以龙凤、鱼藻、鸳鸯、荷鹭、缠枝花、山水、人物故事居多。内容丰厚，笔法自在，
            生动传神；画面层次丰厚，构图丰满，装修性极强。很多器物画有八宝、莲花、海马和大云头号纹饰，显着遭到喇嘛教艺术的影响。元青花外型美丽，古拙正经。既有恢弘宏伟的大器，
            如大罐、大盘、大碗等；也有精密灵活的小器，如胎体轻薄的高足碗、高足杯、匜、盘等。元青花线条苍劲有力，平涂联系勾、皴、点、染，体现了与水墨画相同的艺术效果，
            显示出元代工匠高明的绘画才干。</Text>
            <View style={styles.imgLeft}>
                <Image source={{uri:'asset:/yuan2.png'}} style={styles.yuanTwo}/>
            </View>
         </ImageBackground>
       </View>
     </ScrollView>
     );
   }
 }


 const styles = StyleSheet.create({
     yuantext:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        fontSize:30,
        fontWeight:"500",
     },
    yuanOne:{
        resizeMode:'contain',
        marginLeft:20,
        marginTop:10,
        width:320,
        height:270,
    },
    yuanTwo:{
       marginTop:-90,
       marginLeft:0,
       width:200,
       height:200,
        },
     imgLeft:{
       marginTop:50,
       flexDirection: 'row',
       justifyContent: 'space-around',
     },

    backgroundImage:{
        height:1500,
        width,
    },

})