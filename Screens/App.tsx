import * as React from 'react';
import { View, Button, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import SenGraph from './SenGraph';
import Register from './Register';
import Login from './Login';
import Report from './Report';
import Map from './Map';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AdminHome from './AdminHome';
import Washlist from './Washlist';

const Stack = createStackNavigator();

const sensors = [
  {
    name: "Gas Sensor",
  },
  {
    name: "Overflow Sensor",
  },
  {
    name: "Distance Sensor",
  },
  {
    name: "PIR Sensor",
  },
  {
    name: "IR Sensor",
  },
  {
    name: "Humidity Sensor",
  },
  {
    name: "Temparture Sensor",
  },
  {
    name: "Tank Level Sensor",
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
    padding: 0,
    margin: 0,
  },
  SenBlock: {
    backgroundColor: 'white',
    shadowColor: "black",
    height: 150,
    width: 300,
    margin: 10,
    textAlign: 'center',
    borderRadius: 15,
    elevation: 10,
    justifyContent: "center"
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
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginBottom: 60,
    marginTop: 0,
    paddingTop: 0,
  },
  appBody: {
    backgroundColor: 'white',
    height: '100%',
  },
  mainArea: {
    padding: 0,
    margin: 0,
  },
  titleView: {
    padding: 0,
    margin: 0,
    paddingBottom: 0,
    height: 80,
  }
})

const fetchData = async () => {
  try {
    const response = await axios.get('http://192.168.0.102:8000/fetch-data-from-thingspeak/');
    const sensorvalue = response.data[0];
    return sensorvalue;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

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
    fontFamily: 'Times New Roman',
    fontStyle: "italic"
  },
  startBody: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
  },
  StartButton: {
    width: 150,
    backgroundColor: 'red',
    alignItems: 'center',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
  LogButton: {
    width: 150,
    backgroundColor: 'red',
    alignItems: 'center',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 100,
  },
  RegButton: {
    width: 150,
    backgroundColor: 'red',
    alignItems: 'center',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  StartButtonTitle: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
    color: 'white',
  },
});

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  "Sensor Data": undefined;
  Report: undefined;
  Washroom: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

type SensorStackParamList = {
  Home: undefined;
  "Sensor Data": undefined;
  "Sensor Graph": { sensorName: string; sensorValue: string | number; sindex: number }
};

type SensorNavigationProps = StackNavigationProp<SensorStackParamList, 'Sensor Data'>;

function Logo({ navigation }: { navigation: NavigationProps }) {
  return (
    <View style={styles.startBody}>
      <Text style={styles.startTitle}>CleanPro</Text>
      <Text style={styles.startTagline}>Sustainable solution for Public Toilet</Text>
      <Text style={styles.startTagline}>Sanitation</Text>
      <Pressable style={styles.LogButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.StartButtonTitle}>Start</Text>
      </Pressable>
    </View>
  );
}

function UserH({ navigation }: { navigation: NavigationProps }) {
  return (
    <View style={styles.startBody}>
      <Text style={styles.startTitle}>CleanPro</Text>
      <Text style={styles.startTagline}>Sustainable solution for Public Toilet</Text>
      <Text style={styles.startTagline}>Sanitation</Text>
      <Pressable style={styles.LogButton} onPress={() => navigation.navigate("Report")}>
        <Text style={styles.StartButtonTitle}>Report</Text>
      </Pressable>
      <Pressable style={styles.LogButton} onPress={() => navigation.navigate("Washroom")}>
        <Text style={styles.StartButtonTitle}>Washroom</Text>
      </Pressable>
    </View>
  );
}

function Sensor({ navigation }: { navigation: SensorNavigationProps }) {
  const [sensorvalue, setSensorValue] = useState(null);
  useEffect(() => {
    const fetchSensorData = async () => {
      const sdata = await fetchData();
      setSensorValue(sdata);
    };

    fetchSensorData();
  }, []);
  if (sensorvalue !== null) {
    return (
      <View style={sytles1.appBody}>
        <View style={sytles1.titleView}>
          <Text style={sytles1.title}>CleanPro</Text>
        </View>
        <SafeAreaView style={sytles1.mainArea}>
          <ScrollView style={sytles1.scrollView}>
            {
              sensors.map((item, index) => {
                return (
                  <Pressable key={index} style={sytles1.SenBlock} onPress={() => navigation.navigate("Sensor Graph", { sensorName: item.name, sensorValue: sensorvalue[index], sindex: index })}>
                    <Text style={sytles1.senTitle}>{item.name}</Text>
                    <Text style={sytles1.senValue}>{sensorvalue[index]}</Text>
                  </Pressable>
                );
              })
            }
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Logo}
        options={{
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Sensor Data"
        component={Sensor}
        options={{
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Washroom"
        component={Washlist}
        options={{
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Sensor Graph"
        component={SenGraph}
        options={{
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="User Home"
        component={UserH}
        options={{
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Admin Home"
        component={AdminHome}
        options={{
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
      <Stack.Screen
        name="Report"
        component={Report}
        options={{
          headerTitleStyle: { display: 'none' },
          headerBackAccessibilityLabel: "none",
        }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}