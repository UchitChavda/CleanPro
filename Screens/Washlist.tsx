import { View, Text, Pressable, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { Searchbar, Button } from 'react-native-paper';
import axios from 'axios';

type UserwStackParamList = {
    "User Home": { Name: string; };
    "Washroom": undefined;
    "Map": { longitude: Number, latitude: Number }
};

type WashNavigationProps = StackNavigationProp<UserwStackParamList, "Washroom">;

const Washlist = ({ navigation }: { navigation: WashNavigationProps }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchvalue, setSearchValue] = useState<any>(0);

    const onChangeSearch = (query: any) => {
        setSearchQuery(query);
    };

    const handleSearch = async () => {
        if (searchQuery !== "") {
            const response = await axios.post('http://192.168.0.102:8000/washroomDetails', `place=${searchQuery}`);
            const values = response.data.Washrooms;
            if (values === "Washroom not Found") {
                setSearchValue(null);
                Alert.alert("Error", "No Washroom at searched Place");
                return;
            }
            setSearchValue(values);
            return;
        } else {
            Alert.alert("Error", "No Place Entered");
            return;
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
            <View style={wlstyles.wlBody}>
                <View style={wlstyles.buttonSupView}>
                    <Text style={wlstyles.Title}>Find Washroom</Text> 
                    <View style={wlstyles.container}>
                        <Searchbar
                            placeholder='Search Washroom'
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            style={wlstyles.searchBar}
                        />
                        <View style={wlstyles.buttonContainer}>
                            <Button
                                mode="contained"
                                onPress={handleSearch}
                                style={wlstyles.button}
                            >
                                Search
                            </Button>
                        </View>
                    </View>
                    <View style={wlstyles.buttonView}>
                        {searchvalue !== null && searchvalue !== 0 && (
                            <>
                                <Text style={wlstyles.Subtitle}>Washrooms Available At:</Text>
                                {searchvalue.map((item: any, index: any) => (
                                    <Pressable key={index} style={wlstyles.wlButton} onPress={() => navigation.navigate("Map", { longitude: item.longitude, latitude: item.latitude })}>
                                        <Text style={wlstyles.wlButtonTitle}>{item.name}</Text>
                                    </Pressable>
                                ))}
                            </>
                        )}
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const wlstyles = StyleSheet.create({
    Title: {
        fontSize: 50,
        fontWeight: '600',
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'Times New Roman',
        fontStyle: "italic",
    },
    Subtitle: {
        fontSize: 25,
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'Times New Roman',
        fontStyle: "italic",
    },
    buttonView: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        marginTop: '2%',
    },
    wlBody: {
        flex: 1,
        backgroundColor: 'white',
    },
    buttonSupView: {
        flex: 1,
        backgroundColor: "White",
        alignItems: 'center',
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
        elevation: 20,
        marginTop: '1.5%',
    },
    wlButtonTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
    },
    container: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    searchBar: {
        backgroundColor: "whitesmoke",
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        marginRight: '1.75%',
        width: '5.95%',
    },
    button: {
        backgroundColor: "red",
    },

});

export default Washlist