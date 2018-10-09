import React from 'react';
import { Platform,StyleSheet,Button, Text,ScrollView, View,Dimensions,ImageBackground ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class QingScreen extends React.Component {
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
                <Image source={{uri:'asset:/qing1.jpg'}} style={styles.qing1}/>
                <Image source={{uri:'asset:/qing2.jpg'}} style={styles.qing2}/>
            </View>
            <Text style={styles.qingtext}>        清代，康熙、雍正、乾隆三代皇帝对瓷器的出产工艺、胎釉质地、画面装修都非常关注，乃至到了事必躬亲的地步，
            使清代青花瓷的制造技艺水平到达一个新的高度。民窑青花在纹饰方面，显得愈加生动活泼，形式多样，充溢生活气息。呈现了很多前史体裁和戏剧故事画，
            如岁寒三友、米芾拜石、《西厢记》《三国演义》等。在瓷坯上绘画，一种色彩能体现出浓淡深浅多种层次，与中国画“墨分五色”相同，有“料分五色”之说。
            官窑青花，器物大小需求适度，画面效果注重神韵，外型改变考究韵律。民窑青花则不拘一格，运笔娴熟刚健，画风天然随意，具有很强的民间风格。</Text>

            <View style={styles.imgl}>
                <Image source={{uri:'asset:/qing3.jpg'}} style={styles.qing3}/>
                <Image source={{uri:'asset:/qing4.jpg'}} style={styles.qing4}/>

            </View>
         </ImageBackground>
       </View>
     </ScrollView>
     );
   }
 }


 const styles = StyleSheet.create({
    qingtext:{
       marginTop:15,
       marginLeft:10,
       marginRight:10,
       fontSize:30,
       fontWeight:"500",
    },
    qing1:{
       resizeMode:'contain',
       marginTop:-80,
       marginLeft:0,
       width:170,
       height:120,
    },
    qing2:{
       resizeMode:'contain',
       marginTop:-80,
       marginLeft:-25,
       width:170,
       height:120,
    },
    qing3:{
       resizeMode:'contain',
       marginTop:-60,
       marginLeft:0,
       width:150,
       height:250,
    },
    qing4:{
       resizeMode:'contain',
       marginTop:-60,
       marginLeft:-25,
       width:150,
       height:250,
    },


    imgLeft:{
    marginTop:100,
    flexDirection: 'row',
    justifyContent: 'space-around',

    },
    imgl:{
    marginTop:50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    },
    backgroundImage:{
        height:1250,
        width,
    },

})