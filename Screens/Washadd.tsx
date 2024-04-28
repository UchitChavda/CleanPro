import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native'
import {
  List,
  Title,
  IconButton,
  Text as PaperText,
  Button,
  TextInput,
} from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type AddWashtListStackParamList = {
  "Adminwashroom": undefined;
  "Washadd": undefined;
};

type AddwashListNavigationProps = StackNavigationProp<AddWashtListStackParamList, "Washadd">;

const Washadd = ({ navigation }: { navigation: AddwashListNavigationProps }) => {
  const [washroomName, setWashroomName] = useState('');
  const [washroomAddress, setWashroomAddress] = useState('');
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const handleWashroomNameChange = (text: any) => {
    setWashroomName(text);
  };

  const handleWashroomAddressChange = (text: any) => {
    setWashroomAddress(text);
  };

  const handleLatitudeChange = (text: any) => {
    if (/^\d*\.?\d*$/.test(text)) {
      setLatitude(text);
    } else {
      Alert.alert('Error', 'Latitude must be a numerical value.');
    }
  };

  const handleLongitudeChange = (text: any) => {
    if (/^\d*\.?\d*$/.test(text)) {
      setLongitude(text);
    } else {
      Alert.alert('Error', 'Longitude must be a numerical value.');
    }
  };

  const handleClick = async () => {
    try {
      if (!washroomName.trim()) {
        Alert.alert('Error', 'Please enter the washroom name.');
        return;
      }
      if (!washroomAddress.trim()) {
        Alert.alert('Error', 'Please enter the washroom address.');
        return;
      }
      if (!latitude) {
        Alert.alert('Error', 'Please enter the latitude.');
        return;
      }
      if (!longitude) {
        Alert.alert('Error', 'Please enter the longitude.');
        return;
      }
      const response = await axios.post('http://192.168.204.152:8000/addWashroom', `name=${washroomName}&place=${washroomAddress}&latitude=${latitude}&longitude=${longitude}`);
      const values = response.data.message;
      if (values === "Washroom Added Successfully") {
        Alert.alert("Washroom Added", "Details for the washroom is added successfully", [{ text: 'Ok', onPress: () => { navigation.replace("Adminwashroom") } }]);
      }
      else {
        Alert.alert("Error", `${values}`);
      }
    } catch (error) {
      Alert.alert("Error", `${error}`);
      return null;
    }
  }

  return (
    <View style={logstyle.logBody}>
      <View>
        <Text style={logstyle.logTitle}>Add Washroom</Text>
      </View>
      <ScrollView>
        <View style={logstyle.logcard}>
          <TextInput
            label="Washroom Name"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
              }
            }}
            style={logstyle.logInput2}
            value={washroomName}
            onChangeText={handleWashroomNameChange}
          />
          <TextInput
            label="Washroom Place"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
              }
            }}
            style={logstyle.logInput2}
            value={washroomAddress}
            onChangeText={handleWashroomAddressChange}
          />
          <TextInput
            label="Latitude"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
              }
            }}
            style={logstyle.logInput2}
            value={latitude}
            keyboardType="numeric"
            onChangeText={handleLatitudeChange}
          />
          <TextInput
            label="Longitude"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
              }
            }}
            style={logstyle.logInput2}
            value={longitude}
            keyboardType="numeric"
            onChangeText={handleLongitudeChange}
          />
          <View>
            <Pressable style={logstyle.logbutton} onPress={handleClick}>
              <Text style={logstyle.logButtonTitle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const logstyle = StyleSheet.create({
  logInput: {
    backgroundColor: "white",
    color: "black",
    borderColor: "grey",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  logBody: {
    backgroundColor: "white",
  },
  logTitle: {
    fontSize: 50,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'Times New Roman',
    fontStyle: "italic",
  },
  logbutton: {
    width: 150,
    backgroundColor: 'red',
    alignItems: 'center',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 10,
  },
  logButtonTitle: {
    fontSize: 25,
    fontWeight: '500',
    marginTop: 6,
    color: "white",
  },
  logInput2: {
    width: 'auto',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: "white",
  },
  logInput3: {
    width: 'auto',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 5,
    paddingBottom: 100,
    backgroundColor: "white",
  },
  logcard: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    elevation: 20,
    paddingTop: 10,
    paddingBottom: 30,
  }
})

export default Washadd