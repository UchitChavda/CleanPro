import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, Alert } from 'react-native'
import {
  List,
  Title,
  IconButton,
  Text as PaperText,
  Button as PaperButton,
  TextInput as PaperTextInput,
} from 'react-native-paper';
import React from 'react';
import Textarea from 'react-native-textarea';

const handleClick = () => {
    navigation.navigate("Home");
    Alert.alert('Report Submited Successfully', 'My Alert Msg', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

const Report = ({ navigation }) => {
  return (
    <View style={logstyle.logBody}>
      <View>
        <Text style={logstyle.logTitle}>Report</Text>
      </View>
      <ScrollView>
        <View style={logstyle.logcard}>
          <PaperTextInput
            label="User Name"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
                underlineColor: 'transparent',

              }
            }}
            style={logstyle.logInput2}
          />
          <PaperTextInput
            label="Washroom Name"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
                underlineColor: 'transparent',

              }
            }}
            style={logstyle.logInput2}
          />
          <PaperTextInput
            label="Washroom Address"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
                underlineColor: 'transparent',

              }
            }}
            style={logstyle.logInput2}
          />
          <PaperTextInput
            label="Problem Title"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
                underlineColor: 'transparent',

              }
            }}
            style={logstyle.logInput2}
          />
          <PaperTextInput
            label="Problem Description"
            mode="outlined"
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
                underlineColor: 'transparent',

              }
            }}
            style={logstyle.logInput3}
          />
          <View>
            <Pressable style={logstyle.logbutton} onPress={()=> navigation.navigate("Home")}>
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
    backgroundColor: "whitesmoke",
    // minHeight: 1000,
  },
  logTitle: {
    fontWeight: "bold",
    fontSize: 50,
    alignSelf: "center",
    fontFamily: 'Roboto',
    color: 'black',
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
    underlineColorAndroid: "transparent",
    marginBottom: 10,
    marginTop: 5,
  },
  logInput3: {
    width: 'auto',
    marginLeft: 20,
    marginRight: 20,
    underlineColorAndroid: "transparent",
    marginBottom: 10,
    marginTop: 5,
    paddingBottom: 100,
    // borderColor: 'black',
    // borderWidth: 1,
    // paddingBottom: 100,
    // borderRadius: 10,

  },
  logcard: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    elevation: 20,
    paddingTop: 10,
    paddingBottom: 30,
    // marginVertical: 120,
  }
})

export default Report