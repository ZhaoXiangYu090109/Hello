/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,

} from 'react-native';



import Login from './TripModel/Login/Login';
import HMLaunchImage from './TripModel/Main/HMLaunchImage'
import {Navigator} from 'react-native-deprecated-custom-components';

import PropTypes from 'prop-types';
export default class App extends Component<{}> {
  render() {
    return (
        <Navigator
            initialRoute={{name: '启动页', component: HMLaunchImage}}
            configureScene={() =>
            {
                return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator) =>
            {
                let Component = route.component;
                return <Component{...route.passProps} navigator={navigator}/>
            }}
        >
        </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
