import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type LoginStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  "Admin Home": { Name: string; }
  "User Home": { Name: string; }
};

type NavigationProps = StackNavigationProp<LoginStackParamList, 'Login'>;

const Login = ({ navigation }: { navigation: NavigationProps }) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (text: string) => {
    setUserName(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    try {
      if (userName !== '' && password !== '') {
        if (password.length > 8) {
          const response = await axios.post('http://192.168.0.102:8000/userDetails',`email=${userName}&password=${password}`)
          const role = response.data.Role
          const name = response.data.Name
          if (role == "Admin") {
            navigation.navigate("Admin Home", { Name: name });
          }
          else if (role == "User") {
            navigation.navigate("User Home", { Name: name });
          }
          else if (role == "User Not Found") {
            Alert.alert("Error", "Invalid username or password");
          }
        } else { Alert.alert("Error", "Password must be at least 8 characters long"); }
      } else {
        Alert.alert("Error", "Fill the credentials");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  return (
    <View style={logstyle.logBody}>
      <View>
        <Text style={logstyle.logTitle}>Sign In</Text>
      </View>
      <ScrollView>
        <View style={logstyle.logcard}>
          <TextInput
            label="Email"
            mode="outlined"
            value={userName}
            onChangeText={handleUserNameChange}
            theme={{
              roundness: 10,
              colors: {
                primary: 'red',
                // underlineColor: 'transparent',
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
                // underlineColor: 'transparent',
              }
            }}
            style={logstyle.logInput2}
          />
          <Text style={logstyle.signupText}>Don't have an account?
            <Link to={{ screen: 'Register' }} style={logstyle.signupRegLink}> Register</Link>
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
    backgroundColor: "white",
    minHeight: "100%",
  },
  logTitle: {
    fontWeight: "bold",
    fontSize: 50,
    alignSelf: "center",
    fontFamily: 'Times New Roman',
    fontStyle: 'italic',
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
    backgroundColor: "white",
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
    color: "red",
  },
  signupText: {
    marginLeft: 20,
    color: "gray"
  }
})

export default Login