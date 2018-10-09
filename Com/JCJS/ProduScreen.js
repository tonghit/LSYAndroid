import React from 'react';
import { Platform,StyleSheet,Button,Text,View ,Dimensions,ScrollView,ImageBackground} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const { width,height } = Dimensions.get('window');
export default class ProduScreen extends React.Component {
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
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={{uri:'asset:/diye.png'}}
             >
                <View style={styles.po}>
                    <Text
                       style={styles.tang}
                       onPress={() => this.props.navigation.navigate('Tang')}>唐
                    </Text>
                    <Text
                        style={styles.song}
                        onPress={() => this.props.navigation.navigate('Song')}>宋
                    </Text>
                    <Text
                      style={styles.yuan}
                      onPress={() => this.props.navigation.navigate('Yuan')}>元
                    </Text>
                    <Text
                      style={styles.ming}
                      onPress={() => this.props.navigation.navigate('Ming')}>明
                    </Text>
                    <Text
                      style={styles.qing}
                      onPress={() => this.props.navigation.navigate('Qing')}>清
                    </Text>

                </View>



            </ImageBackground>


        </View>
    </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

    topView:{
        width,
        height:height/13,
        backgroundColor:'#0e529f',
        fontFamily:'Courier',
    },
    tang:{
        width:width/11,
        height:height/15,
        top:13,
        fontSize:30,
        fontWeight:'900',
        fontFamily:'Courier',
    },
    song:{
        fontSize:30,
        width:width/11,
        height:height/15,
        marginTop:height/8,
        fontWeight:'900',
        fontFamily:'Courier',

    },
    yuan:{
        fontSize:30,
        width:width/11,
        height:height/15,
        marginTop:height/10,
        fontWeight:'900',
        fontFamily:'Courier',
    },
    ming:{
        fontSize:30,
        width:width/11,
        height:height/15,
        marginTop:70,
        fontWeight:'900',
        fontFamily:'Courier',
    },
    qing:{
        width:width/11,
        height:height/15,
        marginTop:68,
        fontSize:30,
        fontWeight:'900',
        fontFamily:'Courier',
    },
    po:{
        top:50,
        marginLeft:width/16,
        flex:1,
    },
    backgroundImage:{
        height:600,
        width,
        top:0,
    },

    container:{
        backgroundColor:'#e2ddd7',
        flex:1,

    }
});