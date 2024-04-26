import 'react-native-gesture-handler'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
} from 'react-native';
import Sensor from './Sensor';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

function Logo({navigation}) {
  return (
    <View style={styles.startBody}>
      <Text style={styles.startTitle}>CleanPro</Text>
      <Text style={styles.startTagline}>A sustainable IoT solution for public toilet</Text>
      <Text style={styles.startTagline}>sanitation</Text>
      <Pressable style={styles.StartButton} onPress={()=> navigation.navigate("Sensor Details")}>
        <Text style={styles.StartButtonTitle}>Start</Text>
      </Pressable>
      {/* <Button title='Start' onPress={()=> this.props.navigation.navigate("Sensor Details")} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  startTitle: {
    fontSize: 55,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 200,
    color: 'black',
  },
  startTagline: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#3f3f3f',
  },
  startBody: {
    backgroundColor: 'pink',
    height: 750,
  },
  StartButton: {
    width: 150,
    backgroundColor: '#00a2ff',
    alignItems: 'center',
    height: 50,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 150,
  },
  StartButtonTitle: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
    color: '#160202',
  }
});

export default Logo;
