import React from 'react';
import { Platform,StyleSheet,Button, Text,ScrollView, View,Dimensions,ImageBackground ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class TangScreen extends React.Component {
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
     <ScrollView style={{height:1500}}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <ImageBackground
             style={styles.backgroundImage}
             source={{uri:'asset:/ret1.png'}}
          >
            <Image source={{uri:'asset:/tang1.jpg'}} style={styles.tangOne}/>
            <Text style={styles.tangtext}>        唐代青花瓷又叫蓝花白瓷，基本特点1、胎体厚重，质地粗松，有大小不均的气孔或气泡。其色泽无法达到纯白，泛灰或泛黄；
            2、器物外罩满釉，器足底露胎。施釉不匀，有流釉现象。釉色白泛黄色或灰色，有些呈乳白色，开片呈冰裂纹，釉面较薄，最薄处仅0.1mm。胎釉之间有化妆土，结合不够紧密；
            3、钴料发色呈现蓝色或蓝中含紫，晕散，有黑色结晶点。浓重或浅淡均有出现。部分青花纹饰有明显凸起；4、常见纹饰开始摆脱唐代常见的不规则斑点块面向线描图案转化。
            花草纹（宝相花，团花，四瓣小团花，蔓草莲花）如意头形卷云纹，蝴蝶纹（两翼和须清晰可辨）几何图样（菱形纹，方格纹），斑点，条形。 纹饰繁简与时代前后无关。</Text>
            <View style={styles.imgLeft}>
                <Image source={{uri:'asset:/tang2.png'}} style={styles.tangTwo}/>
            </View>
         </ImageBackground>
       </View>
     </ScrollView>
     );
   }
 }


 const styles = StyleSheet.create({
     tangtext:{
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        fontSize:30,
        fontWeight:"500",
     },
    tangOne:{
        marginLeft:30,
        marginTop:10,
        width:300,
        height:250,
    },
    tangTwo:{
       marginTop:-50,
       marginLeft:0,
       width:250,
       height:250,
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