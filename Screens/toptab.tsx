import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Register from './Register';
import App from './App';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <MyTabs1 />
    </NavigationContainer>
  );
}

function MyTabs1() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Admin" component={App} />
        <Tab.Screen name="User" component={Register} />
        <Tab.Screen name="Cleaner" component={App} />
    </Tab.Navigator>
  );
}

export default MyTabs

const styles = StyleSheet.create({})