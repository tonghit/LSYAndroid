import React from 'react';
import { Platform,StyleSheet,Button, Text, View,Dimensions,ImageBackground ,TextInput,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class ZhuceScreen extends React.Component {
    static navigationOptions = {
            title: '注册',
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
                   <TextInput  style={{height: 60,fontWeight:'500',}} placeholder="请输入手机号"/>
                   <TextInput  style={{height: 60,width:220,fontWeight:'500',}} placeholder="请输入验证码"/>
                   <TextInput  style={{height: 60,fontWeight:'500',}} placeholder="请输入6-12位密码"/>
                   <TextInput  style={{height: 60,fontWeight:'500',}} placeholder="请确认密码"/>
               </View>
               <View style={styles.yanzhengma}>
                    <Button
                      title="获取验证码"
                      color="#0e529f"
                    />
               </View>
               <View style={styles.zhuce}>
                    <Button
                      title="注册"
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
    yanzhengma:{
        marginLeft:245,
        marginTop:-180,
        height:20,
        width:100,
    },
    zhuce:{
         marginTop:160,
         marginLeft:140,
         height:20,
         width:80,
     },
})