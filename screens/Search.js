import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState}from 'react';
import {
    View, 
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity

} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import restaurantData from '../model/restaurantData';
import categoryData from '../model/categoryData';

const Search = ({navigation}) => {
    const [value, setValue] = useState("");
    

    // const handleSearch = (text) => {
    //     const formattedQuery = text.toLowerCase();
    //     const data = restaurantData.filter(this.state.fullData, photo => {
    //         if (photo.title.includes(formattedQuery)){
    //             return true
    //         }
    //         return false
    //     })
    //     setState({data, query:text})

    // }

    return(
        <View style={{flex: 1}}>
        <View style={{
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
            elevation: 5,
            backgroundColor: 'white'
        }}>
        <TouchableOpacity
        onPress={()=> navigation.goBack()}
        >
        <FontAwesome 
        name="arrow-left"
        color="#05375a"
        size={20}
    />
        </TouchableOpacity>
        
        <TextInput
        style={{
            width: '70%',
            backgroundColor: '#e6e6e6'
        }}
        value= {value}
        placeholder="Search here"
        
        />
        <FontAwesome 
        name="search"
        color="#05375a"
        size={20}
    />
    </View>
    
        </View>
    )
}

const styles = StyleSheet.create({})

export default Search
