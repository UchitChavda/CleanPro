import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

const myIcon = <Icon name="rocket" size={30} color="#900" />;

const FindWash = () => {
    return (
        <View>
            <SearchBar
                placeholder='Search Washroom'
                icon={<MaterialCommunityIcon name="search" size={30} />}
            />
            <Searchbar
                placeholder='Search Washroom'
                icon={{ type: 'MaterialCommunityIcons', color: 'black', name: 'share' }}
                clearIcon={{ type: 'MaterialCommunityIcons', color: '#86939e', name: 'share' }}
            />
            <Searchbar
                placeholder="Search"
                icon={()=>{myIcon}}
            />
        </View>
    )
}

export default FindWash