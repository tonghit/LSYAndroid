import React from 'react';
import { Platform,StyleSheet,Button, Text, View,Dimensions,ImageBackground ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class ShoucangScreen extends React.Component {
    static navigationOptions = {
            title: '我的收藏',
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

               <View  style={{ flexDirection: 'row',
                               justifyContent: 'space-around',
                             }}>
                   <View style={styles.tu1}>
                      <Image source={{uri:'asset:/g_m01.jpg'}} style={styles.guigu}/>
                      <Text  style={styles.guiguzi} onPress={() => this.props.navigation.navigate('Ggz')}>元·青花鬼谷子下山图罐</Text>
                   </View>
                   <View style={styles.tu2}>
                       <Image source={{uri:'asset:/g_m02.jpg'}} style={styles.huashen}/>
                       <Text  style={styles.huashenbei} onPress={() => this.props.navigation.navigate('Hsb')}>清康熙·青花五彩十二花神杯</Text>
                   </View>
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

    tu1:{
       top:20,
    },
    guigu:{
        resizeMode:'contain',
        width:150,
        height:120,
    },
    guiguzi:{
       width:150,
       fontSize:20,
       fontWeight:"500",
    },

    tu2:{
       top:20,
    },
    huashen:{
        resizeMode:'contain',
        width:150,
        height:120,
    },
    huashenbei:{
       width:150,
       fontSize:20,
       fontWeight:"500",
    },
})