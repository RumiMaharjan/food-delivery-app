import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Splash';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Root = createStackNavigator();

const RootStack= ({navigation}) => (
    <Root.Navigator headerMode='none'>
        <Root.Screen name="Splash" component={Splash}/>
        <Root.Screen name="SignIn" component={SignIn}/>
        <Root.Screen name="SignUp" component={SignUp}/>
    </Root.Navigator>
);

export default RootStack;