import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';
import HeaderButton from '../components/HeaderButton';
import {useTheme} from 'react-native-paper';
import { Home, 
    Profile, 
    Search,
     Notification,
      YourFavorite, 
      Setting, 
      EditProfile, 
      Restaurant, 
      OrderDelivery } from "../screens";


import { icons, COLORS, SIZES, FONTS } from '../constants'


const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const YourFavoriteStack = createStackNavigator();


const Tab = createBottomTabNavigator();


const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
  

    var isSelected = accessibilityState.selected;

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>

                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.white}
                        />
                    </Svg>

                    
                    
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: COLORS.white
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }

}

const Tabs = () => {  
     
    return (
        <Tab.Navigator  
         tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
            name="Search"
            component={SearchStackScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton
                        {...props}
                    />
                )
            }}
        />

            <Tab.Screen
                name="Notification"
                component={NotificationStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="ios-notifications" color={focused ? COLORS.primary : COLORS.secondary} size={26} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Like"
                component={YourFavoriteStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.like}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
         
        </Tab.Navigator>
    )
}

const HomeStackScreen = ({navigation}) => {
    const {colors} = useTheme();
    return (
        <HomeStack.Navigator
      
        >
        <HomeStack.Screen
        name= "Home"
        component= {Home}
        options={{
           title: 'Food Finder',
            headerLeft: () =>(
                <HeaderButton 
                onPress = {()=> navigation.openDrawer()}
                source={icons.list}
                
                />
            ),

            headerRight: () =>(
                <HeaderButton
                onPress= {()=> navigation.openDrawer()}
                source={icons.setting}
                />
            )
        }}
        
        />

        <HomeStack.Screen
        name="Setting"
        component= {Setting}
       
        />
        </HomeStack.Navigator>
    )
}

const SearchStackScreen = ({navigation}) => (
    <SearchStack.Navigator
  
    >
    <SearchStack.Screen
    name= 'Search'
    component= {Search}
    options= {{
        headerLeft: () => (
            <HeaderButton
            onPress={()=> navigation.openDrawer()}
            source={icons.list}
            />
        )
    }}
    />
    </SearchStack.Navigator>
)

const NotificationStackScreen = ({navigation}) => (
    <NotificationStack.Navigator
    
    >
    <NotificationStack.Screen
    name= 'Notification'
    component= {Notification}
    options= {{
        headerLeft: () => (
            <HeaderButton
            onPress={()=>navigation.openDrawer()}
            source={icons.list}
           
            />
        )
    }}
    />
    </NotificationStack.Navigator>
)

const YourFavoriteStackScreen = ({navigation}) => (
    <YourFavoriteStack.Navigator
 
    >
    <YourFavoriteStack.Screen
    name= 'Your Favorite'
    component= {YourFavorite}
    options= {{
        headerLeft: () => (
            <HeaderButton
            onPress={()=>navigation.openDrawer()}
            source={icons.list}
           
            />          
        )
    }}
    />
    </YourFavoriteStack.Navigator>
)

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator
   
    >
    <ProfileStack.Screen
    name= 'Profile'
    component= {Profile}
    options= {{
        headerLeft: () => (
            <HeaderButton
            onPress= {()=>navigation.openDrawer()}
            source={icons.list}
            
            />
            
        ),
        headerRight: () =>(
            <HeaderButton
            onPress={()=> navigation.navigate('EditProfile')}
        source={icons.edit}
    
        
            />
           
        )
    }}
    />
    </ProfileStack.Navigator>
)

export default Tabs;


