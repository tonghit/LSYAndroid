import React from 'react';
import { Platform,StyleSheet,Button, Text,ScrollView, View,Dimensions,ImageBackground ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class SongScreen extends React.Component {
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
            <Image source={{uri:'asset:/song1.jpg'}} style={styles.songOne}/>
            <Text style={styles.songText}>        唐青花经过初创期以后，并没有迅速发展起来，而是走向了衰败。到目前为止，我们能见到的宋青花只有从两处塔基遗址出土的十余片瓷片。
            一是1957年发掘于浙江省龙泉县的金沙塔塔基，共出土13片青花碗残片。该塔的塔砖上有绝对纪年北宋“太平兴国二年”(977年);另一处是1970年在浙江省绍兴市环翠塔的塔基，出土了
            一片青花碗腹部的残片。该塔塔基出土的塔碑证明此塔建于南宋咸淳元年(1265年)。这十余片宋青花瓷片，都是碗的残片。胎质有的较粗，有的较细。纹饰有菊花纹、圆圈纹、弦纹、线纹等。
            青花发色前一处的较浓、发黑;后一处的较淡。发色较黑者，应是外罩透明釉太薄的缘故。浙江省本身就有着丰富的钴土矿，这些青花瓷应该就是使用了本地的钴料。它们与唐青花并无直接的延续关系。</Text>
            <View style={styles.imgLeft}>
                <Image source={{uri:'asset:/song2.png'}} style={styles.songTwo}/>
                <Image source={{uri:'asset:/song3.jpg'}} style={styles.songThree}/>

            </View>

         </ImageBackground>
       </View>
     </ScrollView>
     );
   }
 }


 const styles = StyleSheet.create({
    songText:{
        marginTop:20,
        fontWeight:"500",
        marginLeft:10,
        marginRight:10,
        fontSize:30,
    },
    songOne:{
        resizeMode:'contain',
        marginLeft:30,
        marginTop:10,
        width:300,
        height:250,
    },
    songTwo:{
       marginLeft:10,
       marginTop:-40,
       width:140,
       height:140,
    },
    songThree:{
        marginLeft:0,
        marginTop:-40,
        width:140,
        height:140,
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