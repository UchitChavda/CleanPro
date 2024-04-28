import { View, Text, Pressable, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';

type ReportListStackParamList = {
    "User Home": { Name: string; }
    "Report Status": { Name: string; Email: string };
};

type RListNavigationProps = StackNavigationProp<ReportListStackParamList, "Report Status">;

const fetchReportData = async (email:any) => {
    try {
        const response = await axios.post('http://192.168.0.100:8000/userReport',`email=${email}`);
        const values = response.data.Reports;
        if (values === "No Reports") {
            Alert.alert("Error", "No Reports");
            return null
        }
        return values;
    } catch (error) {
        Alert.alert("Error", `${error}`);
        return null;
    }
};

const ReportStatusList = ({ navigation, route }: { navigation: RListNavigationProps, route: any }) => {
    const email=route.params.Email;
    const [reportvalue, setReportValue] = useState<any>(0);
    useEffect(() => {
        const fetchData = async () => {
            const audata: any = await fetchReportData(email);
            setReportValue(audata);
        };
        fetchData();
    }, []);

    return (
        <View style={rptlStyles.usrBody}>
            <View style={rptlStyles.rptlMainView}>
                <Text style={rptlStyles.rptlTitle}>Submitted Report List</Text>
                {reportvalue !== null && reportvalue !== 0 && (
                    reportvalue.map((item: any, index: any) => (
                        <View style={rptlStyles.rptlListView} key={index}>
                            <View style={rptlStyles.rptlListItem}>
                                <Text style={rptlStyles.rptlListItemText}>Washroom Name: {item.Name}</Text>
                                <Text style={rptlStyles.rptlListItemText}>Washroom Address: {item.Address}</Text>
                                <Text style={rptlStyles.rptlListItemText}>Problem: {item.Title}</Text>
                                <Text style={rptlStyles.rptlListItemText}>Description: {item.Description}</Text>
                                <Text style={rptlStyles.rptlListItemText}>Status: {item.Status}</Text>
                            </View>
                        </View>
                    ))
                )}
            </View>
        </View>
    )
}

const rptlStyles = StyleSheet.create({
    usrBody: {
        backgroundColor: "white",
        height: "100%"
    },
    rptlMainView: {
        // backgroundColor: "blue",
        height: "100%",
        alignItems: 'center'
    },
    rptlTitle: {
        fontSize: 55,
        fontWeight: '600',
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'Times New Roman',
        marginBottom: 30,
        fontStyle: "italic",
    },
    rptlListView: {
        width: "90%"
    },
    rptlListItem: {
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // height: 50,
        // alignItems: 'center',
        elevation: 20,
        borderRadius: 10,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    rptlListItemText: {
        color: "black",
        marginLeft: 20,
        fontSize: 20
    },
    rptlListItemDelButton: {
        backgroundColor: 'red',
        marginRight: 20,
        padding: 5,
        borderRadius: 5
    },
    rptlListItemButtonText: {
        color: "white"
    }
})

export default ReportStatusList