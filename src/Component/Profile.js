import React, { Component } from 'react';
import {
  StyleSheet,
  View,
 
} from 'react-native';
export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        
          <View style={styles.box1}>
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
    left: 160,
    top: 75,
    height: 75,
    width: 75,
    borderRadius: 150,
    backgroundColor: 'white'
  },
  box2: {
    height: 10,
    backgroundColor: '#FFFFFF'
  },
  box3: {
    flex: 1,
  }
 
  
});