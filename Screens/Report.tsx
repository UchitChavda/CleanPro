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

type ReportListStackParamList = {
  "User Home": { Name: string; }
  "Report": { Name: string; Email: string };
};

type RListNavigationProps = StackNavigationProp<ReportListStackParamList, "Report">;

const Report = ({ navigation, route }: { navigation: RListNavigationProps, route: any }) => {
  const navigations = navigation;
  const name = route.params.Name;
  const email = route.params.Email;
  const [washroomName, setWashroomName] = useState('');
  const [washroomAddress, setWashroomAddress] = useState('');
  const [problemTitle, setProblemTitle] = useState('');
  const [problemDescription, setProblemDescription] = useState('');

  const handleWashroomNameChange = (text: any) => {
    setWashroomName(text);
  };

  const handleWashroomAddressChange = (text: any) => {
    setWashroomAddress(text);
  };

  const handleProblemTitleChange = (text: any) => {
    setProblemTitle(text);
  };

  const handleProblemDescriptionChange = (text: any) => {
    setProblemDescription(text);
  };

  const handleClick = async () => {
    try {
      const response = await axios.post('http://192.168.0.100:8000/addReport', `email=${email}&name=${washroomName}&add=${washroomAddress}&title=${problemTitle}&des=${problemDescription}`);
      const values = response.data.message;
      if (values === "Report Created Successfully") {
        Alert.alert("Report Created", "Details for the report submitted successfully", [{ text: 'Ok', onPress: () => { reload() } }]);
      }
      else {
        Alert.alert("Error", "Report cannot be created", [{ text: 'Ok', onPress: () => { reload() } }]);
      }
    } catch (error) {
      Alert.alert("Error", `${error}`);
      return null;
    }
  }

  const reload = () => {
    navigations.replace("Report", { Name: name, Email: email });
  };

  return (
    <View style={logstyle.logBody}>
      <View>
        <Text style={logstyle.logTitle}>Report</Text>
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
            label="Washroom Address"
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
            label="Problem Title"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
              }
            }}
            style={logstyle.logInput2}
            value={problemTitle}
            onChangeText={handleProblemTitleChange}
          />
          <TextInput
            label="Problem Description"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
              }
            }}
            style={logstyle.logInput3}
            value={problemDescription}
            onChangeText={handleProblemDescriptionChange}
          />
          <View>
            <Pressable style={logstyle.logbutton} onPress={() => handleClick()}>
              <Text style={logstyle.logButtonTitle}>Send</Text>
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

export default Report