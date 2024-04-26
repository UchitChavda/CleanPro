import { View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView, ScrollViewComponent, Alert } from 'react-native'
import {
  List,
  Title,
  IconButton,
  Text as PaperText,
  Button as PaperButton,
  TextInput,
} from 'react-native-paper';
import React, { useState } from 'react'


const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={regstyle.regBody}>
      <View>
        <Text style={regstyle.regTitle}>Sign Up</Text>
      </View>
      <SafeAreaView>
        <ScrollView>
          <View style={regstyle.regcard}>
            <TextInput
              label="First Name"
              mode="outlined"
              theme={{
                roundness: 10,
                colors: { primary: 'red' }
              }}
              style={regstyle.regInput2}
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
            <TextInput
              label="Last Name"
              mode="outlined"
              theme={{
                roundness: 10,
                colors: { primary: 'red' }
              }}
              style={regstyle.regInput2}
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
            <TextInput
              label="Email"
              mode="outlined"
              theme={{
                roundness: 10,
                colors: { primary: 'red' }
              }}
              keyboardType="email-address"
              style={regstyle.regInput2}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              label="Mobile"
              mode="outlined"
              theme={{
                roundness: 10,
                colors: { primary: 'red' }
              }}
              keyboardType="numeric"
              maxLength={10}
              style={regstyle.regInput2}
              value={mobile}
              onChangeText={text => setMobile(text)}
            />
            <TextInput
              label="Address"
              mode="outlined"
              theme={{
                roundness: 10,
                colors: { primary: 'red' }
              }}
              style={regstyle.regInput2}
              value={address}
              onChangeText={text => setAddress(text)}
            />
            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry={true}
              theme={{
                roundness: 10,
                colors: { primary: 'red' }
              }}
              style={regstyle.regInput2}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TextInput
              label="Confirm Password"
              mode="outlined"
              secureTextEntry={true}
              theme={{
                roundness: 10,
                colors: { primary: 'red' }
              }}
              style={regstyle.regInput2}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
            <View>
              <Pressable style={regstyle.regbutton} onPress={handleRegister}>
                <Text style={regstyle.regButtonTitle}>Register</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const regstyle = StyleSheet.create({
  regInput: {
    backgroundColor: "white",
    color: "black",
    borderColor: "grey",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  regBody: {
    backgroundColor: "whitesmoke",
    // minHeight: 700,
  },
  regTitle: {
    fontWeight: "bold",
    fontSize: 50,
    alignSelf: "center",
    fontFamily: 'Times New Roman',
    color: 'black',
  },
  regbutton: {
    width: 150,
    backgroundColor: 'red',
    alignItems: 'center',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 10,
  },
  regButtonTitle: {
    fontSize: 25,
    fontWeight: '500',
    marginTop: 6,
    color: "white",
  },
  regInput2: {
    width: 'auto',
    marginLeft: 20,
    marginRight: 20,
    // activeOutlinrColor: 'red',
    // tectColor: 'red',
    // selectionColor: 'red',
    // outlineColor: "red",
    // underlineColorAndroid: "transparent",
    // activeUnderlineColor: 'red',
    marginBottom: 10,
    marginTop: 5,
  },
  regcard: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    elevation: 20,
    paddingTop: 10,
    paddingBottom: 30,
    marginBottom: 100
  }
})

export default Register