import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'

type AdminStackParamList = {
    Login: undefined;
    "Admin Home": { Name: string; }
    "Sensor Data": undefined;
    "Adminwashroom": undefined;
};

type AdminNavigationProps = StackNavigationProp<AdminStackParamList, "Admin Home">;

const Washlist = ({ navigation }) => {
    return (
        <View style={wlstyles.wlBody}>
            <View style={wlstyles.buttonSupView}>
                <Text style={wlstyles.Title}>Washlist</Text>
                <View style={wlstyles.buttonView}>
                    {
                        location.map((loc) => {
                            return (
                                <Pressable style={wlstyles.wlButton} onPress={() => navigation.navigate("Map", {longitude: loc.longitude, latitude: loc.latitude})}>
                                    <Text style={wlstyles.wlButtonTitle}>{loc.name}</Text>
                                </Pressable>
                            );
                        })
                    }

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
        // marginTop: 20,
        color: 'black',
        fontFamily: 'Times New Roman',
    },
    buttonView: {
        // backgroundColor: "green",
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: "40%",
        marginTop: 30
    },
    wlBody: {
        backgroundColor: 'white',
        height: "100%"
    },
    buttonSupView: {
        backgroundColor: "White",
        height: "100%",
        alignItems: 'center',
        // justifyContent: 'center'
    },
    wlButton: {
        width: "100%",
        backgroundColor: 'white',
        color: 'black',
        alignItems: 'center',
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 20
    },
    wlButtonTitle: {
        fontSize: 20,
        fontWeight: '400',
        // marginTop: 10,
        color: 'black',
    }
});

const location = [
    {
        name: 'Thane',
        latitude: 19.215946,
        longitude: 72.971108
    },
    {
        name: "Dadar",
        latitude: 19.014736,
        longitude: 72.847349
    },
    {
        name: "Russia",
        latitude: 61.402886,
        longitude: 99.695681
    },
    {
        name: "United Kingdom",
        latitude: 54.372500,
        longitude: -1.955495
    },
]

export default Washlist