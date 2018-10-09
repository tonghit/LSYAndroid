import React from 'react';
import { Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground} from 'react-native';
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
        <View style={styles.container}>
             <View style={{marginTop:-10,}}>
                <ImageBackground source={{uri:'asset:/z_01_02.jpg'}}  style={styles.o1}>

                    <View style={styles.one01}>
                        <Button
                          onPress={() => this.props.navigation.navigate('Tone')}
                          title="上一步"
                          color="#0e529f"

                        />
                    </View>
                    <View style={styles.one}>
                        <Button
                          onPress={() => this.props.navigation.navigate('Three')}
                          title="下一步"
                          color="#0e529f"
                          style={styles.butt}
                        />
                    </View>

                </ImageBackground>
             </View>


        </View>
    );
  }
}


const styles = StyleSheet.create({
    one:{
        marginLeft:270,
        marginTop:-20,
        height:20,
        width:80,
    },
    one01:{
         marginTop:550,
         marginLeft:20,
         height:20,
         width:80,
     },
    o1:{
        marginTop:-55,
        width,
        height,
    },


    container:{
        backgroundColor:'#e2ddd7',
        flex:1,

    }
});