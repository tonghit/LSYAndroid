/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Button, Text, View,Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';





import BasicScreen from '../ZZTY/BasicScreen';
import YhtyScreen from '../ZZTY/YhtyScreen';
import ZzgyScreen from '../ZZTY/ZzgyScreen';
import ToneScreen from '../ZZTY/ToneScreen';
import TtwoScreen from '../ZZTY/TtwoScreen';
import ThreeScreen from '../ZZTY/ThreeScreen';
import TfourScreen from '../ZZTY/TfourScreen';
import TfiveScreen from '../ZZTY/TfiveScreen';
import TsixScreen from '../ZZTY/TsixScreen';
import TsevenScreen from '../ZZTY/TsevenScreen';
import TeightScreen from '../ZZTY/TeightScreen';
import TnightScreen from '../ZZTY/TnightScreen';
import TtenScreen from '../ZZTY/TtenScreen';


import FamousScreen from '../MZSX/FamousScreen';
import GgzScreen from '../MZSX/GgzScreen';
import HsbScreen from '../MZSX/HsbScreen';
import SzmScreen from '../MZSX/SzmScreen';
import CzhjScreen from '../MZSX/CzhjScreen';
import WswzScreen from '../MZSX/WswzScreen';
import PspScreen from '../MZSX/PspScreen';
import AlbztScreen from '../MZSX/AlbztScreen';


import MineScreen from '../GRZX/MineScreen';
import ZhuceScreen from '../GRZX/ZhuceScreen';
import WodeScreen from '../GRZX/WodeScreen';
import ShoucangScreen from '../GRZX/ShoucangScreen';
import XiaoxiScreen from '../GRZX/XiaoxiScreen';
import JianyiScreen from '../GRZX/JianyiScreen';
import WomenScreen from '../GRZX/WomenScreen';

import ProduScreen from '../JCJS/ProduScreen';
import TangScreen from '../JCJS/TangScreen';
import SongScreen from '../JCJS/SongScreen';
import YuanScreen from '../JCJS/YuanScreen';
import MingScreen from '../JCJS/MingScreen';
import QingScreen from '../JCJS/QingScreen';





const { width,height } = Dimensions.get('window');
const BasicStack = createStackNavigator({
  Basic: BasicScreen,
    Yhty: YhtyScreen,
    Zzgy: ZzgyScreen,
    Tone: ToneScreen,
    Ttwo: TtwoScreen,
    Three: ThreeScreen,
    Tfour: TfourScreen,
    Tfive: TfiveScreen,
    Tsix: TsixScreen,
    Tseven: TsevenScreen,
    Teight: TeightScreen,
    Tnight: TnightScreen,
    Tten: TtenScreen,

});

const FamousStack = createStackNavigator({
  Famous: { screen: FamousScreen },
   Ggz: { screen: GgzScreen },
   Hsb: { screen: HsbScreen },
   Szm: { screen: SzmScreen },
   Czhj: { screen: CzhjScreen },
   Wswz: { screen: WswzScreen },
   Psp: { screen: PspScreen },
   Albzt: { screen: AlbztScreen },
});

const MineStack = createStackNavigator({
  Mine: { screen: MineScreen },
  Zhuce: { screen: ZhuceScreen },
  Wode: { screen: WodeScreen },
  Shoucang: { screen: ShoucangScreen },
  Xiaoxi: { screen: XiaoxiScreen },
  Jianyi: { screen: JianyiScreen },
  Women: { screen: WomenScreen },
});

const ProduStack = createStackNavigator({
  Produ: { screen: ProduScreen },
  Tang: { screen: TangScreen },
  Song: { screen: SongScreen },
  Yuan: { screen: YuanScreen },
  Ming: { screen: MingScreen },
  Qing: { screen: QingScreen },
});


export default  createBottomTabNavigator(
 {
    Produe: {
       screen: ProduStack,
       navigationOptions:{
           tabBarLabel: '基础介绍',
       },

     },
    Famous: {
       screen: FamousStack ,
       navigationOptions:{
          tabBarLabel: '名作赏析',
      }
     },
    Basic: {
       screen: BasicStack ,
       navigationOptions:{
              tabBarLabel: '制作体验',
          }
    },
    Mine: {
       screen: MineStack,
       navigationOptions:{
            tabBarLabel: '个人中心',
        }
     },
 },
 {
   tabBarOptions: {
         activeTintColor: '#1156a9',
         inactiveTintColor: '#000',

         style:{
           backgroundColor:'#e2ddd7',
           height:height/14-5,
           paddingBottom:5,


          },
         labelStyle: {

               fontSize:18, // 文字大小

           },

       },
 }
);