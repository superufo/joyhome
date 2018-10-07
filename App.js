/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {StyleSheet,Text,View,TouchableOpacity} from "react-native";
import RootStack from './src/RootStack';
import SplashScreen from 'react-native-splash-screen';

import firebase from 'firebase';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';


//https://gitee.com/xieyang2020/react-native-dotenv
import {
    FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN,
    FIREBASE_DATABASEURL,
    FIREBASE_PROJECTID,
    FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSAGINGSENDERID
} from 'react-native-dotenv';

// Supress firebase timer warning
// See https://github.com/facebook/react-native/issues/12981
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const store = configureStore();

export default class App extends Component {
       componentDidMount() {
            const config = {
                           apiKey: FIREBASE_APIKEY,
                           authDomain: FIREBASE_AUTHDOMAIN,
                           databaseURL: FIREBASE_DATABASEURL,
                           projectId: FIREBASE_PROJECTID,
                           storageBucket: FIREBASE_STORAGEBUCKET,
                           messagingSenderId: FIREBASE_MESSAGINGSENDERID
            };
            firebase.initializeApp(config);

            SplashScreen.hide();
      }

      render() {
                    return (
                          <Provider store={store}>
                            <MenuProvider>
                                <View style={styles.container}>
                                    <RootStack />
                                </View>
                            </MenuProvider>
                          </Provider>
                    );
           }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});