import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity, Image ,ScrollView
  
 
} from 'react-native';
export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        
          <View style={styles.box1}>
          <TouchableOpacity></TouchableOpacity>
          
          </View>
          <ScrollView>
          <View style={styles.box2}>
          <View style={styles.propil}></View>
          </View>
          <View style={styles.box2}>
          <View style={styles.propil}></View>
          </View>
          <View style={styles.box2}>
          <View style={styles.propil}></View>
          </View>
          <View style={styles.box2}>
          <View style={styles.propil}></View>
          </View>
          <View style={styles.box2}>
          <View style={styles.propil}></View>
          </View>
          <View style={styles.box2}>
          <View style={styles.propil}></View>
          </View>
          </ScrollView>
          <View style={styles.naviga}></View>
        
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column'
  },
  propil: {
    alignItems: 'center',
    position: 'relative',
    top: 16,
    left : 16,
    height: 48,
    width: 48,
    borderRadius: 150,
    backgroundColor: 'black',
    elevation: 10
  },
  
  box1: {
    height: 55,
    backgroundColor: '#225294'
  },
  naviga: {
    position: 'absolute',
    bottom: 10,
    height: 25,
    backgroundColor: 'red'
  },
  box2: {
    height: 80,
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  box3: {
    flex: 1,
  }
 
  
});