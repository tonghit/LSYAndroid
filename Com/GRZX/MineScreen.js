import React from 'react';
import { Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,Image,AppRegistry,TextInput,TouchableOpacity} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const { width,height } = Dimensions.get('window');
export default class MineScreen extends React.Component {
   static navigationOptions = {
           title: '个人中心',
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
               <View >
                  <View style={styles.tu1}>
                     <Image source={{uri:'asset:/g_tx.png'}} style={styles.tx}/>
                  </View>
                  <View style={{padding: 10}}>
                      <Text  style={styles.yonghuming}></Text>
                      <Text  style={styles.mima}></Text>
                      <TextInput  style={{height: 50,fontWeight:'500',}} placeholder="请输入用户名"/>
                      <TextInput  style={{height: 50,fontWeight:'500',}} placeholder="请输入密码"/>
                  </View>
                  <View style={styles.denglu}>
                       <Button
                         onPress={() => this.props.navigation.navigate('Wode')}
                         title="登录"
                         color="#0e529f"
                         style={styles.butt}
                       />
                  </View>
                  <View>
                    <Text  style={styles.zhuce} onPress={() => this.props.navigation.navigate('Zhuce')}>注册</Text>
                  </View>
               </View>
               </ImageBackground>


           </View>
       );
     }
   }


   const styles = StyleSheet.create({


       tu1:{
          flexDirection: 'row',
          justifyContent: 'center',
          top:25,
       },
       tx:{
           width:100,
           height:100,
       },

       denglu:{
            marginTop:10,
            marginLeft:30,
            height:20,
            width:300,
        },
       yonghuming:{
           marginTop:5,
           marginLeft:160,
       },
       mima:{
           marginTop:5,
           marginLeft:160,
       },
       zhuce:{
           marginTop:30,
           marginLeft:300,
           fontSize:20,
           fontWeight:'500',
           color:'gray',
       },

       backgroundImage:{
           height:520,
           width,
           top:0,
       },

       container:{
           backgroundColor:'#e2ddd7',
           flex:1,

       }
   });