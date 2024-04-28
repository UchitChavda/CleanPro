import { View, Text, Pressable, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

type AdminWashStackParamList = {
    "Admin Home": { Name: string; },
    "Adminwashroom": undefined;
    "Map": { longitude: Number, latitude: Number }
    "Washadd": undefined;
};

type AdminWashNavigationProps = StackNavigationProp<AdminWashStackParamList, "Adminwashroom">;

const fetchWashroomData = async () => {
    try {
        const response = await axios.get('http://192.168.0.100:8000/washroomList');
        const values = response.data.Washrooms;
        if (values === "No Washroom") {
            Alert.alert("Error", "No Washrooms");
            return null
        }
        return values;
    } catch (error) {
        Alert.alert("Error", `${error}`);
        return null;
    }
};

const handlePress = (item: any, navigation: any) => {
    Alert.alert(
        'Delete',
        'Are you sure, you want to delete this location?',
        [
            {
                text: 'Confirm',
                onPress: () => {
                    handleDelete(item, navigation)
                },
            },
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'destructive',
            }
        ],
    );
};


const handleDelete = async (item: any, navigation: any) => {
    try {
        const name = item.name;
        const place = item.place;
        const response = await axios.post('http://192.168.0.100:8000/deleteWashroom', `name=${name}&place=${place}`);
        if (response.data.message === "Washroom Details Deleted") {
            navigation.replace("Adminwashroom");
        }
        else {
            Alert.alert("Error", `${response.data.message}`);
        }
    } catch (error) {
        Alert.alert("Error", "Unable To delete the Washroom");
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
                    <Pressable style={wlstyles.wlButton} onPress={() => navigation.navigate("Washadd")}>
                        <Text style={wlstyles.wlButtonTitle}>Add Washroom</Text>
                    </Pressable>
                    <View style={wlstyles.wlListViews}>
                        {washroomvalue !== null && washroomvalue !== 0 && (
                            washroomvalue.map((item: any, index: any) => (
                                <Pressable key={index} style={wlstyles.wlButtonList} onPress={() => navigation.navigate("Map", { longitude: item.longitude, latitude: item.latitude })}>
                                    <View>
                                        <Text style={wlstyles.wlButtonTitle}>{item.name}</Text>
                                        <Text style={wlstyles.wlButtonTitle}>{item.place}</Text>
                                    </View>
                                    <View>
                                        <Pressable style={wlstyles.usrlListItemDelButton} onPress={() => handlePress(item, navigation)}>
                                            <Text style={wlstyles.usrlListItemButtonText}>Delete</Text>
                                        </Pressable>
                                    </View>
                                </Pressable>
                            ))
                        )}
                    </View>
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
        // justifyContent: 'space-around',
        height: "100%",
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
        height: "8%",
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 20,
    },
    wlButtonList: {
        width: "100%",
        display: 'flex',
        backgroundColor: 'white',
        color: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
        elevation: 20,
        marginBottom: 20
    },
    wlButtonTitle: {
        fontSize: 20,
        fontWeight: '200',
        color: 'black',
        fontFamily: 'Times New Roman',
        fontStyle: "italic",
        marginLeft: 20
    },
    usrlListItemDelButton: {
        backgroundColor: 'red',
        marginRight: 20,
        padding: 5,
        borderRadius: 5
    },
    usrlListItemButtonText: {
        color: "white"
    },
    wlListViews: {
        width: "100%",
        marginTop: 20
    }

});

export default AdminWashlist