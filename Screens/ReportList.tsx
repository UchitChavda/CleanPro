import { View, Text, Pressable, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

type ReportListStackParamList = {
    "Admin Home": { Name: string; }
    "Report List": undefined;
};

type RListNavigationProps = StackNavigationProp<ReportListStackParamList, "Report List">;

const fetchReportData = async () => {
    try {
        const response = await axios.get('http://192.168.0.100:8000/reportList');
        const values = response.data.Reports;
        if (values === "No Reports") {
            Alert.alert("No Reports", "No Reports has been submitted");
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
        'Are you sure, you want to delete this report?',
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
        const email = item.Email;
        const name = item.Name;
        const address = item.Address;
        const title = item.Title;
        const desciption = item.Description;
        const response = await axios.post('http://192.168.0.100:8000/deleteReport', `email=${email}&name=${name}&add=${address}&title=${title}&des=${desciption}`);
        if (response.data.message === "Report Details Deleted") {
            navigation.replace("Report List");
        }
        else {
            Alert.alert("Error", "Unable To delete the Report");
        }
    } catch (error) {
        Alert.alert("Error", `${error}`);
        return null;
    }
};

const handleConfirmPress = (item: any, navigation: any) => {
    Alert.alert(
        'Change Status',
        'Are you sure, you want to mark this report as completed?',
        [
            {
                text: 'Confirm',
                onPress: () => {
                    handlestatus(item, navigation)
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

const handlestatus = async (item: any, navigation: any) => {
    try {
        console.log(item);
        const email = item.Email;
        const name = item.Name;
        const address = item.Address;
        const title = item.Title;
        const desciption = item.Description;
        const response = await axios.post('http://192.168.0.100:8000/updateReportStatus', `email=${email}&name=${name}&add=${address}&title=${title}&des=${desciption}`);
        if (response.data.message === "Report Details Updated") {
            navigation.replace("Report List");
        }
        else {
            Alert.alert("Error", "Unable To update the Report");
        }
    } catch (error) {
        Alert.alert("Error", `${error}`);
        return null;
    }
};

const ReportList = ({ navigation }: { navigation: RListNavigationProps }) => {
    const [reportvalue, setReportValue] = useState<any>(0);

    useEffect(() => {
        const fetchData = async () => {
            const audata: any = await fetchReportData();
            setReportValue(audata);
        };
        fetchData();
    }, []);

    return (
        <View style={rptlStyles.usrBody}>
            <View style={rptlStyles.rptlMainView}>
                <Text style={rptlStyles.rptlTitle}>Submitted Report List</Text>
                <SafeAreaView style={rptlStyles.safeAreaView}>
                    <ScrollView style={rptlStyles.scrollView}>
                        {reportvalue !== null && reportvalue !== 0 && (
                            reportvalue.map((item: any, index: any) => (
                                <View style={rptlStyles.rptlListView} key={index}>
                                    <View style={rptlStyles.rptlListItem}>
                                        <View>
                                            <Text style={rptlStyles.rptlListItemText}>Report By: {item.Email}</Text>
                                            <Text style={rptlStyles.rptlListItemText}>Washroom Name: {item.Name}</Text>
                                            <Text style={rptlStyles.rptlListItemText}>Washroom Address: {item.Address}</Text>
                                            <Text style={rptlStyles.rptlListItemText}>Problem: {item.Title}</Text>
                                            <Text style={rptlStyles.rptlListItemText}>Description: {item.Description}</Text>
                                        </View>
                                        <View style={rptlStyles.rplButtonView}>
                                            <Pressable style={rptlStyles.rptlListItemConButton} onPress={() => handleConfirmPress(item, navigation)}>
                                                <Text style={rptlStyles.rptlListItemButtonText}>Completed</Text>
                                            </Pressable>
                                            <Pressable style={rptlStyles.rptlListItemDelButton} onPress={() => handlePress(item, navigation)}>
                                                <Text style={rptlStyles.rptlListItemButtonText}>Delete</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            ))
                        )}
                    </ScrollView>
                </SafeAreaView>
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
        justifyContent: 'flex-start',
        // alignItems: 'center',
        elevation: 20,
        borderRadius: 10,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 20
    },
    rptlListItemText: {
        color: "black",
        marginLeft: 20,
        fontSize: 20,
        justifyContent: 'flex-start',
        margin: 2.5
    },
    rptlListItemDelButton: {
        backgroundColor: 'red',
        marginRight: 20,
        padding: 5,
        borderRadius: 5,
        width: 100
    },
    rptlListItemConButton: {
        backgroundColor: 'green',
        marginRight: 20,
        padding: 5,
        borderRadius: 5,
        width: 100,
    },
    rptlListItemButtonText: {
        color: "white",
        alignSelf: 'center'
    },
    rplButtonView: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        width: "100%"
    },
    scrollView: {
        width: "100%",
        marginBottom: 170
    },
    safeAreaView: {
        margin: 0,
        width: "100%",
        marginLeft: 40,
    }
})

export default ReportList