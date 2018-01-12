import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Image,
    TouchableOpacity,

} from 'react-native';
import NetUitl from "../CommonTools/NetUitl";

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var flightInfoArr = [];
class PlaneListCell extends Component {
    constructor(props){
        super(props)
        flightinfo:''
        clickFlightBlock:null

        this.state={

            showInfo:true
        };

    }
    render(){

        return(

            <TouchableOpacity style={styles.outViewStyle} onPress={()=>{this.clickCell()}}>

                <View style={styles.cellViewStyle}>

                    {/*去程*/}
                    <View>
                        <Text style={styles.sTimeStyle}>{this.props.flightinfo.dptTime}</Text>
                        <Text style={styles.sdptStyle}>{this.props.flightinfo.dptAirport}</Text>
                    </View>
                    <Image style={styles.imgStyle}   source={{uri:'rightarr'}}/>

                    {/*返程*/}
                    <View>
                        <Text style={styles.eTimeStyle}>{this.props.flightinfo.arrTime}</Text>
                        <Text style={styles.sdptStyle}>{this.props.flightinfo.arrAirport}</Text>
                    </View>
                    <View style={styles.priceViewStyle}>
                        <Text style={styles.priceStyle}>￥{this.props.flightinfo.barePrice}</Text>
                    </View>


                </View >
                <View style={styles.detailViewStyle}>
                    <Text style={styles.detailTextStyle}>{this.props.flightinfo.carrierinfo.cn_abb}{this.props.flightinfo.flightNum}  |  机型{this.props.flightinfo.flightTypeFullName}  |  {this.mealtype(this.props.flightinfo)}</Text>
                </View>

            </TouchableOpacity>



        );
    }
    mealtype(flightinfo){

        if (flightinfo.meal =='True'){
            return '有餐';
        }else {
            return '无餐';
        }
    }

    //点击列表
    clickCell() {




        var flightinfoUrl = 'http://a.tripg.com/QunarAir/GetFlightInfo?arr=CGQ&date=2018-01-15&flightNum=CA1609&dpt=PEK&TimeStamp=1515401989&Sign=600DCA44-D71A-41F1-9B73-EB3A560B3429&companyCode=919&NewKey=3a34fd02225ec9813e30489f0af71048'

        var  self = this;
        NetUitl.get(flightinfoUrl, function (responseText) {

            var statusCode = responseText.statusCode;
            var message = responseText.message;
            var flightInfoModel = new Object();

            console.log('info返回数据responseText---' + responseText);

            if (200 == statusCode) {
                var data = responseText.data;
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        flightInfoModel = data[i];
                        flightInfoArr.push(flightInfoModel);
                    }
                    self.props.flightinfo.flightInfoArr = flightInfoArr;

                    self.props.flightinfo.detail = '0';
                    if (self.props.clickFlightBlock){

                        self.props.clickFlightBlock();
                    }

                } else {

                    alert('暂无数据');
                }

            }
            else {

                alert(message);
            }
        }, function (error) {

            alert(error);

        });
    }

}
const styles = StyleSheet.create({

    container:{

        backgroundColor:'white',
        flex:1,

    },
    outViewStyle:{
        borderBottomWidth:1,//下边的边框
        borderColor:'rgba(100,53,201,0.1)',//边框的颜色
        height:100,
        justifyContent:'center',//space-between---space-around

    },
    cellViewStyle:{

        width: width,
        flexDirection:'row',
        justifyContent:'space-between',//space-between
        paddingRight:10,
        paddingLeft:10,



    },
    sTimeStyle:{
        color:'#28A3FF',
        fontSize:20,
    },
    eTimeStyle:{
        fontSize:20,
    },
    sdptStyle:{
        fontSize:14,
        color:'#666666',
        marginTop:10,
    },
    imgStyle:{

        width:100,
        height:7,
        marginTop:10,
    },
    detailViewStyle:{
        marginTop:10,
        paddingRight:10,
        paddingLeft:10,
    },
    detailTextStyle:{
        color:'#666666',
        fontSize:12,

    },
    priceViewStyle:{

        flexDirection:'row-reverse',
        alignItems:'center',

    },
    priceStyle:{
        color:'#CB5738',
        fontSize:20,
        fontWeight:'bold',

    },
});



export {PlaneListCell as default};