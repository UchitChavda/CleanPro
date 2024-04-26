import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Result = () => {
  const { height } = useWindowDimensions();
  StatusBar.setBackgroundColor('#ffffff');
  StatusBar.setBarStyle('dark-content');
  const navigationBarHeight = StatusBar.currentHeight || 0; // Get the height of the navigation bar
  const [selectedtab, setselectedtab] = useState(0);

  // State variables for email, password, and confirm password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView
      style={[styles.container, { height: height - navigationBarHeight }]}>
      
        <View style={styles.boxx}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                width: '90%',
                height: 60,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 5,
                paddingRight: 5,
                backgroundColor: 'white',
                alignSelf: 'center',
                marginTop: 15,
                shadowColor: 'gray',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.5,
                shadowRadius: 30,
                elevation: 5,
              }}>
              <TouchableOpacity
                style={{
                  width: '33.33%', // Divide the width into 3 equal parts
                  height: '90%',
                  backgroundColor: selectedtab === 0 ? '#338594' : 'white',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setselectedtab(0);
                }}>
                <Text
                  style={{
                    color: selectedtab === 0 ? '#ffffff' : '#000000',
                    fontSize: 20,
                  }}>
                  Admin
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: '33.33%', // Divide the width into 3 equal parts
                  height: '90%',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: selectedtab === 1 ? '#338594' : 'white',
                }}
                onPress={() => {
                  setselectedtab(1);
                }}>
                <Text
                  style={{
                    color: selectedtab === 1 ? '#ffffff' : '#000000',
                    fontSize: 20,
                  }}>
                  User
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: '33.33%', // Divide the width into 3 equal parts
                  height: '90%',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: selectedtab === 2 ? '#338594' : 'white',
                }}
                onPress={() => {
                  setselectedtab(2);
                }}>
                <Text
                  style={{
                    color: selectedtab === 2 ? '#ffffff' : '#000000',
                    fontSize: 20,
                  }}>
                  Cleaner
                </Text>
              </TouchableOpacity>
            </View>

            {/* Email input field */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />

            {/* Password input field */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
            />

            {/* Confirm Password input field */}
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
            />

            {selectedtab === 0 ? (
              <View
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  marginTop: 20,
                }}>
                
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
              
              </View>
            )}
          </View>
        </View>

        <View style={styles.boxx}>
                  </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#338594',
    marginBottom: 65,
  },
  content: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  horizontalLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
  },
  box: {
    height: 300,
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 30,

    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 5,
  },
  boxx: {
    height: 700,
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 30,

    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 5,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    marginVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop:30,
    
  },
});

export default Result;
