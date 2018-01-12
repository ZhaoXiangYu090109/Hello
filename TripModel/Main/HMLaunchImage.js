




import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';



import Login from '../Login/Login'


class  Launch extends Component{



    render() {
        return (
            <Image source={{uri: 'launchimage'}} style={styles.launchImageStyle}/>
        );
    }
    // 复杂的操作:定时器\网络请求
    componentDidMount(){
        // 定时: 隔2s切换到Main
        setTimeout(()=>{
            // 页面的切换
            this.props.navigator.replace({
                // title:'登录',
                component: Login, // 具体路由的版块
            });
        }, 1500);
    }


}



const styles = StyleSheet.create({
    launchImageStyle:{
        flex:1
    }
});

export {Launch as default};
