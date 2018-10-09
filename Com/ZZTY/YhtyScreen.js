import React from 'react';
import { Platform,StyleSheet,Button, Text, View,Dimensions,ImageBackground ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
export default class ToneScreen extends React.Component {
    static navigationOptions = {
            title: '用户体验',
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
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <ImageBackground
             style={styles.backgroundImage}
             source={{uri:'asset:/ret1.png'}}
          >

            <View style={styles.imgLeft}>
                <View style={styles.img1}>
                    <Text onPress={() => this.props.navigation.navigate('Tone')} >
                        <Image source={{uri:'asset:/z_01_01.jpg'}}  style={styles.o1}/>
                    </Text>

                    <Text onPress={() => this.props.navigation.navigate('Ttwo')}>
                        <Image source={{uri:'asset:/z_01_02.jpg'}} style={styles.o2}/>
                    </Text>

                    <Text onPress={() => this.props.navigation.navigate('Three')}>
                        <Image source={{uri:'asset:/z_01_03.jpg'}} style={styles.o3}/>
                    </Text>

                    <Text onPress={() => this.props.navigation.navigate('Tfour')}>
                        <Image source={{uri:'asset:/z_01_04.jpg'}} style={styles.o4}/>
                    </Text>

                </View>
                <View style={styles.img2}>
                    <Text onPress={() => this.props.navigation.navigate('Tfive')}>
                        <Image source={{uri:'asset:/z_01_05.jpg'}} style={styles.o5}/>
                    </Text>

                    <Text onPress={() => this.props.navigation.navigate('Tsix')}>
                        <Image source={{uri:'asset:/z_01_06.jpg'}} style={styles.o6}/>
                    </Text>

                    <Text onPress={() => this.props.navigation.navigate('Tseven')}>
                        <Image source={{uri:'asset:/z_01_07.jpg'}} style={styles.o7}/>
                    </Text>

                    <Text onPress={() => this.props.navigation.navigate('Teight')}>
                        <Image source={{uri:'asset:/z_01_08.jpg'}} style={styles.o8}/>
                    </Text>

                </View>
                <View style={styles.img3}>
                    <Text onPress={() => this.props.navigation.navigate('Tnight')} style={{marginLeft:5}}>
                        <Image source={{uri:'asset:/z_01_09.jpg'}} style={styles.o9}/>
                    </Text>
                    <Text onPress={() => this.props.navigation.navigate('Tten')} style={{marginLeft:5}}>
                        <Image source={{uri:'asset:/z_01_10.jpg'}} style={styles.o10}/>
                    </Text>

                </View>



            </View>

         </ImageBackground>
       </View>
     );
   }
 }


 const styles = StyleSheet.create({

     o1:{
        resizeMode:'stretch',
        width:250,
        height:460,
     },
     o2:{
        resizeMode:'stretch',
        width:250,
        height:460,
     },
     o3:{
        resizeMode:'stretch',
        width:250,
        height:460,
     },
     o4:{
         resizeMode:'stretch',
        width:250,
        height:460,},
     o5:{
         resizeMode:'stretch',
        width:250,
        height:460,},
     o6:{
         resizeMode:'stretch',
        width:250,
        height:460,
      },
     o7:{
        resizeMode:'stretch',
        width:250,
        height:460,
      },
     o8:{
        resizeMode:'stretch',
        width:250,
        height:460,
      },
     o9:{
        resizeMode:'stretch',
        width:250,
        height:460,
        marginLeft:100,
     },
     o10:{
       resizeMode:'stretch',
        width:250,
        height:460,
        marginLeft:50,
     },

     img1:{
        width,
        height:160,
        flexDirection: 'row',
        justifyContent: 'space-around',

     },
     img2:{
        width,
        height:160,
        flexDirection: 'row',
        justifyContent: 'space-around',
     },
     img3:{
        width,
        height:160,
        flexDirection: 'row',
     },

     imgLeft:{
       marginTop:70,
     },
    backgroundImage:{
        height,
        width,
    },

})