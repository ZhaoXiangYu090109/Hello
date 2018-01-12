






'use strict';

import {

    StyleSheet,


} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


let Styles = StyleSheet.create({

    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    item:{
        flexDirection:'row',
        borderBottomWidth:1,//下边的边框
        borderColor:'rgba(100,53,201,0.1)',//边框的颜色
        paddingBottom:6,//下内边距
        marginBottom:6,//下外边距
        flex:1,

    },
    itemContent:{
        flex:1,
        marginLeft:13,//左边外边距
        marginTop:6,//上边外边距


    },

    itemImage:{},
    image:{
        width: 99,
        height:138,
        margin:6,

    },

    itemHeader:{
        fontSize:18,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'#6435c9',
        marginBottom:6,
    },
    itemMeta:{
        fontSize:16,
        marginBottom:6,
        color:'rgba(0,0,0,0.6)'
    },
    redText:{
        color:'#db2828',
        fontSize:15,
    },
    title :{
        fontSize: 19,
        color:'#6435c9'
    },
    container:{

        backgroundColor:'#eae7ff',
        flex:1,

        width: width,




    }


});

export {Styles as default};;