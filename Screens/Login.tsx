import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { Link } from '@react-navigation/native';


const Login = ({ navigation }) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (text: string) => {
    setUserName(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleLogin = () => {
    if (userName === 'A' && password === 'P') {
      navigation.navigate("Admin Home");
    }
    if (userName === 'U' && password === 'P'){
      navigation.navigate("User Home");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  }

  return (
    <View style={logstyle.logBody}>
      <View>
        <Text style={logstyle.logTitle}>Sign In</Text>
      </View>
      <ScrollView>
        <View style={logstyle.logcard}>
          <TextInput
            label="User Name"
            mode="outlined"
            value={userName}
            onChangeText={handleUserNameChange}
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
                underlineColor: 'transparent',
              }
            }}
            style={logstyle.logInput2}
          />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry={true}
            value={password}
            onChangeText={handlePasswordChange}
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
                underlineColor: 'transparent',
              }
            }}
            style={logstyle.logInput2}
          />
          <Text style={logstyle.signupText}>don't have an account ?
            <Link to={{screen : 'Register'}} style={logstyle.signupRegLink}> Register</Link>
          </Text>
          <View>
            <Pressable style={logstyle.logbutton} onPress={handleLogin}>
              <Text style={logstyle.logButtonTitle}>Login</Text>
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
    // minHeight: 700,
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
  logcard: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    elevation: 20,
    paddingTop: 10,
    paddingBottom: 30,
    marginVertical: 120,
  },
  signupRegLink: {
    color: "blue",
  },
  signupText: {
    marginLeft: 20,
    color: "gray"
  }
})

export default Login