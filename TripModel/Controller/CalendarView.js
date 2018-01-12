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
    ScrollView,
} from 'react-native';



var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

import PropTypes from 'prop-types';
import BaseComponent from "../Main/BaseComponent";
import HMNavigatorBar from '../Main/HMNavigatorBar'
import  PlaneListView from './PlaneListView'
var moment = require('moment');
var changed = true;
var travelType = true;

var textEdge= 50;
class CalendarView extends Component {

    render(){

        return(

            <ScrollView
                ref="scrollView"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // pagingEnabled={true}
            >
                <View style={styles.viewStyles}>
                 {this.renderAllView()}
                </View>
            </ScrollView>

        )
    }
    componentDidMount(){
        this.dateLog();
        var datel213 = this.getSystemDate();
        console.log('datel213====='+datel213)
        var getThreeDaysAfter = this.getThreeDaysAfter(3);
        console.log('getThreeDaysAfter====='+getThreeDaysAfter)



    }

    dateLog(){

        var  timers  =Date.parse(new Date());
        // timers = (timers / 1000);

        console.log('timers====='+timers)
    }




    // 返回数据 格式 20180108
     getSystemDate(){

        var systemDate = new Date();
         console.log('systemDate====='+systemDate)

        // 获取当年
        var year = systemDate.getFullYear();
         console.log('year====='+year)

        // 获取当月 （月+1是因为js中月份是按0开始的）
        var month = systemDate.getMonth() + 1;


        // 获取当日
        var day =  systemDate.getDate();
         console.log('day====='+day)

        if (day < 10) { // 如果日小于10，前面拼接0

            day = '0' + day;
        }
         console.log('day====='+day)

        if (month < 10) { // 如果月小于10，前面拼接0

            month = '0' + month;
        }
         console.log('month====='+month)

        return [year, month, day].join('-');

    }

    //获取当前日期几天后的的时间
    // 返回数据 格式 20180108
     getThreeDaysAfter(net){

        var date =  new Date(), timestamp, newDate;

        timestamp = date.getTime();

        // 获取三天前的日期
        newDate = new Date(timestamp + net * 24 * 3600 * 1000);

        var year = newDate.getFullYear();

        // 月+1是因为js中月份是按0开始的
        var month = newDate.getMonth() + 1;

        var day = newDate.getDate();

        if (day < 10) { // 如果日小于10，前面拼接0

            day = '0' + day;
        }

        if (month < 10) { // 如果月小于10，前面拼接0

            month = '0' + month;
        }

        return [year, month, day].join('-');

    }

    //获取某日期几天后的的时间
    // 返回数据 格式 20180108
    // getThreeDaysAfter(mdate, net){
    //
    //     var date =  mdate, timestamp, newDate;
    //
    //     timestamp = date.getTime();
    //
    //     // 获取三天前的日期
    //     newDate = new Date(timestamp + net * 24 * 3600 * 1000);
    //
    //     var year = newDate.getFullYear();
    //
    //     // 月+1是因为js中月份是按0开始的
    //     var month = newDate.getMonth() + 1;
    //
    //     var day = newDate.getDate();
    //
    //     if (day < 10) { // 如果日小于10，前面拼接0
    //
    //         day = '0' + day;
    //     }
    //
    //     if (month < 10) { // 如果月小于10，前面拼接0
    //
    //         month = '0' + month;
    //     }
    //
    //     return [year, month, day].join('');
    //
    // }




    fecthDateForCurrDate(){

        var dateArr= [];

        for (var i=0;i<30;i++){
            var dateModel = new Obejct() ;
            if (i==0){
                var mdate = this.getSystemDate();

                dateModel.mdate = mdate;
                dateModel.week = this.getWeekDate(mdate);
            }else{

                var getThreeDaysAfter = this.getThreeDaysAfter(i);


                dateModel.mdate = getThreeDaysAfter;
                dateModel.week = this.getWeekDate(getThreeDaysAfter);


            }
            dateArr.push(dateModel) ;
        }
        console.log('dateArr====='+dateArr)


        return dateArr;
    }

    getWeekDate(temdate){
        // temdate  = this.dealDate(temdate)




        var t = temdate;
        var array =  t.split("-");
        var dt = new Date(array[0], array[1], array[2]);
//    var dtt = new Date(t.replace("-g-/", ""));





        console.log('temdate'+temdate);
        var d = new Date(temdate);
        var week = d.getDay();
        console.log('week-----'+week)
        var weetext = '周一';
        switch (week){
            case 1:
                weetext = '周一';
                break;
            case 2:
                weetext = '周二';
                break;
            case 3:
                weetext = '周三';
                break;
            case 4:
                weetext = '周四';
                break;
            case 5:
                weetext = '周五';
                break;
            case 6:
                weetext = '周六';
                break;
            case 0:
                weetext = '周日';
                break;


        }
        return weetext;

    }
    dealDate(oDate){
        var  newdate=''
        for (var i=0;i<oDate.length;i++) {
            var char = oDate[i];
            if (i>3){

             if (char =='0'){
                 char = '';
             }
            }
            newdate  = newdate+char;
        }
        console.log('newdate'+newdate);
        return newdate;
    }

    renderAllView(){

        var temDateArr = [];
        temDateArr = this.fecthDateForCurrDate();
        var AllViewArr=[];

        for (var i=0 ;i<temDateArr.length;i++){



            AllViewArr.push(
                <TouchableOpacity key={i} onPress={(e)=>{alert(e)}}>
                    <Text style={styles.innerStyles}>{temDateArr[i].mdate}</Text>
                    <Text style={styles.innerStyles}>{temDateArr[i].week}</Text>
                </TouchableOpacity>
            );
        }
        return AllViewArr;

    }

}

const styles = StyleSheet.create({
    viewStyles:{

        flexDirection:'row',

    },
    innerStyles:{

        padding:5,

    },

});


export {CalendarView as default};