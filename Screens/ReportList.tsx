import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const ReportList = ({ navigation }) => {
    return (
        <View style={rptlStyles.usrBody}>
            <View style={rptlStyles.rptlMainView}>
                <Text style={rptlStyles.rptlTitle}>Report List</Text>
                <View style={rptlStyles.rptlListView}>
                    <View style={rptlStyles.rptlListItem}>
                        <Text style={rptlStyles.rptlListItemText}>User Name</Text>
                        <Pressable style={rptlStyles.rptlListItemDelButton} onPress={() => navigation.navigate("Home")}>
                            <Text style={rptlStyles.rptlListItemButtonText}>Delete</Text>
                        </Pressable>
                    </View>
                    <View style={rptlStyles.rptlListItem}>
                        <Text style={rptlStyles.rptlListItemText}>User Name</Text>
                        <Pressable style={rptlStyles.rptlListItemDelButton} onPress={() => navigation.navigate("Home")}>
                            <Text style={rptlStyles.rptlListItemButtonText}>Delete</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const rptlStyles = StyleSheet.create({
    usrBody: {
        // backgroundColor: "red",
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