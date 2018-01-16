import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Platform,
    AsyncStorage
} from 'react-native';

class ViewLayout extends React.Component{

    static  _onLayout(event){
        //使用大括号是为了限制let结构赋值得到的变量的作用域，因为接来下还要结构解构赋值一次
        {
            //获取根View的宽高，以及左上角的坐标值
            let {x, y, width, height} = event.nativeEvent.layout;
            console.log('通过onLayout得到的宽度：' + width);
            console.log('通过onLayout得到的高度：' + height);
        }
        // successCallback(width,height)
        //通过Dimensions API获取屏幕宽高
        // let {width, height} = Dimensions.get('window');
        // console.log('通过Dimensions得到的宽度：' + width);
        // console.log('通过Dimensions得到的高度：' + height);
    }

}
export {ViewLayout as default};