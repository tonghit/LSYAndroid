import React from 'react';
import { Platform,StyleSheet,Button, Text, View,Dimensions,ImageBackground ,Image,TextInput} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class JianyiScreen extends React.Component {
    static navigationOptions = {
            title: '意见反馈',
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
               <View style={{padding: 10}}>
                   <Text  style={styles.yonghuming}></Text>
                   <TextInput  style={{fontWeight:'900',height: 80, borderColor: 'black', borderWidth: 2}}placeholder="感谢提出宝贵意见！"/>
               </View>
               <View style={styles.tijiao}>
                    <Button
                      title="提交"
                      color="#0e529f"
                      style={styles.butt}
                    />
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
    yonghuming:{
        marginLeft:160,
        fontSize:20,
        fontWeight:'900',
    },
    tijiao:{
         marginTop:10,
         marginLeft:270,
         height:20,
         width:80,
     },

})