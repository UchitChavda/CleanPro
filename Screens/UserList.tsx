import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const UserList = ({ navigation }) => {
    return (
        <View style={usrlStyles.usrBody}>
            <View style={usrlStyles.usrlMainView}>
                <Text style={usrlStyles.usrlTitle}>User List</Text>
                <View style={usrlStyles.usrlListView}>
                    <View style={usrlStyles.usrlListItem}>
                        <Text style={usrlStyles.usrlListItemText}>User Name</Text>
                        <Pressable style={usrlStyles.usrlListItemDelButton} onPress={() => navigation.navigate("Home")}>
                            <Text style={usrlStyles.usrlListItemButtonText}>Delete</Text>
                        </Pressable>
                    </View>
                    <View style={usrlStyles.usrlListItem}>
                        <Text style={usrlStyles.usrlListItemText}>User Name</Text>
                        <Pressable style={usrlStyles.usrlListItemDelButton} onPress={() => navigation.navigate("Home")}>
                            <Text style={usrlStyles.usrlListItemButtonText}>Delete</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const usrlStyles = StyleSheet.create({
    usrBody: {
        // backgroundColor: "red",
        height: "100%"
    },
    usrlMainView: {
        // backgroundColor: "blue",
        height: "100%",
        alignItems: 'center'
    },
    usrlTitle: {
        fontSize: 55,
        fontWeight: '600',
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'Times New Roman',
        marginBottom: 30,
        fontStyle: "italic",
    },
    usrlListView: {
        // backgroundColor: "green",
        width: "90%"
    },
    usrlListItem: {
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
    usrlListItemText: {
        // backgroundColor: "yellow",
        marginLeft: 20,
        fontSize: 20
    },
    usrlListItemDelButton: {
        backgroundColor: 'red',
        marginRight: 20,
        padding: 5,
        borderRadius: 5
    },
    usrlListItemButtonText: {
        color: "white"
    }
})

export default UserList