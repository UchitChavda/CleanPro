import { View, Text, Pressable, StyleSheet,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type AdminWashStackParamList = {
    "Admin Home": { Name: string; },
    "Adminwashroom": undefined;
    "Map": { longitude: Number, latitude: Number}
};

type AdminWashNavigationProps = StackNavigationProp<AdminWashStackParamList, "Adminwashroom">;

const fetchWashroomData = async () => {
    try {
        const response = await axios.get('http://192.168.0.102:8000/washroomList');
        const values = response.data.Washrooms;
        if (values==="No Washroom"){
            Alert.alert("Error", "No Washrooms"); 
            return null
        }
        return values;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const AdminWashlist = ({ navigation }: { navigation: AdminWashNavigationProps }) => {
    const [washroomvalue, setWashroomValue] = useState<any>(0);

    useEffect(() => {
        const fetchSensorData = async () => {
            const awdata: any = await fetchWashroomData();
            setWashroomValue(awdata);
        };
        fetchSensorData();
    }, []);
    
    return (
        <View style={wlstyles.wlBody}>
            <View style={wlstyles.buttonSupView}>
                <Text style={wlstyles.Title}>Washroom List</Text>
                <View style={wlstyles.buttonView}>
                    <Pressable style={wlstyles.wlButton} >
                        <Text style={wlstyles.wlButtonTitle}>Add</Text>
                    </Pressable>
                    {washroomvalue !== null && washroomvalue !== 0   && (
                        washroomvalue.map((item: any, index: any) => (
                            <Pressable key={index} style={wlstyles.wlButton} onPress={() => navigation.navigate("Map", { longitude: item.longitude, latitude: item.latitude })}>
                                <Text style={wlstyles.wlButtonTitle}>{item.name}</Text>
                                <Text style={wlstyles.wlButtonTitle}>{item.place}</Text>
                            </Pressable>
                        ))
                    )}
                </View>
            </View>
        </View>
    )
}

const wlstyles = StyleSheet.create({
    Title: {
        fontSize: 55,
        fontWeight: '600',
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'Times New Roman',
        fontStyle: "italic",
    },
    buttonView: {
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: "30%",
        marginTop: 50
    },
    wlBody: {
        backgroundColor: 'white',
        height: "100%"
    },
    buttonSupView: {
        backgroundColor: "White",
        height: "100%",
        alignItems: 'center',
    },
    wlButton: {
        width: "100%",
        backgroundColor: 'white',
        color: 'black',
        alignItems: 'center',
        height: 65,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 20
    },
    wlButtonTitle: {
        fontSize: 20,
        fontWeight: '200',
        color: 'black',
        fontFamily: 'Times New Roman',
        fontStyle: "italic",
    }
});

export default AdminWashlist