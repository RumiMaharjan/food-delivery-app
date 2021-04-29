
import React from 'react';
import { 
    SafeAreaView,
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Splash = ({navigation}) => {
    const { colors } = useTheme();

    return (
        
      <View style={[styles.container]}>
          <StatusBar backgroundColor='#FF6347' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={images.crispy_chicken_burger}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Find best food in your locality!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button} >
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
               
                    <Text style={styles.textSign}>Get Started</Text>
                    
               <Image
               source={icons.arrow}
               resizeMode="contain"
               style={{height: 50, width: 50}}
               />
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    
    );
};

export default Splash;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.30;

const styles = StyleSheet.create({
  container: {

    
    flex: 1, 
    backgroundColor: '#FF6347'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 40
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop:10
    
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'black',
      fontWeight: 'bold'
  }
});

