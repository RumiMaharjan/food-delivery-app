import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple
} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Menu from '../components/Menu';
// import Share from 'react-native-share';

const Profile = ({navigation})=>{

    // const myCustomShare = async ()=> {
    //     const shareOptions = {
    //         message: 'This is a test message',
    //     }
    //     try{
    //         const ShareResponse = await Share.open(shareOptions);
    //     }catch(error){
    //         console.log('Error =>', error);
    //     }
    // }
    
    function renderUserInfo(){
        return (
            <View>
            <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 18}}>
            <Avatar.Image
            source={icons.user}
            size={80}
            />
    
            <View style={{marginLeft: 20}}>
            <Title style={[styles.title,{
                marginTop: 15,
                marginBottom: 5,
            }]}>Rumi Maharjan</Title>
            <Caption style={styles.caption}>rumi rumi</Caption>
            </View>
            </View>  
            </View>
    
            <View style={styles.userInfoSection}>
            <View style={styles.row}>
            <Image
            source={icons.location}
           resizeMode='contain' 
           style={{
               width: 20,
               height: 20,
           }}
            />
            <Text style={{color: '#777777', marginLeft: 20}}>Lalitpur, Nepal</Text>
            </View>
    
            <View style={styles.row}>
            <Image
            source={icons.phone}
           resizeMode='contain' 
           style={{
               width: 20,
               height: 20,
           }}
            />
            <Text style={{color: '#777777', marginLeft: 20}}>545645212</Text>
            </View>
    
            <View style={styles.row}>
            <Image
            source={icons.email}
           resizeMode='contain' 
           style={{
               width: 20,
               height: 20,
           }}
            />
            <Text style={{color: '#777777', marginLeft: 20}}>rumi@gmail.com</Text>
            </View>
            </View>
            </View>
        )

    }

    function renderInfoBox(){
        return (
            <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
                borderRightColor: '#dddddd',
                borderRightWidth: 1
            }]}>
            <Title>Rs 140</Title>
            <Caption>Wallet</Caption>
            </View>
    
            <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Orders</Caption>
            </View>
            </View>

        )
    }

    function renderMenu(){
        return (
            <ScrollView >
            <View style={styles.menuWrapper}>
            <Menu
            source={icons.like}
            menuName="Your Favorites"
            onPress= {()=>navigation.navigate('YourFavorite')}
            />

            <Menu
            source={icons.payment}
            menuName="Payment"
            onPress = {()=>navigation.navigate('Payment')}
            />

            <Menu
            source={icons.forward}
            menuName="Tell Your Friends"
            onPress = {()=>navigation.navigate('TellYourFriends')}
            />

            <Menu
            source={icons.support}
            menuName="Support"
            onPress= {()=>navigation.navigate('Support')}
            />
            
            </View>
            </ScrollView>

        )
    }
    return (
        <SafeAreaView style={styles.container}>
        {renderUserInfo()}
        {renderInfoBox()}
        {renderMenu()}        
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex : 1,
            paddingTop: 15
        },
        userInfoSection: {
            
            paddingHorizontal:30 ,
            marginBottom: 10,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        caption: {
            fontSize: 14,
            lineHeight: 14,
            fontWeight: '500',
        },
        row: {
            flexDirection: 'row',
            marginBottom: 10,
        },
        infoBoxWrapper: {
            borderBottomColor: '#dddddd',
            borderBottomWidth: 1,
            borderTopColor: '#dddddd',
            flexDirection: 'row',
            borderTopWidth: 1,
            height: 80
        },
        infoBox: {
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
        },

        menuWrapper : {
            marginTop: 10

        },
        menuItem: {
            flexDirection: 'row',
            paddingVertical: 12,
            paddingHorizontal: 30,
        },
        menuItemText: {
            color: '#777777',
            marginLeft: 20,
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 26
        },


    });

    export default Profile;