import React from 'react';
import { Platform,StyleSheet,Button, Text, View,Dimensions,ImageBackground ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class WomenScreen extends React.Component {
    static navigationOptions = {
            title: '关于我们',
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
       <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={{uri:'asset:/g_dy.png'}}
            >
               <View>
                    <Text  style={styles.qhc}>        青花瓷，又称白地青花瓷，常简称青花，是中国瓷器的主流品种之一（四大名瓷之一），属釉下彩瓷。本设计的目的旨在通过该设计向大众传播
                    青花瓷相关信息，让大众更多的去了解青花瓷。</Text>
                    <Text  style={styles.zhidao}>指导教师</Text>
                    <Text  style={styles.ct}>陈  童</Text>
                    <Text  style={styles.sj}>设计人员</Text>
                    <Text  style={styles.ry}>张佳慧  李思莹</Text>
               </View>

            </ImageBackground>
       </View>
     );
   }
 }


 const styles = StyleSheet.create({
    backgroundImage:{
        height:520,
        width,
        top:0,
    },
    qhc:{
        top:15,
        marginLeft:15,
        marginRight:15,
        fontSize:18,
        fontWeight:"500",
        color:'black',
    },
    zhidao:{
        top:25,
        marginLeft:130,
        fontSize:25,
        fontWeight:"500",
        color:'black',
    },
    ct:{
        top:30,
        marginLeft:160,
        fontSize:20,
        fontWeight:"500",
        color:'black',
    },
    sj:{
        top:35,
        marginLeft:130,
        fontSize:25,
        fontWeight:"500",
        color:'black',
    },
    ry:{
        top:40,
        marginLeft:120,
        fontSize:20,
        fontWeight:"500",
        color:'black',
    },

})