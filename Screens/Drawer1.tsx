import * as React from 'react';
import { View, Button, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import SenGraph from './SenGraph';
import Register from './Register';
import Login from './Login';
import Report from './Report';
import App from './App';



function MyDrawer() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={App} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Graph" component={SenGraph} />
        <Drawer.Screen name="Report" component={Report} />
      </Drawer.Navigator>
    );
  }

export default function DrawerMenu(){
return (
    // <NavigationContainer><MyDrawer /></NavigationContainer>
    <NavigationContainer><MyDrawer /></NavigationContainer>
);
}