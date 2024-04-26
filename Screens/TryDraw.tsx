import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SenGraph from './SenGraph';
import Register from './Register';
import Login from './Login';
import Report from './Report';
import App from './App';

// function MyDrawer() {
//   const Drawer = createDrawerNavigator();
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={App} />
//       <Drawer.Screen name="Login" component={Login} />
//       <Drawer.Screen name="Register" component={Register} />
//       <Drawer.Screen name="Graph" component={SenGraph} />
//       <Drawer.Screen name="Report" component={Report} />
//     </Drawer.Navigator>
//   );
// }

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Home"
        component={Logo}
        options={{
          headerStyle: { display: 'none' },
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Sensor Data"
        component={Sensor}
        options={{
          headerStyle: { display: 'none' },
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      /> */}
      <Stack.Screen
        name="Sensor Graph"
        component={SenGraph}
        options={{
          headerStyle: { display: 'none' },
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: { display: 'none' },
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerStyle: { display: 'none' },
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Report"
        component={Report}
        options={{
          headerStyle: { display: 'none' },
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
    </Stack.Navigator>
  );
}

const TryDraw = () => {

  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    'left',
  );
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      {/* <NavigationContainer>
        <MyDrawer />
      </NavigationContainer> */}
      <Pressable onPress={()=> navigation.navigate("Login")} ><Text>Login</Text></Pressable>
      <Pressable onPress={()=> navigation.navigate("Register")} ><Text>Register</Text></Pressable>
      <Pressable onPress={()=> navigation.navigate("Report")} ><Text>Report</Text></Pressable>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlignVertical: 'top',
    color: 'black'
  },
});

export default TryDraw;