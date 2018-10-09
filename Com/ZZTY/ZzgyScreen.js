import React from 'react';
import { Platform,StyleSheet,Button, Text, View,Dimensions,ImageBackground ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { WebView } from 'react-native';

const { width,height } = Dimensions.get('window');
export default class ZzgyScreen extends React.Component {
    static navigationOptions = {
            title: '制作工艺',
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
         <WebView
            source={{uri: 'https://v.qq.com/x/page/r0503pomrwv.html'}}
          />

     );
   }
 }


