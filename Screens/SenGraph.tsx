import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack';

type SGListStackParamList = {
    "Sensor Data": undefined;
    "Sensor Graph": { sensorName: string; sensorValue: string | number; sindex: number }
};

type SGListNavigationProps = StackNavigationProp<SGListStackParamList, "Sensor Graph">;

const SenGraph = ({ navigation, route }: { navigation: SGListNavigationProps, route: any }) => {
    const { sensorName, sensorValue, sindex } = route.params;
    const getSensorImagePath = () => {
        switch (sindex) {
            case 0:
                return require('../Images/Gas.png');
            case 1:
                return require('../Images/Overflow.png');
            case 2:
                return require('../Images/Distance.png');
            case 3:
                return require('../Images/PIR.png');
            case 4:
                return require('../Images/IR.png');
            case 5:
                return require('../Images/Humid.png');
            case 6:
                return require('../Images/Temp.png');
            case 7:
                return require('../Images/Tank.png');
        }
    };

    return (
            <View style={sgstyles.sgBody}>
                <View style={sgstyles.sgTitleView}>
                    <Text style={sgstyles.sgSenTitle}>Sensor Name: </Text>
                    <Text style={sgstyles.sgSenName}>{sensorName}</Text>
                </View>
                <View style={sgstyles.sgTitleView}>
                    <Text style={sgstyles.sgSenTitle}>Sensor Value: </Text>
                    <Text style={sgstyles.sgSenName}>{sensorValue}</Text>
                </View>
                <View style={sgstyles.sgGraphView}>
                    <Text style={sgstyles.sgGraphTitle}>Sensor Data Graph: </Text>
                    <ScrollView style={sgstyles.sgGraphCard}>
                        <Image
                            source={getSensorImagePath()}
                            style={sgstyles.sgGraph}
                        />
                    </ScrollView>
                </View>
            </View>
    )
}

const sgstyles = StyleSheet.create({
    sgBody: {
        backgroundColor: 'white',
        height: '100%',
    },
    sgGraphView: {
        marginTop:"4%"
    },
    sgGraphCard: {
        backgroundColor: 'white',
        height: "42%",
        width:"95%",
        marginTop: "2%",
        margin: 20,
        borderRadius: 20,
        elevation: 20,
        alignSelf: 'center',
    },
    sgTitleView: {
        flexDirection: 'row',
        marginLeft: 20
    },
    sgSenTitle: {
        fontSize: 25,
        fontWeight: '500',
        color: "black",
        fontStyle:"italic",
        fontFamily:"Times New Roman",
    },
    sgSenName: {
        fontSize: 25,
        fontWeight: '500',
        color: "black",
        fontStyle:"italic",
        fontFamily:"Times New Roman",
    },
    sgGraph: {
        maxWidth: 500,
        marginTop: "1.5%",
        width: "100%",
        justifyContent: 'center',
        alignSelf: 'center',
    },
    sgGraphTitle: {
        fontSize: 25,
        fontWeight: '500',
        color: "black",
        marginLeft: 20,
        fontStyle:"italic",
        fontFamily:"Times New Roman",
    }
})

export default SenGraph