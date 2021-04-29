import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { icons, images } from '../constants';
import {AuthContext} from '../components/Context';
import * as firebase from 'firebase';

const DrawerContent = (props) => {
     const paperTheme = useTheme();
     const {toggleTheme} = useContext(AuthContext);
    //  const {signOut} = useContext(AuthContext);

     const handleLogOut=()=>{
        firebase.auth().signOut();
    }
    
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={images.avatar_3}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Rumi Maharjan</Title>
                                <Caption style={styles.caption}>@rumi rumi</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source= {icons.home}
                              
                                style= {{height: 20, width: 20}}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source= {icons.user}
                                style= {{height: 20, width: 20}}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source= {icons.bookmark}
                                style= {{height: 20, width: 20}}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('Bookmark')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={icons.setting}
                                style= {{height: 20, width: 20}}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Setting')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image 
                                source={icons.support}
                                style= {{height: 20, width: 20}}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('Support')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={paperTheme.dark}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section> 
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Image
                        source={icons.home}
                        style= {{height: 15, width: 15}}
                        />
                    )}
                    label="Sign Out"
                    onPress={()=>{handleLogOut()}}
                />
            </Drawer.Section>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

export default DrawerContent
