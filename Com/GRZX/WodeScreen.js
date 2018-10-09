import React from 'react';
import { Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,Image,AppRegistry,TextInput,TouchableOpacity} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const { width,height } = Dimensions.get('window');
export default class WodeScreen extends React.Component {
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

               <View style={styles.tu2}>
                  <View style={{
                     flex: 1,
                     flexDirection: 'row',
                     justifyContent: 'flex-start',
                     alignItems: 'stretch',
                  }}>
                      <Image source={{uri:'asset:/g_sc.png'}} style={styles.sc}/>
                   </View>
                   <View>
                      <Text  style={styles.shoucang} onPress={() => this.props.navigation.navigate('Shoucang')}>我的收藏</Text>
                  </View>
               </View>

               <View style={styles.tu3}>
                  <View style={{
                     flex: 1,
                     flexDirection: 'row',
                     justifyContent: 'flex-start',
                     alignItems: 'stretch',
                  }}>
                      <Image source={{uri:'asset:/g_xiaoxi.png'}} style={styles.xiaoxi}/>
                   </View>
                   <View>
                      <Text  style={styles.zhongxin} onPress={() => this.props.navigation.navigate('Xiaoxi')}>消息中心</Text>
                  </View>
               </View>

               <View style={styles.tu4}>
                  <View style={{
                     flex: 1,
                     flexDirection: 'row',
                     justifyContent: 'flex-start',
                     alignItems: 'stretch',
                  }}>
                      <Image source={{uri:'asset:/g_jy.png'}} style={styles.jianyi}/>
                   </View>
                   <View>
                      <Text  style={styles.yijian} onPress={() => this.props.navigation.navigate('Jianyi')}>我的建议</Text>
                  </View>
               </View>

               <View style={styles.tu5}>
                  <View style={{
                     flex: 1,
                     flexDirection: 'row',
                     justifyContent: 'flex-start',
                     alignItems: 'stretch',
                  }}>
                      <Image source={{uri:'asset:/g_we.png'}} style={styles.we}/>
                   </View>
                   <View>
                      <Text  style={styles.women} onPress={() => this.props.navigation.navigate('Women')}>关于我们</Text>
                  </View>
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

    tu2:{
       top:80,
    },
    sc:{
        marginTop:-25,
        marginLeft:20,
        width:30,
        height:25.5,
    },
    shoucang:{
        marginTop:-27,
        marginLeft:60,
        fontSize:20,
        fontWeight:'500',
        color:'black',
    },

    tu3:{
       top:75,
    },
    xiaoxi:{
        marginTop:18,
        marginLeft:20,
        width:30,
        height:30,
    },
    zhongxin:{
        marginTop:18,
        marginLeft:60,
        fontSize:20,
        fontWeight:'500',
        color:'black',
    },

    tu4:{
       top:70,
    },
    jianyi:{
        marginTop:18,
        marginLeft:20,
        width:30,
        height:30,
    },
    yijian:{
        marginTop:18,
        marginLeft:60,
        fontSize:20,
        fontWeight:'500',
        color:'black',
    },

    tu5:{
       top:65,
    },
    we:{
        marginTop:20,
        marginLeft:20,
        width:30,
        height:30,
    },
    women:{
        marginTop:22,
        marginLeft:60,
        fontSize:20,
        fontWeight:'500',
        color:'black',
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