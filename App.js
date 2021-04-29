import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as firebase from 'firebase';
// import apikeys from './firebase';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import { AuthContext } from "./components/Context";
import {
  RootStack,
  EditProfile,
  Restaurant,
  OrderDelivery,
  DrawerContent,
  Profile,
  Bookmark,
  Support,
} from "./screens";
import Tabs from "./navigation/tabs";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// import AsyncStorage from "@react-native-community/async-storage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const customFonts = {
  Roboto_Black: require("./assets/fonts/Roboto-Black.ttf"),
  Roboto_Bold: require("./assets/fonts/Roboto-Bold.ttf"),
  Roboto_Regular: require("./assets/fonts/Roboto-Regular.ttf"),
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [isLoaded, setIsLoaded] = useState(true);
  const [isAuthenticationReady, setIsAuthenticationReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

//initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyATF807uUEjaGhWNjDZIPlLaOES5A9Jv4M",
  authDomain: "deliverfood-9a5d9.firebaseapp.com",
  projectId: "deliverfood-9a5d9",
  storageBucket: "deliverfood-9a5d9.appspot.com",
  messagingSenderId: "471592924062",
  appId: "1:471592924062:web:6d1e52b0b6ca0048d11c8f"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user)=>{
    setIsAuthenticationReady(true)
    setIsAuthenticated(true)
   setUser(user);
  })
  
}


 
//theme
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;  

  const authContext = React.useMemo(() => ({
   
  //   login: async (email, password) => {
  //     try {
  //         await firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
  //           navigation.navigate('Home')
  //       })
  //     }catch(e){
  //         console.log(e);
  //     }
  // },
  // register: async (email, password)=> {
  //     try{
  //         await firebase.auth().createUserWithEmailAndPassword (email, password).then(()=> navigation.navigate('Home'))

  //     }catch(e){
  //         console.log(e);
  //     }
  // },
  // logout: async () => {
  //     try{
  //         await firebase.auth().signOut();
  //     }catch(e){
  //         console.log(e)
  //     }
  // },
    
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);

  // useEffect(() => {
  // //   setTimeout(async() => {
  // //     // setIsLoading(false);
  // //     let userToken;
  // //     userToken = null;
  // //     try {
  // //       userToken = await AsyncStorage.getItem('userToken');
  // //     } catch(e) {
  // //       console.log(e);
  // //     }
  // //     // console.log('user token: ', userToken);
  // //     dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  // //   }, 1000);
  // // }, []);

  let [fontsLoaded] = useFonts(customFonts);
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // if( loginState.isLoading ) {
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   );
  // }

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Tabs} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Bookmark" component={Bookmark} />
        <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator>
    );
  };

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
        {user ?
          <Stack.Navigator
        screenOptions={{
        headerShown: false,
        }}
        initialRouteName={"Home"}
        >
        <Stack.Screen name="Home" component={DrawerNavigator} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        </Stack.Navigator>
        :
        <RootStack />

        }
      
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;



        
