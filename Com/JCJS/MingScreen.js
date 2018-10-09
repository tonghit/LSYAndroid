import React from 'react';
import { Platform,StyleSheet,Button, Text,ScrollView, View,Dimensions,ImageBackground ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class MingScreen extends React.Component {
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

            <View style={styles.imgLeft}>
                <Image source={{uri:'asset:/ming1.jpg'}} style={styles.mingone}/>
                <Image source={{uri:'asset:/ming2.png'}} style={styles.mingTwo}/>
            </View>
            <Text style={styles.mingtext}>        明代是青花瓷开展的顶峰时期，无论是景德镇官窑，还是各地民窑，都创作了很多精巧的传世佳作。这一时期的青花瓷，
            一向被视为是中国青花瓷的一种模范，为后世所追仿。特别是永乐、宣德和成化、嘉靖及万历年间官窑烧制的青花瓷，以其胎釉精密、青色淡雅、外型多样、装修丰厚而著称于世。
            成化年间，青花瓷使用了一种新的青料，叫“对等青”，也叫“坡塘青”，这种青料产于江西瑞州。“对等青”发色安稳，色泽淡雅、柔和，给人一种若有若无、虚无缥缈的感受。
            成化青花瓷，色泽淡雅，釉面肥润、抚之有玉质感；胎质细腻纯真，白釉莹润婴戏等。从嘉靖到万历，用于烧制青花瓷的色料是一种叫做“回青”的色料。所谓“回青”，
            也称“回青”，与“苏青”相同来自阿拉伯地区。而万历年间的青花料则产自浙江，也由此名为“浙料”。</Text>

            <Image source={{uri:'ming3.png'}} style={styles.mingThree}/>

         </ImageBackground>
       </View>
     </ScrollView>
     );
   }
 }


 const styles = StyleSheet.create({
    mingtext:{
        marginTop:0,
        marginLeft:10,
        marginRight:10,
        fontSize:30,
        fontWeight:"500",
    },
    mingone:{
        resizeMode:'contain',
        marginTop:55,
        marginLeft:20,
        width:180,
        height:140,
    },
    mingTwo:{
        resizeMode:'contain',
        marginTop:0,
        marginLeft:0,
        width:190,
        height:190,
    },
    mingThree:{
        resizeMode:'contain',
        marginLeft:60,
        marginTop:-55,
        width:250,
        height:250,
    },


     imgLeft:{
       marginTop:10,
       flexDirection: 'row',
       justifyContent: 'space-around',
     },

    backgroundImage:{
        height:1500,
        width,
    },

})