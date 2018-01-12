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


class PlaneCabinView extends Component {

    constructor(props){
        super(props)
        flightinfo:''
    }

    render(){

        return(
            <View style={styles.out_view_style}>

                {this.cabinSubView()}
                    
            </View>
        )
    }
    
    
    cabinSubView(){
        var cabinArr=[];
        var flightinfo = new Object();
        for (var i=0;i<this.props.flightinfo.flightInfoArr.length;i++){
            flightinfo = this.props.flightinfo.flightInfoArr[i];
            cabinArr.push(
                <PlaneCabinSubView
                    flightinfo={flightinfo}
                    key={i}
                />
            );
        }
        
        return cabinArr;
    }
}


class PlaneCabinSubView extends Component {

    constructor(props){
        
        super(props)
        flightinfo:''
    }
    render(){

        return(
            <View style={styles.one_view_style}>
                <View style={styles.upViewStyle}>
                    <Text style={styles.upTextPriceStyle}>￥{this.props.flightinfo.SPrice}</Text>
                    <Text style={styles.orderStyle}>预订</Text>
                </View>
                <View style={styles.downViewStyle}>
                    <Text style={styles.downTextStyle}>{this.props.flightinfo.TypeName}{this.getDisc(this.props.flightinfo)}</Text>
                </View>
            </View>
        )
    }
    getDisc(flightinfo){
        var disc = flightinfo.GDisc;
        var ndisc =disc/10;
        if (ndisc ==10) ndisc='全'
        return ndisc+'折';
    }
}

const styles =StyleSheet.create({
    upViewStyle:{
        flexDirection:'row',
        flex:3,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius: 5,
    },
    downViewStyle:{
        flex:2,
        backgroundColor:'rgba(245,251,255,1)',
        borderRadius: 5,
    },

    out_view_style:{
        paddingBottom:15,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#f5f5f5'
    },

    one_view_style:{
        flex:1,
        height:100,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor:'rgba(0,0,0,0.1)',
        marginTop:15,
    },

    upTextPriceStyle:{
        fontSize:20,
        color:'rgba(203,109,77,1)',
        marginLeft:10

    },
    downTextStyle:{
        fontSize:13,
        marginLeft:10,

    },
    orderStyle:{

        height:30,
        width:50,
        backgroundColor:'rgba(203,109,77,1)',
        color:"white",
        marginRight:10,
        // justifyContent:'center',
        // alignItems:'center',
        // textAlign:'center',
        borderRadius: 5,
        borderWidth: 0.5,
        padding:5
    },

});

export {PlaneCabinView as default};


