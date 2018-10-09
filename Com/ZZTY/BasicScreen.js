import React from 'react';
import { Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,TouchableOpacity} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const { width,height } = Dimensions.get('window');
export default class BasicScreen extends React.Component {
    static navigationOptions = {
        title: '制作体验',
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
                source={{uri:'asset:/z_02.png'}}
             >
                <View style={styles.zz}>
                    <TouchableOpacity style={{width:width/3+20,height:height/3+70,marginLeft:15,marginTop:height/5-10}} onPress={() => this.props.navigation.navigate('Zzgy')}>
                    <View style={{width:30,height:150,marginTop:120,marginLeft:50}}>
                        <Text
                           style={styles.zzgy}
                           >制作工艺
                        </Text>
                    </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ width:width/3+20,height:height/3+70,marginLeft:-20,marginTop:height/5-10}} onPress={() => this.props.navigation.navigate('Zzgy')}>
                    <View style={{width:30,height:150,marginTop:17,marginLeft:50}}>
                    <Text
                        style={styles.yhty}
                        onPress={() => this.props.navigation.navigate('Yhty')}>用户体验
                    </Text>
                     </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>


        </View>
    );
  }
}


const styles = StyleSheet.create({

    zzgy:{
        width:30,
        height:150,
        fontSize:28,
        color:'#fff',
//        marginTop:height/2-85,
//        marginLeft:width/45,
    },

    yhty:{
        width:30,
        height:150,
        fontSize:28,
        color:'#fff',

    },
    zz:{
        width,
        height,
        flexDirection: 'row',
        justifyContent: 'space-around',


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