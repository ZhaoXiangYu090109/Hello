/**
 * Created by mac on 2017/11/21.
 */
/**
 * 所有组件的基类
 * 实现android端物理返回键的监听
 */
import React, {Component} from 'react';

import {
    BackHandler,
    View,
    Text,
    Platform, StyleSheet,
    StatusBar,
    Image,TouchableOpacity,TouchableHighlight

} from 'react-native';

import Loading from '../LoadingView/Loading'
import TripGroup from "../Main/HMNavigatorBar";
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
export default class PlaneBaseViewController extends Component
{
    popToLast()
    {
        this.props.navigator.pop();
        console.log('PlaneBaseViewController--popToLast')
    }

    componentWillMount(){



    }


    PlaneListNavigtorBar(){

        return(
            <View style={styles.barStyles }>
                <StatusBar

                    barStyle="light-content"
                />
                <TouchableHighlight
                    style={{ alignItems: 'center', position: 'absolute',top: 28, left: 10,width:30,height:17}}
                    onPress={()=>{this.popToLast()}}
                >
                    <Image source={{uri: 'nav_back'} }style={{ width: 10,height: 17,}}/>
                </TouchableHighlight>

                <View style={styles.cityStyles}>
                    <View><Text style={styles.citytextStyles}>北京</Text></View>
                    <View><Text style={styles.citytextStyles}>----</Text></View>
                    <View><Text style={styles.citytextStyles}>长春</Text></View>
                </View>
                <View style={styles.detailViewStyles}>
                    <Text style={styles.detailtextStyles}>01月16日</Text>
                    <Text style={styles.detailtextStyles}>周二</Text>
                    <Text style={styles.detailtextStyles}>(因公)</Text>
                </View>
            </View>

        );
    }

    MnavigatorBar(){
        console.log('PlaneBaseViewController--render')
        return(
            <View style={{height:200,width:100,backgroundColor:'red', position: 'absolute',
                top: 0,
                left: 0,
            }}>

            </View>

        );
    }






}
const styles = StyleSheet.create({
    barStyles:{
        height:64,width:width,backgroundColor:'black',
        alignItems:'center',
    },
    cityStyles:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,

        width:width*0.7,
    },
    detailViewStyles:{
        flexDirection:'row',
        justifyContent:'center',


    },
    citytextStyles:{
        color:'white',
        fontSize:14,
    },
    detailtextStyles:{
        color:'gray',
        fontSize:12,
    }


});
