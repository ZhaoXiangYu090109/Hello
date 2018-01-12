
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    LayoutAnimation,
    Animated,
    Easing,
} from 'react-native';



var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

import PropTypes from 'prop-types';
import BaseComponent from "../Main/BaseComponent";
import HMNavigatorBar from '../Main/HMNavigatorBar'
import  PlaneListView from './PlaneListView'
var changed = true;
var travelType = true;

var textEdge= 50;
class PlaneHomeController extends BaseComponent {
    popToLast()
    {
        this.props.navigator.pop();
    }

    constructor(props) {
        super(props);

        this.state = {//设置初值
            changedState:true,
            is_oneWay:true,
            is_goBack:false,

        };
        this.animatedValue = new Animated.Value(0)
        this.animatedValue1 = new Animated.Value(0)
    }

    render() {

        const absoluteLeft = this.animatedValue.interpolate({
            inputRange: [0 ,1],
            outputRange: [this.state.changedState?width-textEdge:10,this.state.changedState?10: width-textEdge]
        })
        const absoluteRight = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.state.changedState?10:width-textEdge,this.state.changedState?width-textEdge:10]
        })
        const MarginLineLeft = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [!this.state.is_oneWay?0:width*0.5,!this.state.is_oneWay?width*0.5:0]
        })
        return (
            <View style={styles.container}>
                <HMNavigatorBar
                    title={'国内机票'}
                    popToLast={() => this.popToLast()}>
                </HMNavigatorBar>


                {/*单程往返按钮*/}

                <View style={styles.routeStyle}>
                    <View style={styles.routeInnerrStyle}>
                    <TouchableOpacity style={styles.routeItemStyle} onPress={()=>{this.oneway()}}>
                        <Text style={styles.textStyles}>单程</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeItemStyle} onPress={()=>{this.goback()}}>
                        <Text style={styles.textStyles}>往返</Text>
                    </TouchableOpacity>
                    </View>
                    <Animated.View style={[styles.lineViewStyle,{marginLeft:travelType?0:MarginLineLeft}]}></Animated.View>
                </View>

                {/*城市选择*/}

                <View style={styles.citySelectCellStyle}>
                    <Animated.Text style={[styles.cityTextStyles,{  position:'absolute',left:changed?10:absoluteLeft,top:12  }]}>长春</Animated.Text>
                    <Animated.Text style={[styles.cityTextStyles,{ position:'absolute',left:changed?width- textEdge:absoluteRight,top:12}]}>北京</Animated.Text>
                    <TouchableOpacity
                          onPress={()=>{this.LeftAction()}}
                            ref="ref_sT"
                            style={{

                                position:'absolute',
                                left:0 ,

                                width:width*0.5-25,
                                height:43
                            }}
                        >

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.changeBtnStyle}
                        onPress={this.changeCityAction.bind(this)}>
                        <View >
                            <Image
                                source={{uri:'城市交换钮'}}
                                style={styles.imageStyle}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                            ref="ref_eT"
                            style={{
                                position:'absolute',
                                right:0,
                                width:width*0.5-25,height:43,
                            }}
                             onPress={()=>{this.RightAction()}}

                    >

                    </TouchableOpacity>

                </View>

                {/*日期*/}

                <View style={styles.citySelectStyle}>
                    <TouchableOpacity>
                        <Text style={styles.dateTextStyles}>01月04</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textStyles}></Text>
                    </TouchableOpacity>

                </View>

                {/*差旅类型*/}

                <View style={styles.citySelectStyle}>
                    <TouchableOpacity>
                        <Text style={styles.traTextStyles}>差旅类型</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.cityTextStyles}>因公出行</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.traTextStyles}>差旅类型</Text>
                    </TouchableOpacity>

                </View>
                {/*开始搜索*/}
                <View style={styles.routeStyle}>
                    <TouchableOpacity
                        style={styles.searchStyle}
                        onPress={()=>{
                            this.props.navigator.push({
                                component:PlaneListView

                            });
                        }}
                    >
                        <Text style={styles.searchTextStyles}>开始搜索</Text>
                    </TouchableOpacity>


                </View>


            </View>
        );
    }
    oneway(){

        if (this.state.is_oneWay){
            return;
        }
        this.animate(this.animatedValue1);

        this.setState({
            is_oneWay:true,
        });
    }
    goback(){

        travelType =false;

        if (this.state.is_oneWay){
            this.animate(this.animatedValue1);
            
        }
        this.setState({
            is_oneWay:false
        });
    }

    changeCityAction(){
        this.animate(this.animatedValue);
        this.setState({
            changedState:!this.state.changedState

        });

        // this.refs.ref_sT.setNativeProps({
        //     style:{
        //         position:'absolute',
        //         top:12,
        //         left:!changed?absoluteRight1:absoluteLeft1 ,
        //     },
        //
        // });
        // this.refs.ref_test.porps.childern='213213'
        console.log( this.state.changedState)

        changed=false;



    }
    RightAction(){
        console.log('RightAction')
    }
    LeftAction(){
        console.log('LeftAction')
    }

    animate (animatetype) {
        animatetype.setValue(0)
        Animated.timing(
            animatetype,
            {
                toValue: 1,
                duration: 600,
                easing: Easing.linear
            }
        ).start(


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'white',
    },
    //{/*单程往返按钮*/}
    routeStyle:{

        height:44,
        width:width,
        borderBottomWidth:1,//下边的边框
        borderColor:'rgba(100,53,201,0.1)',//边框的颜色

    },
    routeInnerrStyle:{
        flexDirection:'row',
        justifyContent:'space-around',//space-between
        alignItems:'center',
        flex:1
    },
    routeItemStyle:{
        flex:1,
        alignItems:'center'
    },
    lineViewStyle:{
        backgroundColor:'black',
        width:width*0.5,
        height:4,

    },
    textStyles:{
        fontWeight:'bold',
        fontSize:14,
    },
    //  {/*城市选择*/}
    citySelectCellStyle:{
        height:44,
        borderBottomWidth:1,//下边的边框
        borderColor:'rgba(100,53,201,0.1)',//边框的颜色
        // flexDirection:'row',
        // justifyContent:'space-around',

    },
    citySelectStyle:{
        flexDirection:'row',
        height:44,
        justifyContent:'space-between',//space-between
        alignItems:'center',
        borderBottomWidth:1,//下边的边框
        borderColor:'rgba(100,53,201,0.1)',//边框的颜色
    },
    changeBtnStyle:{

        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:44,
        position:'absolute',
        left:width*0.5-25,
        flex:0.5
    },
    imageStyle:{
        width:20,
        height:20,

    },

    cityTextStyles:{

        fontWeight:'bold',
        fontSize:16,
    },
    //{/*日期*/}
    dateTextStyles:{
        marginLeft:15,
        marginRight:15,

        fontSize:16,

    },
    //{/*差旅类型*/}
    traTextStyles:{
        marginLeft:15,
        marginRight:15,

        fontSize:14,
        color:'gray'
    },
    //{/*开始搜索*/}

    searchStyle:{

        justifyContent:'center',//space-between
        alignItems:'center',

        width:width*0.95,
        borderRadius: 5,

        height:35,
        backgroundColor:'#CB5738',

    },
    searchTextStyles:{

        color:'white',

        textAlign: 'center',
        fontSize: 18,


    },

});
export {PlaneHomeController as default};