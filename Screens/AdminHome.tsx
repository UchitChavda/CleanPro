import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';

type AdminStackParamList = {
    Login: undefined;
    "Admin Home": { Name: string; }
    "Sensor Data": undefined;
    "Adminwashroom": undefined;
    "User List": undefined;
    "Report List": undefined;
    "Complete Report List": undefined;
};

type AdminNavigationProps = StackNavigationProp<AdminStackParamList, "Admin Home">;

const AdminHome = ({ navigation,route}:{ navigation: AdminNavigationProps,route:any}) => {
    const Name = route.params.Name;
    return (
        <View style={adhstyles.adhBody}>
            <View style={adhstyles.buttonSupView}>
                <Text style={adhstyles.Title}>Welcome, {Name}</Text>
                <View style={adhstyles.buttonView}>
                    <Pressable style={adhstyles.adhButton} onPress={() => navigation.navigate("Sensor Data")}>
                        <Text style={adhstyles.adhButtonTitle}>Data</Text>
                    </Pressable>
                    <Pressable style={adhstyles.adhButton} onPress={() => navigation.navigate("User List")}>
                        <Text style={adhstyles.adhButtonTitle} >User List</Text>
                    </Pressable>
                    <Pressable style={adhstyles.adhButton} onPress={() => navigation.navigate("Adminwashroom")}>
                        <Text style={adhstyles.adhButtonTitle}>Washroom List</Text>
                    </Pressable>
                    <Pressable style={adhstyles.adhButton} onPress={() => navigation.navigate("Report List")}>
                        <Text style={adhstyles.adhButtonTitle} >Submitted Reports</Text>
                    </Pressable>
                    <Pressable style={adhstyles.adhButton} onPress={() => navigation.navigate("Complete Report List")}>
                        <Text style={adhstyles.adhButtonTitle} >Completed Reports</Text>
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
        color: 'black',
        fontFamily: 'Times New Roman',
        position: 'absolute',
        top: 0,
        fontStyle:"italic",
    },
    buttonView: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: "50%"
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
        width: 200,
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
        color: 'white',
    }
});

export default AdminHome