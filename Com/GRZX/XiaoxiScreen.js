import React from 'react';
import { Platform,StyleSheet,Button, Text, View,Dimensions,ImageBackground ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class XiaoxiScreen extends React.Component {
    static navigationOptions = {
            title: '消息中心',
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
                       <Text  style={styles.huanying} onPress={() => this.props.navigation.navigate('xitong')}>欢迎使用青花瓷APP!</Text>
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

    huanying:{
        top:10,
        marginLeft:15,
        fontSize:18,
        fontWeight:"500",
        color:'black',
    },

})