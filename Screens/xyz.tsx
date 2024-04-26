import * as React from 'react';
import { View, Button, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const handleClick = () => {console.warn("Navigating to sensor screen")}

const sensors = [
  {
    name: "UltraSonic Level Sensor",
    value: 80.00,
  },
  {
    name: "PIR Sensor",
    value: "Motion Detected!!!",
  },
  {
    name: "Water Level Sensor",
    value: 100,
  },
  {
    name: "Gas Sensor",
    value: 440,
  },
  {
    name: "UltraSonic Level Sensor",
    value: 80.00,
  },
  {
    name: "PIR Sensor",
    value: "Motion Detected!!!",
  },
  {
    name: "Water Level Sensor",
    value: 100,
  },
]

const sytles1 = StyleSheet.create({
  title: {
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 30,
    fontWeight: '500',
    fontStyle: 'italic',
    color: "black",
  },
  SenBlock: {
    backgroundColor: 'white',
    shadowColor: "black",
    height: 100,
    width: 150,
    margin: 10,
    textAlign: 'center',
    borderRadius: 15,
    elevation: 10,
  },
  senTitle: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  senValue: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: "black",
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  appBody: {
    backgroundColor: 'white',
    height: 750,
  }
})

const styles = StyleSheet.create({
  startTitle: {
    fontSize: 55,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 200,
    color: 'black',
    fontFamily: 'Times New Roman',
  },
  startTagline: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#3f3f3f',
    fontFamily:"Times New Roman",
    fontStyle:"italic"
  },
  startBody: {
    backgroundColor: 'white',
    height: 750,
  },
  StartButton: {
    width: 150,
    backgroundColor: 'red',
    alignItems: 'center',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 150,
  },
  StartButtonTitle: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
    color: 'white',
  }
});

function Logo({ navigation }) {
  return (
    <View style={styles.startBody}>
      <Text style={styles.startTitle}>CleanPro</Text>
      <Text style={styles.startTagline}>Sustainable solution for Public Toilet</Text>
      <Text style={styles.startTagline}>Sanitation</Text>
      <Pressable style={styles.StartButton} onPress={()=> navigation.navigate("Sensor")}>
        <Text style={styles.StartButtonTitle}>Start</Text>
      </Pressable>
      {/* <Button title='Start' onPress={()=> this.props.navigation.navigate("Sensor Details")} /> */}
    </View>
  );
}

function Sensor({ navigation }) {
  return (
    <View style={sytles1.appBody}>
      <View>
        <Text style={sytles1.title}>CleanPro</Text>
      </View>
      <View style={sytles1.mainView}>
        {
          sensors.map((item) => {
            return (
              <Pressable style={sytles1.SenBlock} onPress={handleClick}>
                <Text style={sytles1.senTitle}>{item.name}</Text>
                <Text style={sytles1.senValue}>{item.value}</Text>
              </Pressable>
            );
          })
        }
      </View>
    </View>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Logo}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'red' },
        }}
      />
      <Stack.Screen
        name="Sensor"
        component={Sensor}
      />
    </Stack.Navigator>
  );
}
export default function App(){
  return (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
);
}
