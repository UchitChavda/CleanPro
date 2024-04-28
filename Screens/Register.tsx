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
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type RegisterListStackParamList = {
  Register: undefined;
  Login: undefined;
};

type RegisterListNavigationProps = StackNavigationProp<RegisterListStackParamList, "Register">;

const Register = ({ navigation }: { navigation: RegisterListNavigationProps }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email: string): boolean => {
    if (!email) {
      Alert.alert('Error', 'Please enter an email address.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const validateMobile = (mobile: string): boolean => {
    if (!mobile) {
      Alert.alert('Error', 'Please enter a mobile number.');
      return false;
    }
    if (!/^\d{10}$/.test(mobile)) {
      Alert.alert('Error', 'Please enter a valid 10-digit mobile number.');
      return false;
    }
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (!password) {
      Alert.alert('Error', 'Please enter a password.');
      return false;
    }
    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long.');
      return false;
    }
    if (!/[\W_]/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one special character.');
      return false;
    }
    if (!/\d/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one number.');
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one uppercase letter.');
      return false;
    }
    if (!/[a-z]/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one lowercase letter.');
      return false;
    }
    return true;
  };
  
  const validateName = (name: string, fieldName: string): boolean => {
    if (!name) {
      Alert.alert('Error', `Please enter a ${fieldName}.`);
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(name)) {
      Alert.alert('Error', `Please enter a valid ${fieldName}.`);
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    try {
      if (!validateName(firstName, "First Name")) {
        return;
      } else if (!validateName(lastName, "Last Name")) {
        return;
      } else if (!validateEmail(email)) {
        return;
      } else if (!validateMobile(mobile)) {
        return;
      } else if (!validatePassword(password)) {
        return;
      } else if (password !== confirmPassword) {
        Alert.alert('Passwords do not match.');
        return;
      } else {
        const response = await axios.post('http://192.168.204.152:8000/Signup', `FName=${firstName}&LName=${lastName}&Email=${email}&Mob=${mobile}&Pwd=${password}&Role="User"`);
        const values = response.data.message;
        if (values==="Created Successfully"){
          Alert.alert("Signup Successful", "Login Id has been created successfully",[{text: 'Confirm',onPress: () => {navigation.navigate("Login")},},]); 
          return null
      }else{
        Alert.alert("Error", `${values}`)
      }
      }
    } catch (error) {
      Alert.alert("Error", `${error}`);
      return null;
    }
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
  );
};

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
    backgroundColor: "white",
    minHeight: "100%",
  },
  regTitle: {
    fontWeight: "bold",
    fontSize: 50,
    alignSelf: "center",
    fontFamily: 'Times New Roman',
    fontStyle: 'italic',
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
    marginBottom: 10,
    marginTop: 5,
    backgroundColor:"white",
  },
  regcard: {
    backgroundColor: 'white',
    marginTop: "2.5%",
    margin: "1.3%",
    borderRadius: 20,
    elevation: 20,
    paddingTop: 10,
    paddingBottom: 30,
    marginBottom: 100
  }
})

export default Register