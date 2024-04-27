import { View, Text, Pressable, StyleSheet,Alert } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';

type ReportListStackParamList = {
    "Admin Home": { Name: string; }
    "Report List": undefined;
};

type RListNavigationProps = StackNavigationProp<ReportListStackParamList, "Report List">;

const fetchReportData = async () => {
    try {
        const response = await axios.get('http://192.168.0.102:8000/reportList');
        const values = response.data.Reports;
        console.log(values)
        if (values==="No Reports"){
            Alert.alert("Error", "No Reports"); 
            return null
        }
        return values;
    } catch (error) {
        console.error('Error fetching data:', error);
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
        console.log(item);
        // const Email = item.Email;
        // const response = await axios.post('http://192.168.0.102:8000/deleteUser', `email=${Email}`);
        // if (response.data.message === "User Deleted") {
        //     navigation.replace("User List");
        // }
        // if (response.data.message === "User Cannot be Deleted") {
        //     Alert.alert("Error", "Unable To delete the User");
        // }
    } catch (error) {
        console.error('Error fetching data:', error);
        Alert.alert("Error", "Unable To delete the User");
        return null;
    }
};


const ReportList = ({ navigation }: { navigation: RListNavigationProps}) => {
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
                {reportvalue !== null && reportvalue !== 0 && (
                    reportvalue.map((item: any, index: any) => (
                        <View style={rptlStyles.rptlListView} key={index}>
                            <View style={rptlStyles.rptlListItem}>
                                <Text style={rptlStyles.rptlListItemText}>Report By: {item.Email}</Text>
                                <Text style={rptlStyles.rptlListItemText}>Washroom Name: {item.Name}</Text>
                                <Text style={rptlStyles.rptlListItemText}>Washroom Address: {item.Address}</Text>
                                <Text style={rptlStyles.rptlListItemText}>Problem: {item.Title}</Text>
                                <Text style={rptlStyles.rptlListItemText}>Description: {item.Description}</Text>
                                <Pressable style={rptlStyles.rptlListItemDelButton} onPress={() => handlePress(item, navigation)}>
                                    <Text style={rptlStyles.rptlListItemButtonText}>Delete</Text>
                                </Pressable>
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
        // backgroundColor: "green",
        width: "90%"
    },
    rptlListItem: {
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
        elevation: 20,
        borderRadius: 10,
        marginBottom: 20
    },
    rptlListItemText: {
        // backgroundColor: "yellow",
        color:"black",
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

export default ReportList