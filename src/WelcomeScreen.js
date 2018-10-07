import React, { Component } from "react";
import { Image,Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

class WelcomeScreen extends Component {
  render() {
    return (
       <TouchableOpacity onPress={() => this.props.navigation.navigate('tabFooter')}>
           <ImageBackground
                       source={{uri: 'http://res.downhot.com/d/file/p/2014/02/20/7552b2a13b4807a0b449bb35327b1446.jpg'}}  style={{height:600,width:450}}  resizeMode='stretch'>
                          <View style={styles.container}>
                                      <Text style={styles.welcome}>Welcome to React Native!</Text>
                                      <Text style={styles.instructions}>Click Me!</Text>
                          </View>
           </ImageBackground>
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default WelcomeScreen;


{/*  defaultSource={require('./assets/2.jpg')}
   <Image style={{flex: 1,resizeMode:"center",}}  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRN9noZ6qYKnYzhdx7pRFG7dMtADVuN4ZkNzgGtQVCST9_3pIY'}} />
*/}