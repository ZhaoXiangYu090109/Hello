
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





import PropTypes from 'prop-types';
import BaseComponent from "../Main/BaseComponent";
import HMNavigatorBar from '../Main/HMNavigatorBar'
import PlaneListCell from './PlaneListCell'
import Loading from '../LoadingView/Loading'
import HMUrlUtils from '../CommonTools/HMUrlUtils'
import NetUitl from '../CommonTools/NetUitl'
import tgUtil from '../CommonTools/tgUtil'
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var flightModelArr = [];
var  flightinfoModel = null;
class PlaneHomeController extends BaseComponent {
    popToLast()
    {
        this.props.navigator.pop();
    }
    constructor(props){
        super(props);
        var flightinfos1=[];



        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            loadingBool:'true',

            dataSource: ds.cloneWithRows(flightModelArr),
        }


    }
    render() {
        return (
            <View style={styles.container} >
                <HMNavigatorBar
                    title={'机票列表'}
                    popToLast={() => this.popToLast()}>
                </HMNavigatorBar>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {
                        this.renderFlightList.bind(this)
                    }
                    enableEmptySections={true}
                />
                {this.getClass()}
            </View>
        );
    }

    renderFlightList(flightinfo){
        return(

          <PlaneListCell
              flightinfo ={flightinfo}
          />

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
    componentDidMount()
    {


      var  tempUrl =  `http://a.tripg.com/QunarAir/GetFlightList?channel=tripg&price=1380&arr=PEK&date=2018-01-15&companyCode=919&dpt=CGQ&TimeStamp=1513071274&Sign=600DCA44-D71A-41F1-9B73-EB3A560B3429&carrier=CA&NewKey=e2032cf4b9f9be5d20b8e3a24e6c63f4`

        console.log('机票列表tempUrl-------'+tempUrl);
         var self = this;
         NetUitl.get(tempUrl, function (responseText)
         {
             self.setState({ loadingBool:'flase'});

             var Code = responseText.code;
             var Message = responseText.Message;

             console.log('返回数据Code---'+Code);
             if (0 == Code)
             {
                 flightinfos1 = responseText.result.flightinfos;
                 for (var i=0; i<flightinfos1.length; i++){
                     flightinfoModel = flightinfos1[i];
                     flightinfoModel.detail = '1';
                     flightModelArr.push(flightinfoModel);

                 }
                 console.log('fligthinfoModelArr---'+flightModelArr);
                 console.log('flightinfos1---'+flightinfos1);
                 self.setState({
                     dataSource: self.state.dataSource.cloneWithRows(flightModelArr),
                 });

             }
             else
             {

                 alert('请求失败');
             }
         }, function (error)
         {
             self.setState({ loadingBool:'flase'});
             alert(error);

         })
    }



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
export {PlaneHomeController as default};