import { View, Text, StyleSheet, Image } from 'react-native'
import React,{useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native';
import createMapLink from 'react-native-open-maps';

const SenGraph = ({ navigation, route }) => {
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
            <ScrollView>
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
                        <Text style={sgstyles.sgGraphTitle}>Sensor Data Graph : </Text>
                        <ScrollView style={sgstyles.sgGraphCard}>
                            <Image
                                source={getSensorImagePath()}
                                style={sgstyles.sgGraph}
                            />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        )
    }

const sgstyles = StyleSheet.create({
    sgBody: {
        backgroundColor: 'white',
        minHeight: '100%',
        height: '200%'
    },
    sgGraphView: {
        marginTop: 50
    },
    sgGraphCard: {
        backgroundColor: 'white',
        minHeight: 200,
        marginTop: 10,
        margin: 20,
        borderRadius: 20,
        elevation: 20,
    },
    sgTitleView: {
        flexDirection: 'row',
        marginLeft: 20
    },
    sgSenTitle: {
        fontSize: 25,
        fontWeight: '500',
        // flex: 1,
        color: "black",
    },
    sgSenName: {
        fontSize: 25,
        fontWeight: '500',
        // flex: 1,
        color: "black",
    },
    sgGraph: {
        maxWidth: 500,
        margin: 30,
        padding: 0,
        width: "100%",
        justifyContent: 'center',
        alignSelf: 'center',
        // marginLeft: 200
    },
    sgGraphTitle: {
        fontSize: 30,
        fontWeight: '500',
        color: "black",
        marginLeft: 20
    }
})

export default SenGraph