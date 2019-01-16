import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
 
} from 'react-native';
export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        
          <View style={styles.box1}>
          <Image style={styles.logo}
           source={require('../Image/logo.png')} />
          <View style={styles.propil}></View>
          
          </View>
          
          <View style={styles.box2}></View>
          <View style={styles.naviga}></View>
        
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column'
  },
  
  box1: {
    height: 250,
    backgroundColor: '#225294'
  },
  naviga: {
    position: 'absolute',
    bottom: 10,
    height: 25,
    backgroundColor: 'red'
  },
  propil: {
    alignItems: 'center',
    position: 'relative',
    left: 16,
    top: 40,
    height: 439,
    width: 378,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10
  },
  box2: {
    height: 10,
    backgroundColor: '#FFFFFF'
  },
  box3: {
    flex: 1,
  },
  logo: {
    width:300,
    height:150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: 50,
    top: 24
  }
 
  
});