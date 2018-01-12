




import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,

} from 'react-native';

var LogoSign = '986CD980-17CA-4FF4-A158-6067D2721A56';
var LogoKey = 'Key=9DE65DF9-84A3-47C4-901A-681443F5591C';
import styles from '../Styles/Styles'
import BaseComponent from "../Main/BaseComponent";
import CryptoJS from 'crypto-js'
import HMUrlUtils from '../CommonTools/HMUrlUtils'
import NetUitl from '../CommonTools/NetUitl'
import tgUtil from '../CommonTools/tgUtil'
import Loading from '../LoadingView/Loading'
import PlaneHome from '../Controller/PlaneHomeController'
import PlaneTest from '../Controller/PlaneHomeTest'
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

class  Login extends BaseComponent{


    constructor(props){
        super(props);

            this.state = {
                userName:'YDCS009',
                passWord:'000000',
                loadingBool:'flase',
            }

    }


    render() {
        return (
            <View style={styles.container} >
                <Image source={{uri:'loginbg'}} style={LoginStyles.imageStyle} />
                <View style={LoginStyles.outerViewStytle}>
                    <View style={LoginStyles.AllViewStyle}>
                        <View style={LoginStyles.innerStytle}>

                             <TextInput
                                 ref = 'username'
                                 placeholder="UserName"
                                 style={LoginStyles.TextInputStyle}
                                 value={this.state.userName}

                             ></TextInput>
                             <TextInput
                                 ref = 'passWord'
                                 placeholder="passWord"
                                 style={LoginStyles.TextInputStyle}
                                 secureTextEntry={true}
                                 value={this.state.passWord}
                             ></TextInput>

                            <TouchableOpacity style={LoginStyles.TouchableStyle}
                                              activeOpacity={0.5}
                                              onPress={()=>{this.loginFunction()}}
                            >
                                <Text style={LoginStyles.textLoginStyle}>登录</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={LoginStyles.bottomView}>
                            <Text style={LoginStyles.bottomText}>忘记密码</Text>
                            <Text style={{color: 'gray', fontSize: 12}}>请使用差旅天下集团版账户登录</Text>
                            <Text style={{color: 'gray', fontSize: 12}}>如需帮助,可拨打客服电话：300-6568-777</Text>

                        </View>

                    </View>

                </View>

                {this.getClass()}
            </View>



        );
    }
    getClass(){
        if (this.state.loadingBool ==='true' ) {
            return (

                <Loading/>


            );
        }else{

            return(null);
        }

    }

    loginFunction(){

        this.props.navigator.push(

            {
                titleName:'机票',
                component:PlaneHome,
            }
        );

       //  this.setState({ loadingBool:'true'});
       //
       //
       //
       //
       //
       //
       //
       //
       //
       //
       // var  LoginuserName = this.state.userName;
       // var  Loginpassword = this.state.passWord;
       // var  timers  =Date.parse(new Date());
       // timers = (timers / 1000);
       // var passmd5String = CryptoJS.MD5(Loginpassword).toString();
       // var passMd5 = LoginuserName + parseInt(timers / 60) + passmd5String;
       // passMd5 = CryptoJS.MD5(passMd5);
       // var parmData = {
       //      TimeStamp: timers + '',
       //      Sign: LogoSign,
       //      cmd: 'UserCheck',
       //      UserName: LoginuserName,
       //      PasswordKey: passMd5
       // };
       // console.log('parmData---'+parmData);
       // var urlData = tgUtil.tgParmsToUrl(parmData);
       //  console.log('urlData---'+urlData);
       // urlData += tgUtil.tgGetNewKeyStr(urlData, LogoKey);
       //  console.log('urlData1---'+urlData);
       // var tempUrl = `${HMUrlUtils.CusomterUrl}?${urlData}`;
       // console.log(tempUrl);
       //  var self = this;
       //  NetUitl.get(tempUrl, function (responseText)
       //  {
       //      self.setState({ loadingBool:'flase'});
       //      var Code = responseText.Code;
       //      var Message = responseText.Message;
       //      console.log(responseText);
       //      if (0 == Code)
       //      {
       //          // Storage.save('userInfo', responseText.Datas)
       //
       //
       //          self.props.navigator.push(
       //
       //             {
       //                 titleName:'机票', 
       //                 component:PlaneHome,
       //             }
       //         );
       //
       //
       //      }
       //      else
       //      {
       //
       //          alert('失败1');
       //      }
       //  }, function (error)
       //  {
       //      self.setState({ loadingBool:'flase'});
       //      alert(error);
       //
       //  })

    }

}


const LoginStyles = StyleSheet.create({
    bottomText:{
        alignSelf:'flex-start',
        color: '#CB5738',


    },
    bottomView:{
        marginTop: 10,
        width:width*0.8,backgroundColor: 'rgba(0,0,0,0)',

    },

    textLoginStyle:{
        textAlign: 'center',
        fontSize: 18,
        color: 'white',


    },

    TouchableStyle:{
        height:44,
        width:width*0.8,
        marginTop:50,
        borderRadius: 5,
        backgroundColor:'#CB5738',
        alignItems:'center',
        justifyContent: 'center',


    },


    imageStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        // resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor: 'rgba(0,0,0,0)',
    },


    innerStytle:{
        marginTop:  200 ,
        alignItems: 'center',
    },

    AllViewStyle:{
        // flexDirection:'column',
        alignItems: 'center',
        marginTop: 50,

        width:width,

    },

    TextInputStyle:{


        paddingLeft: 5,
        width: width * 0.85,
        height: 44,
        backgroundColor: 'rgba(19,44,66,0.9)',

        borderRadius: 5,
        borderWidth: 0.5,
        marginTop:10,
        color:'white',
        textAlign:'center'




    },
    outerViewStytle:{


        position: 'absolute',
        top: 0,
        left: 0,



    },

}) ;


export {Login as default};