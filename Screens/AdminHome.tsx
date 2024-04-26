import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
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

const AdminHome = ({ navigation, }: { navigation: NavigationProps }) => {
    return (
        <View style={adhstyles.adhBody}>
            <View style={adhstyles.buttonSupView}>
                <Text style={adhstyles.Title}>Admin Home</Text>
                <View style={adhstyles.buttonView}>
                    <Pressable style={adhstyles.adhButton} onPress={() => navigation.navigate("Sensor Data")}>
                        <Text style={adhstyles.adhButtonTitle}>Sensor Data</Text>
                    </Pressable>
                    <Pressable style={adhstyles.adhButton}>
                        <Text style={adhstyles.adhButtonTitle}>Report</Text>
                    </Pressable>
                    <Pressable style={adhstyles.adhButton}>
                        <Text style={adhstyles.adhButtonTitle}>Report</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const adhstyles = StyleSheet.create({
    Title: {
        fontSize: 55,
        fontWeight: '600',
        alignSelf: 'center',
        // marginTop: 20,
        color: 'black',
        fontFamily: 'Times New Roman',
        position: 'absolute',
        top: 0
    },
    buttonView: {
        // backgroundColor: "green",
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: "30%"
    },
    adhBody: {
        backgroundColor: 'white',
        height: "100%"
    },
    buttonSupView: {
        backgroundColor: "White",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    adhButton: {
        width: 150,
        backgroundColor: 'red',
        alignItems: 'center',
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center'
    },
    adhButtonTitle: {
        fontSize: 20,
        fontWeight: '400',
        // marginTop: 10,
        color: 'white',
    }
});

export default AdminHome