import { View, Text, Pressable, StyleSheet,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const fetchUserData = async () => {
    try {
        const response = await axios.get('http://192.168.0.102:8000/userList');
        const values = response.data.Users;
        return values;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const handlePress = (item:any) => { 
    Alert.alert(
      'Title',
      'Message',
      [
        {
          text: 'Button 1',
          style:usrlStyles.usrlListItemButtonText,
          onPress: () => {
            // Execute function for Button 1
            console.log('Button 1 pressed',item);
            // Call your function here
          },
        },
        // Add more buttons as needed
      ],
    );
  };

const UserList = ({ navigation }) => {
    const [uservalue, setUserValue] = useState<any>(0);

    useEffect(() => {
        const fetchData = async () => {
            const audata: any = await fetchUserData();
            setUserValue(audata);
        };
        fetchData();
    }, []);
    return (
        <View style={usrlStyles.usrBody}>
            <View style={usrlStyles.usrlMainView}>
                <Text style={usrlStyles.usrlTitle}>User List</Text>
                {uservalue !== null && uservalue !== 0 && (
                    uservalue.map((item: any, index: any) => (
                        <View style={usrlStyles.usrlListView} key={index}>
                            <View style={usrlStyles.usrlListItem}>
                                <Text style={usrlStyles.usrlListItemText}>{item.Name}</Text>
                                <Text style={usrlStyles.usrlListItemText}>{item.Email}</Text>
                                <Pressable style={usrlStyles.usrlListItemDelButton} onPress={() => handlePress(item)}>
                                    <Text style={usrlStyles.usrlListItemButtonText}>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    ))
                )}
            </View>
        </View>
    )
}

const usrlStyles = StyleSheet.create({
    usrBody: {
        backgroundColor: "white",
        height: "100%"
    },
    usrlMainView: {
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
        marginLeft: 20,
        fontSize: 20,
        color: "black",
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